import { useState } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState('')          // Estado para la tarea actual
  const [taskList, setTaskList] = useState([])   // Estado para la lista de tareas
  const [isEditing, setIsEditing] = useState(null) // Estado para saber qué tarea se está editando
  const [editText, setEditText] = useState('')  // Estado para manejar el texto de edición

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

  // Función para manejar el cambio del input de edición
  const handleEditInputChange = (e) => {
    setEditText(e.target.value)  // Actualiza el valor del texto que se está editando
  }

  // Función para comenzar la edición de una tarea
  const startEditing = (index) => {
    setIsEditing(index)  // Activa el modo de edición
    setEditText(taskList[index].text)  // Coloca el texto actual en el input
  }

  // Función para guardar los cambios
  const saveTask = (index) => {
    const updatedTasks = taskList.map((task, i) =>
      i === index ? { ...task, text: editText } : task
    )
    setTaskList(updatedTasks)
    setIsEditing(null)  // Termina el modo de edición
  }

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <div>
        {/* Input para escribir una nueva tarea */}
        <input
          type="text"
          value={task}
          onChange={handleInputChange}
          placeholder="Escribe una tarea..."
        />
        {/* Botón para agregar la tarea */}
        <button onClick={addTask}>Agregar Tarea</button>
      </div>

      {/* Muestra la lista de tareas */}
      <ul>
        {taskList.map((task, index) => (
          <li key={index}>
            <input 
              type="checkbox" 
              checked={task.completed} 
              onChange={() => toggleComplete(index)} 
            />
            {/* Verifica si está en modo de edición */}
            {isEditing === index ? (
              <>
                <input 
                  type="text" 
                  value={editText}  // Usa el estado editText
                  onChange={handleEditInputChange}
                  autoFocus
                />
                <button onClick={() => saveTask(index)}>Guardar</button>
              </>
            ) : (
              <>
                <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                  {task.text}
                </span>
                {/* Botón para editar */}
                <button onClick={() => startEditing(index)}>Editar</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
