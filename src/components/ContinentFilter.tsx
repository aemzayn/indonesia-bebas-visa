import { CONTINENTS, type Continent } from '../data/visa-data';
import { useI18n } from '../i18n';

interface Props {
  selected: Continent | null;
  onChange: (continent: Continent | null) => void;
}

export default function ContinentFilter({ selected, onChange }: Props) {
  const { t } = useI18n();

  return (
    <div className="flex flex-nowrap overflow-x-auto md:flex-wrap md:overflow-visible md:justify-center gap-1.5 px-4 pb-1 scrollbar-hide">
      <button
        onClick={() => onChange(null)}
        className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-all border ${
          selected === null
            ? 'bg-white text-gray-900 border-white'
            : 'bg-gray-900/60 backdrop-blur-sm text-white/70 border-white/10 hover:border-white/30 hover:text-white'
        }`}
      >
        {t.allContinents}
      </button>
      {CONTINENTS.map((c) => (
        <button
          key={c}
          onClick={() => onChange(selected === c ? null : c)}
          className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-all border ${
            selected === c
              ? 'bg-white text-gray-900 border-white'
              : 'bg-gray-900/60 backdrop-blur-sm text-white/70 border-white/10 hover:border-white/30 hover:text-white'
          }`}
        >
          {t.continents[c]}
        </button>
      ))}
    </div>
  );
}
