export type Lang = 'en' | 'id';

export interface PickTranslation {
  highlight: string;
  reason: string;
}

export interface Translations {
  // Header
  appSubtitle: (args: { count: number; free: number; voa: number; evisa: number }) => string;
  bestByMonth: string;

  // Legend
  passportLabel: string;
  homeCountry: string;

  // Continent filter
  allContinents: string;
  continents: Record<string, string>;

  // Visa categories
  categories: {
    'visa-free': string;
    'visa-on-arrival': string;
    'e-visa': string;
  };

  // Tooltip / info sheet
  stay: string;
  tapForInfo: string;

  // Sidebar
  sidebarTitle: string;
  sidebarSubtitle: string;
  countriesAccessible: (count: number) => string;

  // Month names (12 entries)
  months: { name: string; short: string }[];

  // Monthly picks text: 12 months × 3 picks
  monthlyPicks: { picks: PickTranslation[] }[];
}
