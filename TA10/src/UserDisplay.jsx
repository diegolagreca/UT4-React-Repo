import { useContext } from 'react';
import UserContext from './UserContext';
import { LanguageContext } from './LanguageContext';

function UserDisplay() {
  const { userName } = useContext(UserContext);
  const { language } = useContext(LanguageContext);

  return (
    <div>
      <h2>Nombre de usuario: {userName}</h2>
      <p>Idioma actual: {language === 'es' ? 'Español' : 'Inglés'}</p>
    </div>
  );
}

export default UserDisplay;
