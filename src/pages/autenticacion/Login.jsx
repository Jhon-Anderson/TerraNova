import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../firebaseConfig';

import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const auth = getAuth(app);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setModalMessage('Inicio de sesión exitoso');
        setIsModalOpen(true);
        setTimeout(() => navigate('/Home'), 1000);
      })
      .catch((error) => {
        setModalMessage(`Error al iniciar sesión: ${error.message}`);
        setIsModalOpen(true);
      });
  };

  const goToRegister = () => {
    navigate('/Registro');
  };

  return (
    <div className="login-wrapper">
      <video autoPlay loop muted className="background-video">
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>

      <div className="login-container">
        <div className="logo-container">
          <img src="/images/LogoTerraNova.png" alt="Logo TerraNova" />
        </div>
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="email">Correo electrónico:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="@correounivalle.edu.co"
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
              placeholder="Ingresa tu contraseña"
            />
          </div>
          <button type="submit">Iniciar Sesión</button>
        </form>

        <div className="register-section">
          <p>
            ¿No tienes cuenta?{' '}
            <span
              onClick={goToRegister}
              style={{ color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}
            >
              Regístrate
            </span>
          </p>
        </div>

        {isModalOpen && (
          <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <p>{modalMessage}</p>
              <button onClick={() => setIsModalOpen(false)}>Cerrar</button>
            </div>
          </div>
        )}
      </div>
      <div className="image-container">
        {/* Aquí se puede agregar la imagen más adelante */}
      </div>
    </div>
  );
}

export default Login;
