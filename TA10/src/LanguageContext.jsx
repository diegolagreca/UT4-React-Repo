import React, { createContext, useState } from 'react';

// Crear el contexto de idioma
const LanguageContext = createContext();

// Crear el proveedor del contexto de idioma
const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es'); // 'es' para español, 'en' para inglés

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'es' ? 'en' : 'es'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };
