import { useI18n } from '../i18n';
import { CATEGORY_COLORS, type CountryVisa } from '../data/visa-data';

interface Props {
  country: CountryVisa;
  x: number;
  y: number;
}

export default function CountryTooltip({ country, x, y }: Props) {
  const { t } = useI18n();
  const color = CATEGORY_COLORS[country.category];

  // Keep tooltip on screen
  const tipX = x + 14;
  const tipY = Math.max(10, y - 10);

  return (
    <div
      className="pointer-events-none fixed z-50 min-w-[180px] max-w-[240px]"
      style={{ left: tipX, top: tipY }}
    >
      <div className="bg-gray-900/95 backdrop-blur-sm border border-white/10 rounded-xl p-3 shadow-xl">
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-block w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ backgroundColor: color }} />
          <span className="text-xs font-semibold uppercase tracking-wider" style={{ color }}>
            {t.categories[country.category]}
          </span>
        </div>
        <p className="text-white font-semibold text-sm leading-tight mb-1">{country.name}</p>
        <p className="text-white/60 text-xs">{t.continents[country.continent]}</p>
        <div className="mt-2 pt-2 border-t border-white/10 flex justify-between items-center">
          <span className="text-white/50 text-xs">{t.stay}</span>
          <span className="text-white/90 text-xs font-medium">{country.duration}</span>
        </div>
        {country.notes && (
          <p className="mt-2 text-white/50 text-xs leading-snug">{country.notes}</p>
        )}
      </div>
    </div>
  );
}
