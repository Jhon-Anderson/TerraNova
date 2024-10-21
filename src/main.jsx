import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/autenticacion/Login';
import Contaminacion from './pages/problem/contaminacion/Contaminacion';
import Escasez from './pages/problem/escasez/Escasez';
import Acidificacion from './pages/problem/acidificacion/Acidificacion';
<<<<<<< HEAD
import Login from './pages/autenticacion/Login';
import Registro from './pages/autenticacion/registro';
import Home from './pages/Home';
=======
>>>>>>> parent of f16eb2b (v2)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
=======
        <Route path="/" element={<Login />} /> 
>>>>>>> parent of f16eb2b (v2)
        <Route path="/home" element={<Home />} />
        <Route path="/contaminacion" element={<Contaminacion />} />
        <Route path="/escasez" element={<Escasez />} />
        <Route path="/acidificacion" element={<Acidificacion />} />
      </Routes>
    </Router>
  </StrictMode>
);