import type { Translations } from './types';

export const en: Translations = {
  appSubtitle: ({ count, free, voa, evisa }) =>
    `${count} countries · ${free} visa-free · ${voa} VoA · ${evisa} e-Visa`,
  bestByMonth: 'Best by Month',

  passportLabel: 'Indonesian Passport',
  homeCountry: 'Indonesia (Home)',

  allContinents: 'All',
  continents: {
    'Southeast Asia': 'Southeast Asia',
    'East Asia': 'East Asia',
    'South Asia': 'South Asia',
    'Central Asia': 'Central Asia',
    'Middle East': 'Middle East',
    'Europe': 'Europe',
    'Africa': 'Africa',
    'Americas': 'Americas',
    'Oceania': 'Oceania',
  },

  categories: {
    'visa-free': 'Visa Free',
    'visa-on-arrival': 'Visa on Arrival',
    'e-visa': 'E-Visa',
  },

  stay: 'Stay',
  tapForInfo: 'Tap a country for details',

  sidebarTitle: 'Best to Visit',
  sidebarSubtitle: 'By month for Indonesian travelers',
  countriesAccessible: (count) => `${count} countries accessible · Indonesian Passport`,

  months: [
    { name: 'January',   short: 'Jan' },
    { name: 'February',  short: 'Feb' },
    { name: 'March',     short: 'Mar' },
    { name: 'April',     short: 'Apr' },
    { name: 'May',       short: 'May' },
    { name: 'June',      short: 'Jun' },
    { name: 'July',      short: 'Jul' },
    { name: 'August',    short: 'Aug' },
    { name: 'September', short: 'Sep' },
    { name: 'October',   short: 'Oct' },
    { name: 'November',  short: 'Nov' },
    { name: 'December',  short: 'Dec' },
  ],

  monthlyPicks: [
    // January
    { picks: [
      { highlight: 'Snow & Ski', reason: 'Cappadocia blanketed in snow with hot-air balloons above frozen fairy chimneys. Uludağ ski resort in full season.' },
      { highlight: 'Perfect Weather', reason: 'Driest month of the year — crystal-clear water and peak snorkelling visibility.' },
      { highlight: 'Cool & Comfortable', reason: 'Ideal temperature for exploring Luxor and Abu Simbel without the summer heat.' },
    ]},
    // February
    { picks: [
      { highlight: 'Petra in Bloom', reason: 'Wildflowers around Petra and Wadi Rum. Comfortable 20°C — perfect for hiking.' },
      { highlight: 'Beach Season', reason: 'Southwest coast (Mirissa, Galle) is in its prime — calm seas and whale watching.' },
      { highlight: 'Desert & Snow', reason: 'Sahara dunes near Merzouga contrast with snowcapped Atlas Mountains.' },
    ]},
    // March
    { picks: [
      { highlight: 'Spring Opening', reason: 'Mountain roads reopen, Tbilisi warms up and the wine regions turn green.' },
      { highlight: 'Golden Central', reason: "Hội An and Da Nang enjoy sunny skies before the rains. Best photography light." },
      { highlight: 'Holi Festival', reason: 'Celebrate Holi (festival of colors) in Rajasthan cities like Jaipur and Udaipur.' },
    ]},
    // April
    { picks: [
      { highlight: 'Tulip Season', reason: "Istanbul's parks explode with tulips. Comfortable spring weather across the country." },
      { highlight: 'Khmer New Year', reason: 'Angkor Wat at dawn in the dry season, plus the vibrant Khmer New Year celebrations.' },
      { highlight: 'Galápagos Season', reason: 'Warm water and baby sea lions on the beaches of the Galápagos Islands.' },
    ]},
    // May
    { picks: [
      { highlight: 'Riviera Pre-Season', reason: 'Albanian Riviera beaches before the European crowd arrives — cheaper and quieter.' },
      { highlight: 'Spring Belgrade', reason: "Exit Festival warmup events and lively kafana culture in Belgrade's spring warmth." },
      { highlight: 'Great Migration', reason: 'Wildebeest calving season in Maasai Mara — incredible wildlife with fewer tourists.' },
    ]},
    // June
    { picks: [
      { highlight: 'Trekking Season', reason: 'Song Kul lake fills with nomadic yurts. Best trekking weather in Tian Shan mountains.' },
      { highlight: 'Exit Festival', reason: "Exit Music Festival at Petrovaradin Fortress — one of Europe's top summer festivals." },
      { highlight: 'Atlas Trekking', reason: "Ideal conditions for trekking Toubkal (North Africa's highest peak) before summer heat." },
    ]},
    // July
    { picks: [
      { highlight: 'Tropical Dry Season', reason: 'Least rainy month. Waterfalls still running, beaches at their best.' },
      { highlight: 'Mountain Escape', reason: 'Gabala and Sheki highlands offer cool relief and ancient Silk Road architecture.' },
      { highlight: 'Coral Season', reason: 'Peak visibility for diving around the Great Astrolabe Reef.' },
    ]},
    // August
    { picks: [
      { highlight: 'Harvest Season', reason: 'Grape harvest begins in Kakheti wine region. Long sunny days across the country.' },
      { highlight: 'Inca Trail Season', reason: 'Driest month to hike the classic Inca Trail to Machu Picchu.' },
      { highlight: 'Blue Domes', reason: 'Long evenings in Samarkand and Bukhara highlight the mosaic tile work at its most vivid.' },
    ]},
    // September
    { picks: [
      { highlight: 'Autumn Colors', reason: 'Mostar and Sarajevo in golden autumn light; waterfalls at Kravica at their fullest.' },
      { highlight: 'Meskel Festival', reason: "Meskel festival (Finding of the True Cross) — one of Africa's most spectacular celebrations." },
      { highlight: 'Eagle Hunting', reason: 'Altai region golden eagle hunting festivals with Kazakh nomads at peak season.' },
    ]},
    // October
    { picks: [
      { highlight: 'Gorilla Trekking', reason: 'Dry season end — Volcanoes NP gorilla treks at best. Lush and dramatic scenery.' },
      { highlight: 'Autumn Monasteries', reason: 'Ancient monasteries surrounded by scarlet and gold autumn foliage in the Debed canyon.' },
      { highlight: 'Lake Ohrid', reason: "Ohrid's UNESCO lakeside old town in mild autumn weather, tourist crowds gone." },
    ]},
    // November
    { picks: [
      { highlight: 'Lantern Festival', reason: "Hội An Full Moon Lantern Festival and the start of the best season in the south." },
      { highlight: 'Calm Seas', reason: 'Transition between monsoons brings calm seas, good diving and fewer crowds.' },
      { highlight: 'Short Rains Safari', reason: 'Short rains bring lush landscapes and newborn animals to Serengeti and Ngorongoro.' },
    ]},
    // December
    { picks: [
      { highlight: 'Festive Cameron', reason: 'Cameron Highlands cool strawberry picking and Christmas markets in KL and Penang.' },
      { highlight: 'New Year at Sea', reason: 'Ring in the New Year over-water with bioluminescent beach nights.' },
      { highlight: 'Patagonia Summer', reason: 'Southern hemisphere summer opens Torres del Paine for world-class trekking.' },
    ]},
  ],
};
