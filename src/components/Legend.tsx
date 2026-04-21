import { CATEGORY_COLORS, type VisaCategory } from '../data/visa-data';
import { useI18n } from '../i18n';

const categories: VisaCategory[] = ['visa-free', 'visa-on-arrival', 'e-visa'];

export default function Legend() {
  const { t } = useI18n();

  return (
    <div className="absolute bottom-6 left-4 md:left-6 bg-gray-900/80 backdrop-blur-sm border border-white/10 rounded-xl px-3 md:px-4 py-2.5 md:py-3 flex flex-col gap-1.5 md:gap-2">
      <p className="text-[10px] md:text-xs font-semibold text-white/50 uppercase tracking-widest mb-0.5 md:mb-1">
        {t.passportLabel}
      </p>
      {categories.map((cat) => (
        <div key={cat} className="flex items-center gap-2">
          <span
            className="inline-block w-2.5 h-2.5 rounded-sm flex-shrink-0"
            style={{ backgroundColor: CATEGORY_COLORS[cat] }}
          />
          <span className="text-xs text-white/90">{t.categories[cat]}</span>
        </div>
      ))}
      <div className="flex items-center gap-2 pt-1.5 mt-0.5 border-t border-white/10">
        <span className="inline-block w-2.5 h-2.5 rounded-sm flex-shrink-0 bg-white" />
        <span className="text-xs text-white/90">{t.homeCountry}</span>
      </div>
    </div>
  );
}
