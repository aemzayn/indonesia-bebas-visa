import { useState, useCallback } from 'react';
import Globe from './components/Globe';
import Sidebar from './components/Sidebar';
import Legend from './components/Legend';
import ContinentFilter from './components/ContinentFilter';
import CountryInfoSheet from './components/CountryInfoSheet';
import { type Continent, type CountryVisa, visaData } from './data/visa-data';
import { useI18n } from './i18n';
import { useIsMobile } from './hooks/useIsMobile';

const visaFreeCount = visaData.filter((c) => c.category === 'visa-free').length;
const voaCount = visaData.filter((c) => c.category === 'visa-on-arrival').length;
const evisaCount = visaData.filter((c) => c.category === 'e-visa').length;

export default function App() {
  const { t, lang, setLang } = useI18n();
  const isMobile = useIsMobile();

  const [continentFilter, setContinentFilter] = useState<Continent | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [hoveredCountry, setHoveredCountry] = useState<CountryVisa | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<CountryVisa | null>(null);

  const handleCountryHover = useCallback((country: CountryVisa | null) => {
    setHoveredCountry(country);
  }, []);

  const handleCountryClick = useCallback((country: CountryVisa | null) => {
    if (isMobile) setSelectedCountry(country);
  }, [isMobile]);

  const handleSheetClose = useCallback(() => setSelectedCountry(null), []);

  return (
    <div className="relative w-screen h-screen bg-[#030712] overflow-hidden">
      {/* Globe */}
      <Globe
        continentFilter={continentFilter}
        onCountryHover={handleCountryHover}
        onCountryClick={handleCountryClick}
      />

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-4 md:px-5 py-3 md:py-4 pointer-events-none">
        {/* Title */}
        <div className="pointer-events-auto">
          <h1 className="text-white font-bold text-sm md:text-base leading-tight">
            Indonesia Bebas Visa
          </h1>
          <p className="text-white/40 text-[10px] md:text-xs mt-0.5">
            {t.appSubtitle({ count: visaData.length, free: visaFreeCount, voa: voaCount, evisa: evisaCount })}
          </p>
        </div>

        {/* Right controls */}
        <div className="pointer-events-auto flex items-center gap-2">
          {/* Language toggle */}
          <div className="flex items-center bg-white/10 backdrop-blur-sm border border-white/10 rounded-full p-0.5">
            <button
              onClick={() => setLang('id')}
              className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all ${
                lang === 'id' ? 'bg-white text-gray-900' : 'text-white/60 hover:text-white'
              }`}
            >
              ID
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all ${
                lang === 'en' ? 'bg-white text-gray-900' : 'text-white/60 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          {/* Best by month button */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="flex items-center gap-1.5 bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/10 rounded-full px-3 md:px-4 py-2 text-white text-xs md:text-sm font-medium transition-all"
          >
            <svg className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="hidden sm:inline">{t.bestByMonth}</span>
          </button>
        </div>
      </header>

      {/* Continent filter — positioned below header */}
      <div className="absolute top-[52px] md:top-[60px] left-0 right-0 z-10">
        <ContinentFilter selected={continentFilter} onChange={setContinentFilter} />
      </div>

      {/* Hovered country badge (desktop) */}
      {!isMobile && hoveredCountry && (
        <div className="absolute top-[60px] left-4 md:left-6 z-10 flex items-center gap-2 bg-gray-900/80 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5 pointer-events-none">
          <span className="text-white text-xs font-medium">{hoveredCountry.name}</span>
        </div>
      )}

      {/* Legend */}
      <Legend />

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Sidebar edge tab (desktop, when closed) */}
      {!sidebarOpen && (
        <button
          onClick={() => setSidebarOpen(true)}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-900/80 backdrop-blur-sm border border-white/10 border-r-0 rounded-l-lg px-2 py-3 text-white/50 hover:text-white transition-colors"
          aria-label="Open sidebar"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Mobile: bottom sheet for country info */}
      {isMobile && (
        <CountryInfoSheet country={selectedCountry} onClose={handleSheetClose} />
      )}

      {/* Mobile: tap hint when nothing is selected */}
      {isMobile && !selectedCountry && !sidebarOpen && (
        <div className="absolute bottom-44 left-0 right-0 flex justify-center pointer-events-none">
          <p className="text-white/30 text-xs bg-gray-900/60 backdrop-blur-sm rounded-full px-3 py-1">
            {t.tapForInfo}
          </p>
        </div>
      )}
    </div>
  );
}
