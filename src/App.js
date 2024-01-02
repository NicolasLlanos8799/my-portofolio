// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import AboutMe from './AboutMe';
import Contact from './Contact';
import MyWorks from './MyWorks';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <div className="nav-left">
            <p>Nicolas Llanos</p>
          </div>
          <div className="nav-right">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-me">About Me</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/my-works">My Works</Link></li>
            </ul>
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
