import { useState, useEffect } from 'react';
import './App.css';
import UserContext from './UserContext';
import UserDisplay from './UserDisplay';
import UserInput from './UserInput';
import { ThemeProvider } from './ThemeContext';
import { LanguageProvider, useLanguage } from './LanguageContext'; 
import ThemeToggle from './ThemeToggle';
import ThemedComponent from './ThemedComponent';
import LanguageToggle from './LanguageToggle';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timer, setTimer] = useState(0);
  const [userName, setUserName] = useState('Diego Vázquez');

  const { language, translations } = useLanguage();  // Usa el hook de idioma

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1);
    }, 1000);

    return () => clearInterval(intervalId);  // Limpiar el temporizador al desmontar el componente
  }, []);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>{translations[language].title}</h1>
      <p>{translations[language].timeElapsed}: {timer} segundos</p>

      <ThemeToggle />
      <LanguageToggle />

      <UserDisplay />
      <UserInput />

      <ThemedComponent>
        {loading ? (
          <p>{translations[language].loading}</p>
        ) : (
          <div className="user-grid">
            {users.map((user) => (
              <div key={user.id} className="user-card">
                <img 
                  src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${user.id}`} 
                  alt={`Avatar de ${user.name}`} 
                  width="80"
                  height="80"
                />
                <div>
                  <h3>{user.name}</h3>
                  <p><strong>{translations[language].email}:</strong> {user.email}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </ThemedComponent>
    </div>
  );
}

export default App;
