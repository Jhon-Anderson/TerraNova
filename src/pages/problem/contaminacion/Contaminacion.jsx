import React, { useState } from 'react';
import Footer from '../../../componentes/Footer';
import Header from '../../../componentes/Header';
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
                    <h2>MENÚ</h2>
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
                        La contaminación del agua es causada por vertidos industriales y domésticos,
                        uso de pesticidas y fertilizantes, y derrames de petróleo.
                    </p>
                </div>
                <div className="info-box">
                    <h2>Efectos de la contaminacion del agua</h2>
                    <p>
                    La contaminación del agua daña ecosistemas acuáticos, afecta la salud humana y 
                    provoca la muerte de flora y fauna.
                    </p>
                </div>
                <div className="info-box">
                    <h2>Soluciones para la contaminacion del agua</h2>
                    <p>
                    La contaminación del agua puede reducirse tratando desechos, usando menos
                    químicos en agricultura y previniendo derrames.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contaminacion;
