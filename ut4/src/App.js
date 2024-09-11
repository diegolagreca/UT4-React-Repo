// src/App.js
import React from 'react';
import './App.css'; // Estilos globales
import Card from './Card'; // Importar el componente Card

function App() {
  return (
    <div className="App">
      <Card
        title="Tarea 1"
        description="Descripción de la tarea 1."
        assignedTo="Diego Vázquez"
        startDate="2024-09-01"
        endDate="2024-09-15"
      />
      <Card
        title="Tarea 2"
        description="Descripción de la tarea 2."
        assignedTo="Álvaro Baladan"
        startDate="2024-09-05"
        endDate="2024-09-20"
      />
      <Card
        title="Tarea 3"
        description="Descripción de la tarea 3."
        assignedTo="Juan Cama"
        startDate="2024-09-10"
        endDate="2024-09-25"
      />
    </div>
  );
}

export default App;