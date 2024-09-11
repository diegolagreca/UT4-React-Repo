// src/CardChild.jsx
import React from 'react';
import './Card.css'; // Archivo de estilos

const CardChild = ({ description, assignedTo, startDate, endDate }) => {
  return (
    <div className="cardchild">
      Esto es un child :D
      <p>{description}</p>
      <p><strong>Asignado a:</strong> {assignedTo}</p>
      <p><strong>Fecha de inicio:</strong> {startDate}</p>
      <p><strong>Fecha de fin:</strong> {endDate}</p>
    </div>
  );
};

export default CardChild;
