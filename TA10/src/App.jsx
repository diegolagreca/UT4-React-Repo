import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([])  // Estado para almacenar la lista de usuarios
  const [loading, setLoading] = useState(true)  // Estado para manejar el loading

  // useEffect para hacer la llamada a la API cuando el componente se renderiza
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data)  // Actualiza el estado con los datos obtenidos de la API
        setLoading(false)  // Cambia el estado de loading a false
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
        setLoading(false)  // Aún si hay error, detener el loading
      })
  }, [])  // El arreglo vacío asegura que el efecto solo se ejecute una vez

  return (
    <div className="App">
      <h1>Lista de Usuarios</h1>
      {loading ? (
        <p>Cargando usuarios...</p>  // Mensaje mientras los datos están cargando
      ) : (
        <div className="user-grid">
          {users.map((user) => (
            <div key={user.id} className="user-card">
              {/* Genera una imagen de perfil aleatoria única usando el ID del usuario */}
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
    </div>
  )
}

export default App
