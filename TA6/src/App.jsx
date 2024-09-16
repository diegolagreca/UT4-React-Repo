import { useState } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState('')          // Estado para la tarea actual
  const [taskList, setTaskList] = useState([])   // Estado para la lista de tareas

  // Función para manejar el cambio en el input
  const handleInputChange = (e) => {
    setTask(e.target.value)
  }

  // Función para agregar la tarea
  const addTask = () => {
    if (task.trim()) {  // Solo agrega la tarea si no está vacía
      setTaskList([...taskList, task])
      setTask('')       // Limpia el input
    }
  }

  return (
    <div className="App">
      <h2>TA6</h2>
      <div>
        <input
          type="text"
          value={task}
          onChange={handleInputChange}
          placeholder="Nueva tarea..."
        />
        <button onClick={addTask}>+ tarea</button>
      </div>

      <ul>
        {taskList.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
