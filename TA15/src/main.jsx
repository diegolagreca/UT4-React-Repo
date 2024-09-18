import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { LanguageProvider } from './LanguageContext';  // Importa correctamente LanguageProvider
import { ThemeProvider } from './ThemeContext'; // Asegúrate de que también envuelve a la aplicación

ReactDOM.render(
  <React.StrictMode>
    <LanguageProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </LanguageProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
