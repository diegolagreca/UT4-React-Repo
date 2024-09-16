import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <>
      <h1>TA5</h1>
      <div className="card">
        <button onClick={() => setIsVisible(!isVisible)}>
          Toggle Visibility
        </button>
      </div>
      <div style={{ display: isVisible ? 'block' : 'none' }}>
      ⭐⭐ Soy visible :) ⭐⭐
      </div>
    </>
  )
}

export default App
