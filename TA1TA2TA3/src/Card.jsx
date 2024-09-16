import React from 'react';
import './Card.css';
import CardChild from './CardChild'; // Importar el componente child

const Card = ({ title, description, assignedTo, startDate, endDate }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
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
