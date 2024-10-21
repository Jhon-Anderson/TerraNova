import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Contaminacion from './pages/problem/contaminacion/Contaminacion';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/home" element={<Home />} />
        <Route path="/contaminacion" element={<Contaminacion />} /> 
      </Routes>
    </Router>
  </StrictMode>
);