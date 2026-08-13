import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';
import { translations, type Lang } from '../i18n';

interface LangContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: any;
  dir: 'rtl' | 'ltr';
  isRTL: boolean;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('ar');

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
    const dir = translations[newLang].dir;
    document.documentElement.lang = newLang;
    document.documentElement.dir = dir;
    document.body.dir = dir;
    document.body.style.fontFamily = translations[newLang].fontFamily;
  }, []);

  useEffect(() => {
    // Set initial direction
    const dir = translations[lang].dir;
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    document.body.dir = dir;
    document.body.style.fontFamily = translations[lang].fontFamily;
  }, [lang]);

  const t = translations[lang];
  const dir = t.dir;
  const isRTL = dir === 'rtl';

  return (
    <LangContext.Provider value={{ lang, setLang, t, dir, isRTL }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error('useLang must be used within a LangProvider');
  }
  return context;
}
