import { useState, useEffect } from 'react';
import './App.css';
import UserContext from './UserContext';  // Importar el contexto del usuario
import UserDisplay from './UserDisplay';  // Componente que muestra el nombre del usuario
import UserInput from './UserInput';  // Componente para actualizar el nombre del usuario
import { ThemeProvider } from './ThemeContext';  // Importar el contexto del tema
import { LanguageProvider } from './LanguageContext';  // Importar el contexto del idioma
import ThemeToggle from './ThemeToggle';  // Componente para alternar entre temas
import ThemedComponent from './ThemedComponent';  // Componente que cambia de estilo según el tema
import LanguageToggle from './LanguageToggle';  // Componente para alternar entre idiomas

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timer, setTimer] = useState(0);
  const [userName, setUserName] = useState('Diego Vázquez');

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
    <ThemeProvider>  {/* Proveedor de contexto del tema */}
      <LanguageProvider>  {/* Proveedor de contexto del idioma */}
        <UserContext.Provider value={{ userName, setUserName }}>  {/* Proveedor de contexto del usuario */}
          <div className="App">
            <h1>Lista de Usuarios</h1>
            <p>Tiempo transcurrido: {timer} segundos</p>

            {/* Botón para alternar entre temas */}
            <ThemeToggle />

            {/* Botón para alternar entre idiomas */}
            <LanguageToggle />

            {/* Mostrar y actualizar el nombre del usuario desde el contexto */}
            <UserDisplay />
            <UserInput />

            {/* Envolver la grilla de usuarios dentro del componente temático */}
            <ThemedComponent>
              {loading ? (
                <p>Cargando usuarios...</p>
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
                        <p><strong>Email:</strong> {user.email}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </ThemedComponent>
          </div>
        </UserContext.Provider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
