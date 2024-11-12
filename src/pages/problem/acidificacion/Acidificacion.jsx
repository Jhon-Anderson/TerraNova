import React, { useState } from 'react';
import Footer from '../../../componentes/Footer';
import Header from '../../../componentes/Header';
import './Acidificacion.css';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, Sky, Stars, Html } from '@react-three/drei';
import SeaHorseModel from '../../../modelos-3d/SeaHorseModel';
import SeaFloorModel from '../../../modelos-3d/SeaFloorModel';
import Title3D from '../../../componentes/Title3D';

function Acidificacion() {
    const [mostrarModal, setMostrarModal] = useState(false);
    const [mostrarInstrucciones, setMostrarInstrucciones] = useState(false);

    const handleVerClick = () => {
        setMostrarModal(true);
    };

    const cerrarModal = () => {
        setMostrarModal(false);
        setMostrarInstrucciones(false); // Cierra también las instrucciones
    };

    const handleBurbujaClick = () => {
        setMostrarInstrucciones(true);
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
                        debido a actividades humanas, entre ellas está la quema de combustibles fósiles, generando la principal afectación.
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
                                <ambientLight intensity={0.2} />
                                <directionalLight position={[5, 5, 10]} intensity={10} castShadow />
                                <pointLight position={[2, 0, 5]} intensity={2} />

                                {/* Cielo y estrellas */}
                                <Sky distance={450000} sunPosition={[1, 1, 0]} inclination={0} azimuth={0.25} />
                                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />

                                {/* Modelos 3D */}
                                <Title3D />
                                <SeaHorseModel />
                                <SeaFloorModel />

                                {/* Botón burbuja */}
                                <mesh position={[1, 1, 2]} onClick={handleBurbujaClick}>
                                    <sphereGeometry args={[0.2, 32, 32]} />
                                    <meshStandardMaterial color="lightblue" transparent opacity={0.7} />
                                </mesh>

                                {/* Mostrar instrucciones si se ha hecho clic */}
                                {mostrarInstrucciones && (
                                    <Html position={[-4, 2, 1]} center>
                                        <div style={{ color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '10px', borderRadius: '8px' }}>
                                            Desplazate con las flechas
                                        </div>
                                    </Html>
                                )}

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
