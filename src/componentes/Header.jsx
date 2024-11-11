import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [subMenuOpen, setSubMenuOpen] = useState(false); // Para el submenú en el menú lateral

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const handleMouseEnter = () => {
        setSubMenuOpen(true);
    };

    const handleMouseLeave = () => {
        setSubMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="logo" style={{ cursor: 'pointer' }} onClick={() => navigate('/home')}>
                <img src="/images/logo.svg" alt="Terranova Logo" className="logo-img" />
                <h2 className="logo-text">TerraNova</h2>
            </div>

            <button className="menu-toggle" onClick={toggleMenu}>
                &#9776;
            </button>
            
            <nav className="navbar">
                <ul className="nav-links">
                    <li><button onClick={() => navigate('/contaminacion')} className="nav-button">Contaminación</button></li>
                    <li><button onClick={() => navigate('/escasez')} className="nav-button">Escasez</button></li>
                    <li><button onClick={() => navigate('/acidificacion')} className="nav-button">Acidificación</button></li>
                </ul>
            </nav>

            <button onClick={() => navigate('/')} className="logout-button">Cerrar Sesión</button>            

            {/* Menú lateral */}
            {menuOpen && (
                <div className="sidebar">
                    <h2>MENÚ</h2>
                    <ul>
                        <li onClick={() => { navigate('/home'); closeMenu(); }}>Home</li>
                        {/* Menú con subopciones de Juegos */}
                        <li
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            Juegos
                            {subMenuOpen && (
                                <ul className="sub-menu">
                                    <li><button onClick={() => navigate('/GameContaminacion')} className="nav-button">Contaminación</button></li>
                                    <li><button onClick={() => navigate('/escasez')} className="nav-button">Escasez</button></li>
                                    <li><button onClick={() => navigate('/acidificacion')} className="nav-button">Acidificación</button></li>
                                </ul>
                            )}
                        </li>
                        <li onClick={() => { navigate('/educacion'); closeMenu(); }}>Educación</li>
                        <li onClick={() => { navigate('/imagenes'); closeMenu(); }}>Imágenes</li>
                        <li onClick={() => { navigate('/videos'); closeMenu(); }}>Videos</li>
                        <li onClick={() => { navigate('/mas-soluciones'); closeMenu(); }}>Más Soluciones</li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
