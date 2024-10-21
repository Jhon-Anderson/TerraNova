import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();

    return (
        <header className="header">
            <div className="logo">
                <img src="/logo.svg" alt="Terranova Logo" className="logo-img" />
                <h2 className="logo-text">TerraNova</h2>
            </div>
            <nav className="navbar">
                <ul className="nav-links">
                    <li><button onClick={() => navigate('/pages/problem/contaminacion/Contaminacion')} className="nav-button">Contaminación</button></li>
                    <li><button onClick={() => navigate('/pages/problem/escasez/Escasez')} className="nav-button">Escasez</button></li>
                    <li><button onClick={() => navigate('/pages/problem/acidificacion/Acidificacion')} className="nav-button">Acidificación</button></li>
                </ul>
            </nav>
            <button onClick={() => navigate('/')} className="logout-button">Cerrar Sesión</button>
        </header>
    );
};

export default Header;
