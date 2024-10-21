import React, { useState } from 'react';
import Footer from '../../Footer';
import Header from '../../Header';
import './Contaminacion.css';

function Contaminacion() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div className="contaminacion-container">
            <Header />
            <button className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                &#9776;
            </button>
            {menuOpen && (
                <div className="sidebar">
                    <h2>Opciones</h2>
                    <ul>
                        <li onClick={closeMenu}>Juegos</li>
                        <li onClick={closeMenu}>Educacion</li>
                        <li onClick={closeMenu}>Imagenes</li>
                        <li onClick={closeMenu}>Videos</li>
                        <li onClick={closeMenu}>Mas Soluciones</li>
                    </ul>
                </div>
            )}
            <h1 className="title">Contaminación del Agua</h1>
            <div className="info-boxes">
                <div className="info-box">
                    <h2>Causas de la contaminacion del agua</h2>
                    <p>
                    </p>
                </div>
                <div className="info-box">
                    <h2>Efectos de la contaminacion del agua</h2>
                    <p>
                    </p>
                </div>
                <div className="info-box">
                    <h2>Soluciones para la contaminacion del agua</h2>
                    <p>
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contaminacion;
