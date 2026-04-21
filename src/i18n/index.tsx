import { createContext, useContext, useState, type ReactNode } from 'react';
import type { Lang, Translations } from './types';
import { en } from './en';
import { id } from './id';

const translations: Record<Lang, Translations> = { en, id };

interface I18nContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const I18nContext = createContext<I18nContextValue>({
  lang: 'id',
  setLang: () => undefined,
  t: id,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('id');
  return (
    <I18nContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
