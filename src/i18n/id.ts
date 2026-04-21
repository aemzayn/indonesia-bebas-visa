import type { Translations } from './types';

export const id: Translations = {
  appSubtitle: ({ count, free, voa, evisa }) =>
    `${count} negara · ${free} bebas visa · ${voa} visa saat tiba · ${evisa} e-visa`,
  bestByMonth: 'Terbaik per Bulan',

  passportLabel: 'Paspor Indonesia',
  homeCountry: 'Indonesia (Negara Asal)',
  lastUpdated: (iso) => {
    const d = new Date(`${iso}T00:00:00`);
    return `Diperbarui ${d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}`;
  },

  allContinents: 'Semua',
  continents: {
    'Southeast Asia': 'Asia Tenggara',
    'East Asia': 'Asia Timur',
    'South Asia': 'Asia Selatan',
    'Central Asia': 'Asia Tengah',
    'Middle East': 'Timur Tengah',
    'Europe': 'Eropa',
    'Africa': 'Afrika',
    'Americas': 'Amerika',
    'Oceania': 'Oseania',
  },

  categories: {
    'visa-free': 'Bebas Visa',
    'visa-on-arrival': 'Visa Saat Tiba',
    'e-visa': 'E-Visa',
  },

  stay: 'Lama Tinggal',
  tapForInfo: 'Ketuk negara untuk detail',

  sidebarTitle: 'Terbaik Dikunjungi',
  sidebarSubtitle: 'Per bulan untuk wisatawan Indonesia',
  countriesAccessible: (count) => `${count} negara terjangkau · Paspor Indonesia`,

  months: [
    { name: 'Januari',   short: 'Jan' },
    { name: 'Februari',  short: 'Feb' },
    { name: 'Maret',     short: 'Mar' },
    { name: 'April',     short: 'Apr' },
    { name: 'Mei',       short: 'Mei' },
    { name: 'Juni',      short: 'Jun' },
    { name: 'Juli',      short: 'Jul' },
    { name: 'Agustus',   short: 'Agu' },
    { name: 'September', short: 'Sep' },
    { name: 'Oktober',   short: 'Okt' },
    { name: 'November',  short: 'Nov' },
    { name: 'Desember',  short: 'Des' },
  ],

  monthlyPicks: [
    // Januari
    { picks: [
      { highlight: 'Salju & Ski', reason: 'Cappadocia tertutup salju dengan balon udara panas di atas cerobong peri yang membeku. Resort ski Uludağ sedang berada di musim penuh.' },
      { highlight: 'Cuaca Sempurna', reason: 'Bulan paling kering dalam setahun — air sejernih kristal dan visibilitas snorkeling terbaik.' },
      { highlight: 'Sejuk & Nyaman', reason: 'Suhu ideal untuk menjelajahi Luxor dan Abu Simbel tanpa terik musim panas.' },
    ]},
    // Februari
    { picks: [
      { highlight: 'Petra Mekar', reason: 'Bunga liar bermekaran di sekitar Petra dan Wadi Rum. Suhu nyaman 20°C — sempurna untuk hiking.' },
      { highlight: 'Musim Pantai', reason: 'Pantai barat daya (Mirissa, Galle) sedang prima — laut tenang dan pengamatan paus.' },
      { highlight: 'Gurun & Salju', reason: 'Gumukan pasir Sahara dekat Merzouga kontras dengan Pegunungan Atlas yang bersalju.' },
    ]},
    // Maret
    { picks: [
      { highlight: 'Awal Musim Semi', reason: 'Jalan pegunungan dibuka kembali, Tbilisi mulai menghangat, dan kawasan kebun anggur menghijau.' },
      { highlight: 'Emas Tengah', reason: 'Hội An dan Da Nang menikmati langit cerah sebelum musim hujan tiba. Cahaya terbaik untuk fotografi.' },
      { highlight: 'Festival Holi', reason: 'Rayakan Holi (festival warna) di kota-kota Rajasthan seperti Jaipur dan Udaipur.' },
    ]},
    // April
    { picks: [
      { highlight: 'Musim Tulip', reason: 'Taman-taman Istanbul bermekaran dengan bunga tulip. Cuaca musim semi yang nyaman di seluruh negeri.' },
      { highlight: 'Tahun Baru Khmer', reason: 'Angkor Wat saat fajar di musim kemarau, plus perayaan Tahun Baru Khmer yang meriah.' },
      { highlight: 'Musim Galápagos', reason: 'Air yang hangat dan anak-anak singa laut di pantai Kepulauan Galápagos.' },
    ]},
    // Mei
    { picks: [
      { highlight: 'Riviera Pra-Musim', reason: 'Pantai Riviera Albania sebelum keramaian wisatawan Eropa tiba — lebih murah dan lebih tenang.' },
      { highlight: 'Musim Semi Beograd', reason: 'Acara pra-Exit Festival dan budaya kafana yang ramai di kehangatan musim semi Belgrade.' },
      { highlight: 'Migrasi Besar', reason: 'Musim kelahiran anak gnu di Maasai Mara — satwa liar yang luar biasa dengan lebih sedikit wisatawan.' },
    ]},
    // Juni
    { picks: [
      { highlight: 'Musim Trekking', reason: 'Danau Song Kul dipenuhi yurta nomaden. Cuaca trekking terbaik di Pegunungan Tian Shan.' },
      { highlight: 'Exit Festival', reason: 'Exit Music Festival di Benteng Petrovaradin — salah satu festival musim panas terbaik di Eropa.' },
      { highlight: 'Trekking Atlas', reason: 'Kondisi ideal untuk mendaki Toubkal (puncak tertinggi Afrika Utara) sebelum panas musim panas tiba.' },
    ]},
    // Juli
    { picks: [
      { highlight: 'Musim Kering Tropis', reason: 'Bulan paling sedikit hujan. Air terjun masih mengalir dan pantai dalam kondisi terbaiknya.' },
      { highlight: 'Pelarian Pegunungan', reason: 'Dataran tinggi Gabala dan Sheki menawarkan kesejukan dan arsitektur Jalur Sutra yang kuno.' },
      { highlight: 'Musim Koral', reason: 'Visibilitas puncak untuk menyelam di sekitar Great Astrolabe Reef.' },
    ]},
    // Agustus
    { picks: [
      { highlight: 'Musim Panen', reason: 'Panen anggur dimulai di kawasan anggur Kakheti. Hari-hari cerah yang panjang di seluruh negeri.' },
      { highlight: 'Musim Inca Trail', reason: 'Bulan paling kering untuk mendaki jalur Inca Trail klasik menuju Machu Picchu.' },
      { highlight: 'Kubah Biru', reason: 'Malam-malam panjang di Samarkand dan Bukhara menonjolkan karya mosaik keramik yang paling memukau.' },
    ]},
    // September
    { picks: [
      { highlight: 'Warna Gugur', reason: 'Mostar dan Sarajevo dalam cahaya emas musim gugur; air terjun Kravica mengalir paling deras.' },
      { highlight: 'Festival Meskel', reason: 'Festival Meskel (Penemuan Salib Sejati) — salah satu perayaan paling spektakuler di Afrika.' },
      { highlight: 'Berburu Elang', reason: 'Festival berburu elang emas di kawasan Altai bersama para nomaden Kazakh pada musim puncaknya.' },
    ]},
    // Oktober
    { picks: [
      { highlight: 'Trekking Gorila', reason: 'Akhir musim kemarau — trekking gorila di Volcanoes NP dalam kondisi terbaik. Pemandangan yang subur dan dramatis.' },
      { highlight: 'Biara Musim Gugur', reason: 'Biara-biara kuno dikelilingi dedaunan merah tua dan emas musim gugur di ngarai Debed.' },
      { highlight: 'Danau Ohrid', reason: 'Kota tua Ohrid bertepi danau UNESCO dalam cuaca musim gugur yang sejuk, tanpa keramaian wisatawan.' },
    ]},
    // November
    { picks: [
      { highlight: 'Festival Lentera', reason: 'Festival Lentera Bulan Purnama Hội An dan awal musim terbaik di Vietnam selatan.' },
      { highlight: 'Laut Tenang', reason: 'Pergantian musim monsun membawa laut yang tenang, penyelaman yang bagus, dan lebih sedikit kerumunan.' },
      { highlight: 'Safari Hujan Singkat', reason: 'Hujan singkat menghadirkan lanskap yang subur dan hewan-hewan muda di Serengeti dan Ngorongoro.' },
    ]},
    // Desember
    { picks: [
      { highlight: 'Perayaan Cameron', reason: 'Petik stroberi di Cameron Highlands yang sejuk dan pasar Natal yang meriah di KL serta Penang.' },
      { highlight: 'Tahun Baru di Laut', reason: 'Rayakan Tahun Baru di atas air dengan pantai bioluminesensi yang memukau di malam hari.' },
      { highlight: 'Musim Panas Patagonia', reason: 'Musim panas belahan bumi selatan membuka Torres del Paine untuk trekking kelas dunia.' },
    ]},
  ],
};
