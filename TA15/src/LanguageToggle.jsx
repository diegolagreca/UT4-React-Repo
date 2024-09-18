import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

function LanguageToggle() {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <button onClick={toggleLanguage}>
      {language === 'es' ? 'Change to English' : 'Cambiar a español'}
    </button>
  );
}

export default LanguageToggle;
