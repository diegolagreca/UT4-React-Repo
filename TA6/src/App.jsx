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
      setTaskList([...taskList, { text: task, completed: false }])
      setTask('')       // Limpia el input
    }
  }

  // Función para manejar el cambio del checkbox
  const toggleComplete = (index) => {
    const updatedTasks = taskList.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    )
    setTaskList(updatedTasks)
  }

  return (
    <div className="App">
      <h1>TA6 + TA7</h1>
      <div>
        <input
          type="text"
          value={task}
          onChange={handleInputChange}
          placeholder="Escribe una tarea..."
        />
        <button onClick={addTask}>+ tarea</button>
      </div>

      <ul>
        {taskList.map((task, index) => (
          <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            <input 
              type="checkbox" 
              checked={task.completed} 
              onChange={() => toggleComplete(index)} 
            />
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
