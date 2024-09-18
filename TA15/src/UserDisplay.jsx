import { useContext } from 'react';
import UserContext from './UserContext';
import { LanguageContext } from './LanguageContext';

function UserDisplay() {
  const { userName } = useContext(UserContext);
  const { language, translations } = useContext(LanguageContext);

  return (
    <div>
      <h2>{translations[language].userName}: {userName}</h2>
      <p>{translations[language].currentLanguage}: {language === 'es' ? 'Español' : 'English'}</p>
    </div>
  );
}

export default UserDisplay;
