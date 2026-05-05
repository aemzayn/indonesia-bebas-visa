# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install          # install dependencies
npm run dev          # dev server → http://localhost:5173
npm run build        # tsc + vite build (output: dist/)
npx tsc --noEmit     # type-check only

bash build-prod.sh   # build Docker image: bebas-visa:prod (linux/amd64)
docker-compose up -d # run production image → http://localhost:8080
```

No test suite exists in this project.

## Architecture

This is a single-page React + TypeScript app — no backend, no database. All data is static TypeScript files bundled at build time and served via nginx in Docker.

**Data flow:** `src/data/visa-data.ts` → `App.tsx` → `Globe.tsx` (renders colored polygons via react-globe.gl / Three.js). Continent filtering, hover/click state, and sidebar state all live in `App.tsx` and are passed down as props.

**Key data files** (the only files that change for content updates):
- `src/data/visa-data.ts` — the `visaData` array (one object per country) and `LAST_UPDATED` date. `isoNumeric` must match world-atlas for the country to render on the globe. Countries with `isoNumeric: 0` (e.g. Kosovo) are included but won't render.
- `src/data/monthly-picks.ts` — 12 × 3 grid of featured countries by month (references `iso2` from visa-data).

**i18n:** Custom context in `src/i18n/index.tsx` exposes `useI18n()` → `{ t, lang, setLang }`. Translation objects live in `src/i18n/en.ts` and `src/i18n/id.ts`. The `monthlyPicks` arrays in both files must stay index-aligned with `monthly-picks.ts`.

**Responsive split:** Desktop shows `CountryTooltip` on hover; mobile shows `CountryInfoSheet` (bottom sheet) on tap. This branch is controlled by `useIsMobile()` in `App.tsx`.

## Updating Visa Data

Always update `LAST_UPDATED` in `src/data/visa-data.ts` whenever any data changes. Valid `continent` values: `'Southeast Asia' | 'East Asia' | 'South Asia' | 'Central Asia' | 'Middle East' | 'Europe' | 'Africa' | 'Americas' | 'Oceania'`.

When changing monthly picks, all three files must stay in sync at the same `[monthIndex][pickIndex]`:
1. `src/data/monthly-picks.ts` — country/iso2/continent
2. `src/i18n/en.ts` — `monthlyPicks[month].picks[i]` English text
3. `src/i18n/id.ts` — same structure, Indonesian text

## Docker & Registry

The production image is `ghcr.io/aemzayn/bebas-visa:prod`. Build and push with:

```bash
bash build-push.sh
```

Watchtower in `docker-compose.yml` polls GHCR and auto-updates the running container when a new `prod` image is pushed.
