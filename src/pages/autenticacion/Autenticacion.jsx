import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import app from '../../firebaseConfig';
import './Autenticacion.css'

const Autenticacion = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false); 
  const [modalMessage, setModalMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleAuth = (e) => {
    e.preventDefault();
    const auth = getAuth(app);

    if (isRegister) {
      // Manejar Registro
      if (password !== confirmPassword) {
        setModalMessage('Las contraseñas no coinciden');
        setIsModalOpen(true);
        return;
      }
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setModalMessage('Registro exitoso');
          setIsModalOpen(true);
          setTimeout(() => navigate('/Home'), 1000);
        })
        .catch((error) => {
          setModalMessage(`Error al registrar: ${error.message}`);
          setIsModalOpen(true);
        });
    } else {
      // Manejar Login
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
    }
  };

  const toggleAuthMode = () => {
    setIsRegister(!isRegister);
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setModalMessage('');
    setIsModalOpen(false);
  };

  return (
    <div className="auth-wrapper">
      <video autoPlay loop muted className="background-video">
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>

      <div className="auth-container">
        <div className="logo-container">
          <img src="/images/logo.svg" alt="Logo TerraNova" />
        </div>

        <h2>{isRegister ? 'Registro de Usuario' : 'Iniciar Sesión'}</h2>
        <form onSubmit={handleAuth}>
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
          {isRegister && (
            <div>
              <label htmlFor="confirmPassword">Confirmar contraseña:</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder="Confirma tu contraseña"
              />
            </div>
          )}
          <button type="submit">{isRegister ? 'Registrarse' : 'Iniciar Sesión'}</button>
        </form>

        <div className="question-section">
          <p>
            {isRegister
              ? '¿Ya tienes cuenta? '
              : '¿No tienes cuenta? '}
            <span
              onClick={toggleAuthMode}
              style={{color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}
            >
              {isRegister ? 'Inicia Sesión' : 'Regístrate'}
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
        <img src="/images/login.svg" alt="Descripción de la imagen" className="image" />      
      </div>
    </div>
  );
}

export default Autenticacion;
