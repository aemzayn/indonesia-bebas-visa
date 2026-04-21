import { useI18n } from '../i18n';
import { CATEGORY_COLORS, type CountryVisa } from '../data/visa-data';

interface Props {
  country: CountryVisa | null;
  onClose: () => void;
}

export default function CountryInfoSheet({ country, onClose }: Props) {
  const { t } = useI18n();

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ease-out ${
        country ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-gray-950/98 backdrop-blur-md border-t border-white/10 rounded-t-2xl px-5 pt-3 pb-8 shadow-2xl">
        {/* Drag handle */}
        <div className="w-10 h-1 bg-white/20 rounded-full mx-auto mb-4" />

        {country ? (
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="inline-block w-2.5 h-2.5 rounded-sm flex-shrink-0"
                  style={{ backgroundColor: CATEGORY_COLORS[country.category] }}
                />
                <span
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: CATEGORY_COLORS[country.category] }}
                >
                  {t.categories[country.category]}
                </span>
              </div>
              <p className="text-white font-bold text-lg leading-tight">{country.name}</p>
              <p className="text-white/50 text-sm mt-0.5">{t.continents[country.continent]}</p>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-white/40 text-sm">{t.stay}:</span>
                <span className="text-white text-sm font-medium">{country.duration}</span>
              </div>
              {country.notes && (
                <p className="mt-2 text-white/50 text-sm leading-relaxed">{country.notes}</p>
              )}
            </div>
            <button
              onClick={onClose}
              className="text-white/30 hover:text-white transition-colors p-1 flex-shrink-0 mt-1"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        ) : (
          <p className="text-white/30 text-sm text-center py-2">{t.tapForInfo}</p>
        )}
      </div>
    </div>
  );
}
