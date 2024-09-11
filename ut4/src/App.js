// src/App.js
import React from 'react';
import './App.css';
import Card from './Card'; // Importar el componente Card modificado
import InputDisplay from './InputDisplay'; // Nuevo componente de input

function App() {
  return (
    <div className="App">

      <InputDisplay />

      <Card
        title="Tarea 1"
        description="Descripción de la tarea 1."
        assignedTo="Diego"
        startDate="2024-09-01"
        endDate="2024-09-15"
      />

      <Card
        title="Tarea 2"
        description="Descripción de la tarea 2."
        assignedTo="Álvaro"
        startDate="2024-09-05"
        endDate="2024-09-20"
      />

      <Card
        title="Tarea 3"
        description="Descripción de la tarea 3."
        assignedTo="Juan"
        startDate="2024-09-10"
        endDate="2024-09-25"
      />


    </div>
  );
}

export default App;
