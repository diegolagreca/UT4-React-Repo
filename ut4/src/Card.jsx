// src/Card.jsx
import React from 'react';
import './Card.css'; // Archivo de estilos

const Card = ({ title, description, assignedTo, startDate, endDate }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <p><strong>Asignado a:</strong> {assignedTo}</p>
      <p><strong>Fecha de inicio:</strong> {startDate}</p>
      <p><strong>Fecha de fin:</strong> {endDate}</p>
    </div>
  );
};

export default Card;
