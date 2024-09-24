import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import ProtectedRoute from './components/ProtectedRoute';
import ProtectionSlider from './components/ProtectionSlider';

function App() {
  const [isProtected, setIsProtected] = useState(true);

  const toggleProtection = () => {
    setIsProtected(!isProtected);
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/dashboard">Dashboard (Protected)</Link>
        </nav>

        {/* Slider para alternar entre protegido/desprotegido */}
        <ProtectionSlider isProtected={isProtected} toggleProtection={toggleProtection} />

        <Routes>
          {/* Ruta pública */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Ruta protegida */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isProtected={isProtected}>
                <h2>Dashboard (Ruta Protegida)</h2>
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
