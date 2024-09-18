import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { LanguageContext } from './LanguageContext';

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, translations } = useContext(LanguageContext);

  return (
    <button onClick={toggleTheme}>
      {translations[language].changeTheme}
    </button>
  );
}

export default ThemeToggle;
