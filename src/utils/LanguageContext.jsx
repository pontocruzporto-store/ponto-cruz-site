import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import pt from '../locales/pt.json';
import en from '../locales/en.json';
import ko from '../locales/ko.json';
import ja from '../locales/ja.json';

const translations = { pt, en, ko, ja };
const supportedLanguages = Object.keys(translations);

const getLanguageFromPath = () => {
  if (typeof window === 'undefined') {
    return 'pt';
  }

  const langMatch = window.location.pathname.match(/^\/(pt|en|ko|ja)(\/|$)/);
  return langMatch && supportedLanguages.includes(langMatch[1])
    ? langMatch[1]
    : 'pt';
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(getLanguageFromPath);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setLanguage(getLanguageFromPath());
  }, [location.pathname]);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    const path = window.location.pathname;
    const newPath = path.replace(/^\/(pt|en|ko|ja)/, `/${lang}`);
    navigate(newPath || `/${lang}`);
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
