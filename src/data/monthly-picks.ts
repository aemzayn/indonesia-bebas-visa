import type { Continent } from './visa-data';

export interface MonthlyPickBase {
  country: string;
  iso2: string;
  continent: Continent;
}

/** 12 months × 3 picks — text content lives in i18n translation files */
export const monthlyPicksBase: MonthlyPickBase[][] = [
  // 0 — January
  [
    { country: 'Turkey', iso2: 'TR', continent: 'Middle East' },
    { country: 'Maldives', iso2: 'MV', continent: 'South Asia' },
    { country: 'Egypt', iso2: 'EG', continent: 'Africa' },
  ],
  // 1 — February
  [
    { country: 'Jordan', iso2: 'JO', continent: 'Middle East' },
    { country: 'Sri Lanka', iso2: 'LK', continent: 'South Asia' },
    { country: 'Morocco', iso2: 'MA', continent: 'Africa' },
  ],
  // 2 — March
  [
    { country: 'Georgia', iso2: 'GE', continent: 'Europe' },
    { country: 'Vietnam', iso2: 'VN', continent: 'Southeast Asia' },
    { country: 'India', iso2: 'IN', continent: 'South Asia' },
  ],
  // 3 — April
  [
    { country: 'Turkey', iso2: 'TR', continent: 'Middle East' },
    { country: 'Cambodia', iso2: 'KH', continent: 'Southeast Asia' },
    { country: 'Ecuador', iso2: 'EC', continent: 'Americas' },
  ],
  // 4 — May
  [
    { country: 'Albania', iso2: 'AL', continent: 'Europe' },
    { country: 'Serbia', iso2: 'RS', continent: 'Europe' },
    { country: 'Kenya', iso2: 'KE', continent: 'Africa' },
  ],
  // 5 — June
  [
    { country: 'Kyrgyzstan', iso2: 'KG', continent: 'Central Asia' },
    { country: 'Serbia', iso2: 'RS', continent: 'Europe' },
    { country: 'Morocco', iso2: 'MA', continent: 'Africa' },
  ],
  // 6 — July
  [
    { country: 'Samoa', iso2: 'WS', continent: 'Oceania' },
    { country: 'Azerbaijan', iso2: 'AZ', continent: 'Central Asia' },
    { country: 'Fiji', iso2: 'FJ', continent: 'Oceania' },
  ],
  // 7 — August
  [
    { country: 'Georgia', iso2: 'GE', continent: 'Europe' },
    { country: 'Peru', iso2: 'PE', continent: 'Americas' },
    { country: 'Uzbekistan', iso2: 'UZ', continent: 'Central Asia' },
  ],
  // 8 — September
  [
    { country: 'Bosnia and Herzegovina', iso2: 'BA', continent: 'Europe' },
    { country: 'Ethiopia', iso2: 'ET', continent: 'Africa' },
    { country: 'Kazakhstan', iso2: 'KZ', continent: 'Central Asia' },
  ],
  // 9 — October
  [
    { country: 'Rwanda', iso2: 'RW', continent: 'Africa' },
    { country: 'Armenia', iso2: 'AM', continent: 'Central Asia' },
    { country: 'North Macedonia', iso2: 'MK', continent: 'Europe' },
  ],
  // 10 — November
  [
    { country: 'Vietnam', iso2: 'VN', continent: 'Southeast Asia' },
    { country: 'Seychelles', iso2: 'SC', continent: 'Africa' },
    { country: 'Tanzania', iso2: 'TZ', continent: 'Africa' },
  ],
  // 11 — December
  [
    { country: 'Malaysia', iso2: 'MY', continent: 'Southeast Asia' },
    { country: 'Maldives', iso2: 'MV', continent: 'South Asia' },
    { country: 'Chile', iso2: 'CL', continent: 'Americas' },
  ],
];
