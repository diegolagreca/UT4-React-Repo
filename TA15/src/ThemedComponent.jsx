import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { LanguageContext } from './LanguageContext';

function ThemedComponent({ children }) {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  const themedStyle = {
    backgroundColor: theme === 'dark' ? '#333' : '#fff',
    color: theme === 'dark' ? '#fff' : '#000',
    padding: '20px',
    borderRadius: '8px',
  };

  return <div style={themedStyle}>{children}</div>;
}

export default ThemedComponent;
