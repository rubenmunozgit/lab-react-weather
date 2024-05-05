import { createContext } from 'react';
import { translations } from '../translations';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const lang = navigator.language ? navigator.language.slice(0, 2) : 'en';
  const translated = {
    lang,
    translatedText: translations[lang],
  };
  return (
    <LanguageContext.Provider value={translated}>
      {children}
    </LanguageContext.Provider>
  );
};
