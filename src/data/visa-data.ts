export type VisaCategory = 'visa-free' | 'visa-on-arrival' | 'e-visa';
export type Continent =
  | 'Southeast Asia'
  | 'East Asia'
  | 'South Asia'
  | 'Central Asia'
  | 'Middle East'
  | 'Europe'
  | 'Africa'
  | 'Americas'
  | 'Oceania';

export interface CountryVisa {
  name: string;
  /** ISO 3166-1 numeric code — matches world-atlas feature IDs */
  isoNumeric: number;
  /** ISO 3166-1 alpha-2, for reference */
  iso2: string;
  category: VisaCategory;
  continent: Continent;
  /** Allowed stay duration */
  duration: string;
  /** Any extra notes shown in tooltip */
  notes?: string;
}

export const visaData: CountryVisa[] = [
  // ─── VISA FREE ────────────────────────────────────────────────────────────
  // Southeast Asia
  { name: 'Malaysia', isoNumeric: 458, iso2: 'MY', category: 'visa-free', continent: 'Southeast Asia', duration: '30 days' },
  { name: 'Singapore', isoNumeric: 702, iso2: 'SG', category: 'visa-free', continent: 'Southeast Asia', duration: '30 days' },
  { name: 'Thailand', isoNumeric: 764, iso2: 'TH', category: 'visa-free', continent: 'Southeast Asia', duration: '30 days' },
  { name: 'Philippines', isoNumeric: 608, iso2: 'PH', category: 'visa-free', continent: 'Southeast Asia', duration: '30 days' },
  { name: 'Vietnam', isoNumeric: 704, iso2: 'VN', category: 'visa-free', continent: 'Southeast Asia', duration: '30 days', notes: 'E-visa also available' },
  { name: 'Cambodia', isoNumeric: 116, iso2: 'KH', category: 'visa-free', continent: 'Southeast Asia', duration: '30 days', notes: 'E-visa also available' },
  { name: 'Laos', isoNumeric: 418, iso2: 'LA', category: 'visa-free', continent: 'Southeast Asia', duration: '30 days' },
  { name: 'Myanmar', isoNumeric: 104, iso2: 'MM', category: 'visa-free', continent: 'Southeast Asia', duration: '14 days', notes: 'Check travel advisory before visiting' },
  { name: 'Brunei', isoNumeric: 96, iso2: 'BN', category: 'visa-free', continent: 'Southeast Asia', duration: '14 days' },
  { name: 'Timor-Leste', isoNumeric: 626, iso2: 'TL', category: 'visa-free', continent: 'Southeast Asia', duration: '30 days' },

  // East Asia
  { name: 'Hong Kong', isoNumeric: 344, iso2: 'HK', category: 'visa-free', continent: 'East Asia', duration: '30 days', notes: 'SAR of China' },
  { name: 'Macau', isoNumeric: 446, iso2: 'MO', category: 'visa-free', continent: 'East Asia', duration: '30 days', notes: 'SAR of China' },

  // Europe
  { name: 'Serbia', isoNumeric: 688, iso2: 'RS', category: 'visa-free', continent: 'Europe', duration: '30 days' },
  { name: 'Bosnia and Herzegovina', isoNumeric: 70, iso2: 'BA', category: 'visa-free', continent: 'Europe', duration: '30 days' },
  { name: 'North Macedonia', isoNumeric: 807, iso2: 'MK', category: 'visa-free', continent: 'Europe', duration: '90 days' },
  { name: 'Albania', isoNumeric: 8, iso2: 'AL', category: 'visa-free', continent: 'Europe', duration: '90 days', notes: 'Seasonal May–Oct' },
  { name: 'Kosovo', isoNumeric: 0, iso2: 'XK', category: 'visa-free', continent: 'Europe', duration: '90 days', notes: 'Not in UN; limited recognition' },
  { name: 'Moldova', isoNumeric: 498, iso2: 'MD', category: 'visa-free', continent: 'Europe', duration: '90 days' },
  { name: 'Belarus', isoNumeric: 112, iso2: 'BY', category: 'visa-free', continent: 'Europe', duration: '30 days', notes: 'Via Minsk National Airport only' },
  { name: 'Georgia', isoNumeric: 268, iso2: 'GE', category: 'visa-free', continent: 'Europe', duration: '365 days' },

  // Africa
  { name: 'Morocco', isoNumeric: 504, iso2: 'MA', category: 'visa-free', continent: 'Africa', duration: '90 days' },

  // Americas
  { name: 'Ecuador', isoNumeric: 218, iso2: 'EC', category: 'visa-free', continent: 'Americas', duration: '90 days' },
  { name: 'Peru', isoNumeric: 604, iso2: 'PE', category: 'visa-free', continent: 'Americas', duration: '183 days' },
  { name: 'Chile', isoNumeric: 152, iso2: 'CL', category: 'visa-free', continent: 'Americas', duration: '90 days' },

  // Oceania
  { name: 'Fiji', isoNumeric: 242, iso2: 'FJ', category: 'visa-free', continent: 'Oceania', duration: '120 days' },
  { name: 'Vanuatu', isoNumeric: 548, iso2: 'VU', category: 'visa-free', continent: 'Oceania', duration: '30 days' },
  { name: 'Micronesia', isoNumeric: 583, iso2: 'FM', category: 'visa-free', continent: 'Oceania', duration: '30 days' },
  { name: 'Tuvalu', isoNumeric: 798, iso2: 'TV', category: 'visa-free', continent: 'Oceania', duration: '30 days' },
  { name: 'Niue', isoNumeric: 570, iso2: 'NU', category: 'visa-free', continent: 'Oceania', duration: '30 days' },
  { name: 'Cook Islands', isoNumeric: 184, iso2: 'CK', category: 'visa-free', continent: 'Oceania', duration: '31 days' },

  // ─── VISA ON ARRIVAL ──────────────────────────────────────────────────────
  { name: 'Maldives', isoNumeric: 462, iso2: 'MV', category: 'visa-on-arrival', continent: 'South Asia', duration: '30 days', notes: 'Free VoA; extendable' },
  { name: 'Nepal', isoNumeric: 524, iso2: 'NP', category: 'visa-on-arrival', continent: 'South Asia', duration: '90 days' },
  { name: 'Egypt', isoNumeric: 818, iso2: 'EG', category: 'visa-on-arrival', continent: 'Africa', duration: '30 days', notes: 'USD 25 fee' },
  { name: 'Jordan', isoNumeric: 400, iso2: 'JO', category: 'visa-on-arrival', continent: 'Middle East', duration: '30 days' },
  { name: 'United Arab Emirates', isoNumeric: 784, iso2: 'AE', category: 'visa-on-arrival', continent: 'Middle East', duration: '30 days', notes: 'Free VoA' },
  { name: 'Qatar', isoNumeric: 634, iso2: 'QA', category: 'visa-on-arrival', continent: 'Middle East', duration: '30 days', notes: 'Free VoA' },
  { name: 'Bahrain', isoNumeric: 48, iso2: 'BH', category: 'visa-on-arrival', continent: 'Middle East', duration: '14 days' },
  { name: 'Tanzania', isoNumeric: 834, iso2: 'TZ', category: 'visa-on-arrival', continent: 'Africa', duration: '90 days', notes: 'USD 50 fee' },
  { name: 'Mozambique', isoNumeric: 508, iso2: 'MZ', category: 'visa-on-arrival', continent: 'Africa', duration: '30 days' },
  { name: 'Madagascar', isoNumeric: 450, iso2: 'MG', category: 'visa-on-arrival', continent: 'Africa', duration: '90 days' },
  { name: 'Comoros', isoNumeric: 174, iso2: 'KM', category: 'visa-on-arrival', continent: 'Africa', duration: '45 days', notes: 'Free VoA' },
  { name: 'Mauritius', isoNumeric: 480, iso2: 'MU', category: 'visa-on-arrival', continent: 'Africa', duration: '90 days', notes: 'Free VoA' },
  { name: 'Seychelles', isoNumeric: 690, iso2: 'SC', category: 'visa-on-arrival', continent: 'Africa', duration: '90 days', notes: 'Free visitor permit on arrival' },
  { name: 'Djibouti', isoNumeric: 262, iso2: 'DJ', category: 'visa-on-arrival', continent: 'Africa', duration: '31 days' },
  { name: 'Guinea-Bissau', isoNumeric: 624, iso2: 'GW', category: 'visa-on-arrival', continent: 'Africa', duration: '90 days' },
  { name: 'Papua New Guinea', isoNumeric: 598, iso2: 'PG', category: 'visa-on-arrival', continent: 'Oceania', duration: '60 days' },
  { name: 'Samoa', isoNumeric: 882, iso2: 'WS', category: 'visa-on-arrival', continent: 'Oceania', duration: '60 days', notes: 'Free entry permit' },
  { name: 'Tonga', isoNumeric: 776, iso2: 'TO', category: 'visa-on-arrival', continent: 'Oceania', duration: '31 days' },
  { name: 'Palau', isoNumeric: 585, iso2: 'PW', category: 'visa-on-arrival', continent: 'Oceania', duration: '30 days' },

  // ─── E-VISA ───────────────────────────────────────────────────────────────
  { name: 'Turkey', isoNumeric: 792, iso2: 'TR', category: 'e-visa', continent: 'Middle East', duration: '30 days', notes: 'Apply at evisa.gov.tr' },
  { name: 'India', isoNumeric: 356, iso2: 'IN', category: 'e-visa', continent: 'South Asia', duration: '30 days', notes: 'e-Tourist Visa; apply at indianvisaonline.gov.in' },
  { name: 'Sri Lanka', isoNumeric: 144, iso2: 'LK', category: 'e-visa', continent: 'South Asia', duration: '30 days', notes: 'Apply at eta.gov.lk' },
  { name: 'Bangladesh', isoNumeric: 50, iso2: 'BD', category: 'e-visa', continent: 'South Asia', duration: '30 days' },
  { name: 'Azerbaijan', isoNumeric: 31, iso2: 'AZ', category: 'e-visa', continent: 'Central Asia', duration: '30 days', notes: 'Apply at evisa.gov.az' },
  { name: 'Armenia', isoNumeric: 51, iso2: 'AM', category: 'e-visa', continent: 'Central Asia', duration: '120 days' },
  { name: 'Uzbekistan', isoNumeric: 860, iso2: 'UZ', category: 'e-visa', continent: 'Central Asia', duration: '30 days' },
  { name: 'Kazakhstan', isoNumeric: 398, iso2: 'KZ', category: 'e-visa', continent: 'Central Asia', duration: '30 days' },
  { name: 'Tajikistan', isoNumeric: 762, iso2: 'TJ', category: 'e-visa', continent: 'Central Asia', duration: '45 days' },
  { name: 'Kyrgyzstan', isoNumeric: 417, iso2: 'KG', category: 'e-visa', continent: 'Central Asia', duration: '30 days' },
  { name: 'Kenya', isoNumeric: 404, iso2: 'KE', category: 'e-visa', continent: 'Africa', duration: '90 days', notes: 'Apply at evisa.go.ke' },
  { name: 'Rwanda', isoNumeric: 646, iso2: 'RW', category: 'e-visa', continent: 'Africa', duration: '30 days', notes: 'Apply at migration.gov.rw' },
  { name: 'Ethiopia', isoNumeric: 231, iso2: 'ET', category: 'e-visa', continent: 'Africa', duration: '90 days' },
  { name: 'Zimbabwe', isoNumeric: 716, iso2: 'ZW', category: 'e-visa', continent: 'Africa', duration: '30 days' },
  { name: 'Australia', isoNumeric: 36, iso2: 'AU', category: 'e-visa', continent: 'Oceania', duration: '3 months per visit / 12 months total', notes: 'ETA (subclass 601) or eVisitor' },
  { name: 'New Zealand', isoNumeric: 554, iso2: 'NZ', category: 'e-visa', continent: 'Oceania', duration: '3 months', notes: 'NZeTA required' },
];

export const CONTINENTS: Continent[] = [
  'Southeast Asia',
  'East Asia',
  'South Asia',
  'Central Asia',
  'Middle East',
  'Europe',
  'Africa',
  'Americas',
  'Oceania',
];

export const CATEGORY_COLORS: Record<VisaCategory, string> = {
  'visa-free': '#22c55e',
  'visa-on-arrival': '#f59e0b',
  'e-visa': '#3b82f6',
};

export const CATEGORY_LABELS: Record<VisaCategory, string> = {
  'visa-free': 'Visa Free',
  'visa-on-arrival': 'Visa on Arrival',
  'e-visa': 'E-Visa',
};
