# Indonesia Bebas Visa

Peta dunia 3D interaktif yang menampilkan negara-negara yang bisa dikunjungi pemegang paspor Indonesia — bebas visa, visa saat tiba, dan e-visa.

**Live:** [bebas-visa.my.id](https://bebas-visa.my.id)

---

## Tech Stack

| Layer | Library |
|-------|---------|
| Framework | React 18 + TypeScript |
| Build tool | Vite 6 |
| 3D Globe | react-globe.gl (Three.js) |
| World GeoJSON | world-atlas + topojson-client |
| Styling | Tailwind CSS v3 |
| i18n | Custom context (Bahasa Indonesia / English) |
| Serve | nginx (via Docker) |

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
# → http://localhost:5173

# 3. Type check
npx tsc --noEmit

# 4. Production build
npm run build
```

---

## Deployment (Docker)

### Build the production image

```bash
bash build-prod.sh
```

This builds `bebas-visa:prod` targeting `linux/amd64`.

### Run with Docker Compose

```bash
docker-compose up -d
# → http://localhost:8080
```

### Push to a registry (optional)

```bash
docker tag bebas-visa:prod your-registry/bebas-visa:prod
docker push your-registry/bebas-visa:prod
```

---

## Updating Visa Data

All visa information is stored in **two TypeScript files** — no database, no backend.  
Changes take effect after rebuilding the image.

### File 1 — Country visa list

**`src/data/visa-data.ts`** — the source of truth for which countries appear on the map.

Each entry in the `visaData` array looks like this:

```ts
{
  name: 'Turkey',          // English country name (used in tooltip)
  isoNumeric: 792,         // ISO 3166-1 numeric — must match world-atlas
  iso2: 'TR',              // ISO 3166-1 alpha-2 — used to match monthly picks
  category: 'e-visa',      // 'visa-free' | 'visa-on-arrival' | 'e-visa'
  continent: 'Middle East',// see Continent type for valid values
  duration: '30 days',     // allowed stay — shown in tooltip
  notes: 'Apply at evisa.gov.tr', // optional — extra info shown in tooltip
}
```

#### Adding a new country

1. Find the country's **ISO 3166-1 numeric code** at [iso.org](https://www.iso.org/obp/ui/#search) or [Wikipedia](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes).
2. Add a new object to the `visaData` array.
3. Choose the correct `continent` — valid values are:

   ```
   'Southeast Asia' | 'East Asia' | 'South Asia' | 'Central Asia'
   'Middle East' | 'Europe' | 'Africa' | 'Americas' | 'Oceania'
   ```

#### Changing a category

Find the entry by `name` or `iso2` and update `category`, `duration`, or `notes`.

```ts
// Before
{ name: 'India', category: 'e-visa', duration: '30 days' }

// After (policy changed to visa-free)
{ name: 'India', category: 'visa-free', duration: '30 days' }
```

#### Removing a country

Delete its object from the array. The country will no longer appear on the map.

> **Note:** Countries with `isoNumeric: 0` (e.g. Kosovo) are included in the data for completeness but will not render on the globe because world-atlas does not contain them.

---

### File 2 — Monthly picks

**`src/data/monthly-picks.ts`** — which countries are highlighted for each month (structure only).  
**`src/i18n/en.ts`** and **`src/i18n/id.ts`** — the recommendation text for each pick.

The picks are a fixed 12 × 3 grid (12 months, 3 picks per month). The structure file and both language files must stay in sync.

#### Changing a pick's country

1. In `src/data/monthly-picks.ts`, update the entry for the target month:

   ```ts
   // Month index 0 = January
   [
     { country: 'Turkey',   iso2: 'TR', continent: 'Middle East' },
     { country: 'Maldives', iso2: 'MV', continent: 'South Asia'  }, // ← change this
     { country: 'Egypt',    iso2: 'EG', continent: 'Africa'      },
   ],
   ```

2. In `src/i18n/en.ts`, update the matching `highlight` and `reason` at the same index:

   ```ts
   // monthlyPicks[0] = January, picks[1] = second pick
   { highlight: 'Perfect Weather', reason: 'Driest month of the year ...' }
   ```

3. Do the same in `src/i18n/id.ts` (Indonesian translation):

   ```ts
   { highlight: 'Cuaca Sempurna', reason: 'Bulan paling kering ...' }
   ```

The month and pick indices must match across all three files:

```
monthlyPicksBase[monthIndex][pickIndex]   ← country/iso2/continent
en.monthlyPicks[monthIndex].picks[pickIndex]  ← English text
id.monthlyPicks[monthIndex].picks[pickIndex]  ← Indonesian text
```

---

### File 3 — Adding a new UI language

1. Copy `src/i18n/en.ts` to `src/i18n/xx.ts` (replace `xx` with the language code).
2. Translate every string value. Do not change keys or the array structure.
3. In `src/i18n/types.ts`, add the new code to the `Lang` type:
   ```ts
   export type Lang = 'en' | 'id' | 'xx';
   ```
4. In `src/i18n/index.tsx`, import and register it:
   ```ts
   import { xx } from './xx';
   const translations: Record<Lang, Translations> = { en, id, xx };
   ```
5. Add a toggle button for the new language in `src/App.tsx`.

---

## Project Structure

```
src/
├── components/
│   ├── Globe.tsx            # 3D globe (react-globe.gl)
│   ├── CountryTooltip.tsx   # Hover tooltip (desktop)
│   ├── CountryInfoSheet.tsx # Bottom sheet (mobile)
│   ├── ContinentFilter.tsx  # Filter pills
│   ├── Sidebar.tsx          # Monthly picks panel
│   └── Legend.tsx           # Color legend
├── data/
│   ├── visa-data.ts         # ← EDIT THIS to update visa info
│   └── monthly-picks.ts     # ← EDIT THIS to update monthly picks
├── hooks/
│   └── useIsMobile.ts
├── i18n/
│   ├── types.ts             # Translation interface
│   ├── en.ts                # ← EDIT THIS for English text
│   ├── id.ts                # ← EDIT THIS for Indonesian text
│   └── index.tsx            # Context + useI18n hook
├── App.tsx
├── main.tsx
└── index.css
public/
├── robots.txt
├── sitemap.xml
├── site.webmanifest
└── og-image.png             # ← ADD THIS (1200×630 px) for social sharing
```

---

## ISO Numeric Code Reference

Quick lookup for common regions:

| Country | iso2 | isoNumeric |
|---------|------|-----------|
| Indonesia | ID | 360 |
| Japan | JP | 392 |
| South Korea | KR | 410 |
| China | CN | 156 |
| Saudi Arabia | SA | 682 |
| USA | US | 840 |
| UK | GB | 826 |
| France | FR | 250 |
| Germany | DE | 276 |
| Brazil | BR | 76 |
| South Africa | ZA | 710 |

Full list: [Wikipedia — ISO 3166-1](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes)

---

## Sources for Visa Policy Updates

- [Passportindex.org — Indonesian Passport](https://www.passportindex.org/passport/indonesia/)
- [IATA Travel Centre](https://www.iata.org/en/services/travel-centre/)
- [Visaindex.com](https://visaindex.com)
- Official embassy/consulate websites for specific countries

> Always verify with the official embassy or airline before traveling — visa policies can change without notice.

---

## License

MIT
