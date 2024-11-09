import React, { useState } from 'react';
import Footer from '../../../componentes/Footer';
import Header from '../../../componentes/Header';
import './Acidificacion.css';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import SeaHorseModel from '../../../modelos-3d/SeaHorseModel';
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
                        debido a actividades humanas, entre ellas esta la quema de combustibles fósiles, generando la principal afectación.
                    </p>
                </div>
                <div className="info-box">
                    <h2>Consecuencias de la Acidificación</h2>
                    <p>
                        La acidificación afecta a la vida marina, incluyendo corales, moluscos y peces. Este fenómeno puede alterar
                        significativamente los ecosistemas marinos, afectando la biodiversidad.
                    </p>
                </div>
            </div>

            {/* Botón para abrir la ventana emergente */}
            <div className="ver-boton-container">
                <button className="ver-boton" onClick={handleVerClick}>Ver</button>
            </div>

            {/* Ventana emergente */}
            {mostrarModal && (
                <div className="modal">
                    <div className="modal-content">
                        <button className="close" onClick={cerrarModal}>&times;</button>
                        {/* Canvas con el modelo 3D dentro del modal */}
                        <Suspense fallback={<span>Cargando modelo...</span>}>
                            <Canvas className="canvas">
                                <ambientLight intensity={0.5} />
                                <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
                                <pointLight position={[-5, 5, 5]} intensity={0.5} />
                                <SeaHorseModel />
                                <OrbitControls />
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
