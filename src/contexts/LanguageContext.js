import dayjs from 'dayjs';
import { createContext } from 'react';
import { translations } from '../translations';

const localeDayjs = {
  en: () => import('dayjs/locale/en'),
  es: () => import('dayjs/locale/es'),
};

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const lang = navigator.language ? navigator.language.slice(0, 2) : 'en';
  const translated = {
    lang,
    translatedText: translations[lang] || translations['en'],
  };

  const loadLocale = localeDayjs[lang] || localeDayjs['en'];
  loadLocale().then(() => {
    dayjs.locale(lang);
  });

  return (
    <LanguageContext.Provider value={translated}>
      {children}
    </LanguageContext.Provider>
  );
};
