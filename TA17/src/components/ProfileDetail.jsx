import React from 'react';
import { useParams } from 'react-router-dom';

function ProfileDetail({ users }) {
  const { id } = useParams(); // Captura el parámetro `id` de la URL
  const user = users.find((user) => user.id.toString() === id);

  if (!user) {
    return <p>Perfil no encontrado</p>;
  }

  return (
    <div>
      <h2>Detalle del Perfil</h2>
      <div className="user-card">
        <img 
          src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${user.id}`} 
          alt={`Avatar de ${user.name}`} 
          width="80"
          height="80"
        />
        <div>
          <h3>{user.name}</h3>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> {user.website}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetail;