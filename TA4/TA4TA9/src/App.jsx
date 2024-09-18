import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // Utiliza useEffect para cambiar el título cada vez que el contador cambie
  useEffect(() => {
    document.title = `Contador: ${count}`
  }, [count])  // El hook se ejecuta cada vez que 'count' cambia

  return (
    <>
      <h1>TA4 + TA9</h1>
      <h2>Count is {count}</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          +
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          -
        </button>
      </div>
    </>
  )
}

export default App
