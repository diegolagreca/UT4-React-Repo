// src/Card.jsx
import React from 'react';
import './Card.css'; // Archivo de estilos
import CardChild from './CardChild'; // Importar el componente CardChild

const Card = ({ title, description, assignedTo, startDate, endDate }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      {/* Instancia CardChild y pasa las props necesarias */}
      <CardChild
        description={description}
        assignedTo={assignedTo}
        startDate={startDate}
        endDate={endDate}
      />
    </div>
  );
};

export default Card;
