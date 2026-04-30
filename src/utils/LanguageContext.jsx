import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import pt from '../locales/pt.json';
import en from '../locales/en.json';
import ko from '../locales/ko.json';
import ja from '../locales/ja.json';

const translations = { pt, en, ko, ja };

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('pt');
  const navigate = useNavigate();

  useEffect(() => {
    // Detect language from URL path
    const path = window.location.pathname;
    const langMatch = path.match(/^\/(pt|en|ko|ja)/);
    if (langMatch) {
      setLanguage(langMatch[1]);
    }
  }, []);

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
