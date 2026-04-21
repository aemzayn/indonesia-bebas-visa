import { useState } from 'react';
import { monthlyPicksBase } from '../data/monthly-picks';
import { visaData, CATEGORY_COLORS } from '../data/visa-data';
import { useI18n } from '../i18n';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const CURRENT_MONTH = new Date().getMonth();

export default function Sidebar({ isOpen, onClose }: Props) {
  const { t } = useI18n();
  const [activeMonth, setActiveMonth] = useState(CURRENT_MONTH);

  const basePicks = monthlyPicksBase[activeMonth];
  const textPicks = t.monthlyPicks[activeMonth].picks;

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-20"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed top-0 right-0 h-full z-30 w-full sm:w-80 bg-gray-950/95 backdrop-blur-md border-l border-white/10 flex flex-col transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <div>
            <h2 className="text-white font-semibold text-sm">{t.sidebarTitle}</h2>
            <p className="text-white/40 text-xs mt-0.5">{t.sidebarSubtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="text-white/40 hover:text-white transition-colors p-1"
            aria-label="Close"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Month tabs */}
        <div className="flex overflow-x-auto gap-1 px-3 py-3 border-b border-white/10 scrollbar-hide">
          {t.months.map((m, i) => (
            <button
              key={m.name}
              onClick={() => setActiveMonth(i)}
              className={`flex-shrink-0 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeMonth === i
                  ? 'bg-white text-gray-900'
                  : 'text-white/50 hover:text-white hover:bg-white/5'
              }`}
            >
              {m.short}
            </button>
          ))}
        </div>

        {/* Picks list */}
        <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-4">
          <h3 className="text-white/40 text-xs font-semibold uppercase tracking-widest">
            {t.months[activeMonth].name}
          </h3>
          {basePicks.map((base, j) => {
            const text = textPicks[j];
            const countryData = visaData.find((c) => c.iso2 === base.iso2);
            const category = countryData?.category;
            const color = category ? CATEGORY_COLORS[category] : '#6b7280';
            const categoryLabel = category ? t.categories[category] : '';

            return (
              <div
                key={`${base.iso2}-${j}`}
                className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 flex flex-col gap-2"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-white font-semibold text-sm">{base.country}</p>
                    <p className="text-white/40 text-xs mt-0.5">{t.continents[base.continent]}</p>
                  </div>
                  <span
                    className="text-xs font-medium px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5"
                    style={{ color, backgroundColor: color + '22' }}
                  >
                    {text.highlight}
                  </span>
                </div>
                <p className="text-white/60 text-xs leading-relaxed">{text.reason}</p>
                {category && (
                  <div className="flex items-center gap-1.5 mt-1 text-xs" style={{ color }}>
                    <span className="inline-block w-1.5 h-1.5 rounded-sm" style={{ backgroundColor: color }} />
                    {categoryLabel}
                    {countryData?.duration && (
                      <span className="text-white/30 ml-1">· {countryData.duration}</span>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-5 py-4 border-t border-white/10">
          <p className="text-white/30 text-xs text-center">
            {t.countriesAccessible(visaData.length)}
          </p>
        </div>
      </aside>
    </>
  );
}
