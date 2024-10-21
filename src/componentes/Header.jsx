import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();

    return (
        <header className="header">
            <div className="logo" style={{ cursor: 'pointer' }} onClick={() => navigate('/home')}>
                <img src="/images/logo.svg" alt="Terranova Logo" className="logo-img" />
                <h2 className="logo-text">TerraNova</h2>
            </div>
            <nav className="navbar">
                <ul className="nav-links">
                    <li><button onClick={() => navigate('/contaminacion')} className="nav-button">Contaminación</button></li>
                    <li><button onClick={() => navigate('/escasez')} className="nav-button">Escasez</button></li>
                    <li><button onClick={() => navigate('/acidificacion')} className="nav-button">Acidificación</button></li>
                </ul>
            </nav>
            <button onClick={() => navigate('/')} className="logout-button">Cerrar Sesión</button>
        </header>
    );
};

export default Header;
