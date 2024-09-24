import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

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
    <div>
      <h1>Lista de Perfiles</h1>
      {loading ? (
        <p>Cargando perfiles...</p>
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
                <Link to={`/profile/${user.id}`}>Ver detalles del perfil</Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;