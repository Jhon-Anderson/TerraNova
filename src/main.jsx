import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contaminacion from './pages/problem/contaminacion/Contaminacion';
import Escasez from './pages/problem/escasez/Escasez';
import Acidificacion from './pages/problem/acidificacion/Acidificacion';
import Autenticacion from './pages/autenticacion/Autenticacion';
import Escena from './pages/problem/escasez/Escena';
import GameContaminacion from './pages/Juegos/GameContaminacion';
import QuizContaminacion from './pages/problem/contaminacion/QuizContaminacion';
import Home from './pages/Home';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Autenticacion />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contaminacion" element={<Contaminacion />} />
        <Route path="/escasez" element={<Escasez />} />
        <Route path="/acidificacion" element={<Acidificacion />} />        
        <Route path="/escena" element={<Escena />} /> 
        <Route path="/gamecontaminacion" element={<GameContaminacion />} />  
        <Route path="/quizcontaminacion" element={<QuizContaminacion />} />  
      </Routes>
    </Router>
  </StrictMode>
);
