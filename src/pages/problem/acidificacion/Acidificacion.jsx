import React, { useState } from 'react';
import Footer from '../../../componentes/Footer';
import Header from '../../../componentes/Header';
import './Acidificacion.css';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Escenario3D from './Escenario3D'; // Crea este componente para el objeto 3D

function Acidificacion() {
    const [mostrarModal, setMostrarModal] = useState(false);

    const handleVerClick = () => {
        setMostrarModal(true);
    };

    const cerrarModal = () => {
        setMostrarModal(false);
    };

    return (
        <div className="acidificacion-container">
            <Header />
            <h1 className="title">Acidificación de los Océanos</h1>
            <div className="info-boxes">
                <div className="info-box">
                    <h2>¿Qué es la Acidificación de los Océanos?</h2>
                    <p>
                        La acidificación de los océanos es el proceso por el cual el agua del mar se vuelve
                        más ácida debido a la absorción de dióxido de carbono (CO2) de la atmósfera.
                    </p>
                </div>
                <div className="info-box">
                    <h2>Causas de la Acidificación</h2>
                    <p>
                        La principal causa de la acidificación es el aumento de las emisiones de CO2
                        debido a actividades humanas, como la quema de combustibles fósiles.
                    </p>
                </div>
                <div className="info-box">
                    <h2>Consecuencias de la Acidificación</h2>
                    <p>
                        La acidificación afecta a la vida marina, incluyendo corales, moluscos y peces,
                        y puede alterar los ecosistemas marinos.
                    </p>
                </div>
            </div>

            {/* Botón para abrir la ventana emergente */}
            <div className="ver-boton-container">
                <button className="ver-boton" onClick={handleVerClick}>Ver</button>
            </div>

            {/* Ventana emergente con el escenario 3D */}
            {mostrarModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={cerrarModal}>&times;</span>
                        <Suspense fallback={<span>Cargando...</span>}>
                            <Canvas>
                                <Escenario3D /> {/* Componente que renderiza el objeto 3D */}
                            </Canvas>
                        </Suspense>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}

export default Acidificacion;
