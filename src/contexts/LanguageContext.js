import dayjs from 'dayjs';
import { createContext, useEffect, useMemo, useState } from 'react';
import { translations } from '../translations';

const loadDayjsLocale = async (lang = 'en') => {
  const loaders = {
    en: () => import('dayjs/locale/en'),
    es: () => import('dayjs/locale/es'),
  };
  await loaders[lang]();
  dayjs.locale(lang);
};

export const LanguageContext = createContext({
  lang: 'en',
  translatedText: translations['en'],
});

export const LanguageProvider = ({ children }) => {
  const browserLang = navigator.language
    ? navigator.language.slice(0, 2)
    : 'en';
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let mounted = true;
    setReady(false);
    const init = async () => {
      await loadDayjsLocale(browserLang);
      if (mounted) {
        setReady(true);
      }
    };
    init();

    return () => {
      mounted = false;
    };
  }, [browserLang]);

  const translated = useMemo(
    () => ({
      lang: browserLang,
      translatedText: translations[browserLang],
    }),
    [browserLang],
  );

  if (!ready) return null;

  return (
    <LanguageContext.Provider value={translated}>
      {children}
    </LanguageContext.Provider>
  );
};
