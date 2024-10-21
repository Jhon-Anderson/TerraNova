import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Contaminacion from './pages/problem/contaminacion/Contaminacion';
import Escasez from './pages/problem/escasez/Escasez';
import Acidificacion from './pages/problem/acidificacion/Acidificacion';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/home" element={<Home />} />
        <Route path="/contaminacion" element={<Contaminacion />} />
        <Route path="/escasez" element={<Escasez />} />
        <Route path="/acidificacion" element={<Acidificacion />} />
      </Routes>
    </Router>
  </StrictMode>
);