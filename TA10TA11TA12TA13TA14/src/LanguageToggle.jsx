import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

function LanguageToggle() {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <button onClick={toggleLanguage}>
      Cambiar a {language === 'es' ? 'inglés' : 'español'}
    </button>
  );
}

export default LanguageToggle;