import React from 'react';
import './Card.css'; 
import InputDisplay from './InputDisplay';


const CardChild = ({ description, assignedTo, startDate, endDate }) => {
  return (
    <div className="cardchild">

    Todo esto sale del child :)

      Comentarios para esta tarea:
      <InputDisplay />
      <p>{description}</p>
      <p><strong>Asignado a:</strong> {assignedTo}</p>
      <p><strong>Fecha de inicio:</strong> {startDate}</p>
      <p><strong>Fecha de fin:</strong> {endDate}</p>
    </div>
  );
};

export default CardChild;
