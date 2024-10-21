import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import app from '../../firebaseConfig';
import './Registro.css';

function Registro() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const auth = getAuth(app);

    if (!email.endsWith('@correounivalle.edu.co')) {
      setModalMessage('Por favor, usa un correo con el dominio @correounivalle.edu.co');
      setIsModalOpen(true);
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setModalMessage('Registro exitoso');
        setIsModalOpen(true);
        setTimeout(() => navigate('/Login'), 1000);
      })
      .catch((error) => {
        setModalMessage(`Error al registrar: ${error.message}`);
        setIsModalOpen(true);
      });
  };

  return (
    <div className="registro-container">
      <div className="logo-container">
        <img src="/images/LogoTerraNova.png" alt="Logo TerraNova" />
      </div>
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Registrarse</button>
      </form>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <p>{modalMessage}</p>
            <button onClick={() => setIsModalOpen(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Registro;
