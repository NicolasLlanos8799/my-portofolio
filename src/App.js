import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import AboutMe from './Pages/AboutMe';
import Contact from './Pages/Contact';
import MyWorks from './Pages/MyWorks';
import '@fortawesome/fontawesome-free/css/all.css'; // Importa los estilos de FontAwesome

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Router>
      <div>
        <nav>
          <div className="nav-left">
            <p>Nicolas Llanos</p>
          </div>
          <div className="nav-right">
            {/* Renderiza el "burger menu" solo en dispositivos móviles */}
            {isMobile && (
              <button className="burger-menu" onClick={toggleMenu}>
              <i className="fas fa-bars"></i>
            </button>
            )}

            {/* Renderiza el menú completo o el "burger menu" según el estado */}
            {(isMobile && isMenuOpen) || !isMobile ? (
              <ul className={isMobile ? 'mobile-menu' : ''}>
                <li><Link to="/">INICIO</Link></li>
                <li><Link to="/about-me">SOBRE MI</Link></li>
                <li><Link to="/contact">CONTACTO</Link></li>
                <li><Link to="/my-works">TRABAJOS</Link></li>
              </ul>
            ) : null}
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/my-works" element={<MyWorks />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
