import React, { createContext, useState, useContext } from 'react';
import translations from './translations'; // Asegúrate de que este archivo esté en el lugar correcto

const LanguageContext = createContext();  // Exporta el contexto

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es'); // 'es' para español, 'en' para inglés

  const toggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'es' ? 'en' : 'es'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export { LanguageProvider, useLanguage, LanguageContext };  // Asegúrate de exportar tanto el proveedor como el hook
