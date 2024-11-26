import React, { useState } from 'react';
import Footer from '../../../componentes/Footer';
import Header from '../../../componentes/Header';
import './Acidificacion.css';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, Sky, Stars } from '@react-three/drei';
import { Physics, RigidBody } from '@react-three/rapier';
import Escenario3D from './Escenario3D';

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

            <div className="ver-boton-container">
                <button className="ver-boton" onClick={handleVerClick}>Ver</button>
            </div>

            {mostrarModal && (
                <div className="modal">
                    <div className="modal-content">
                        <button className="close" onClick={cerrarModal}>&times;</button>
                        <Suspense fallback={<span>Cargando modelo...</span>}>
                            <Canvas className="canvas" style={{ background: '#000022' }}>
                                {/* Luz ambiental tenue */}
                                <ambientLight intensity={0.1} color="#444" />

                             {/* Luz direccional suave */}
                                <directionalLight position={[5, 5, 10]} intensity={0.5} color="#888" />

                                {/* Fondo oscuro con estrellas */}
                                <fog attach="fog" args={['#000022', 10, 50]} />
                                <Stars
                                    radius={50}  // Reduce el radio de las estrellas
                                    depth={10}   // Profundidad más limitada
                                    count={1000} // Menos estrellas para un efecto más tenue
                                    factor={2}   // Tamaño de las estrellas
                                    saturation={0}
                                    fade
                                />

                                {/* Tu contenido 3D aquí */}
                                <Physics>
                                    {/* Cargar la escena 3D completa */}
                                    <Escenario3D />

                                    {/* Gota de ácido */}
                                    <RigidBody name="acidSphere" restitution={0} position={[-2, 5, 0]} colliders="ball">
                                        <mesh>
                                            <sphereGeometry args={[0.3, 32, 32]} />
                                            <meshStandardMaterial color="green" />
                                        </mesh>
                                    </RigidBody>
                                </Physics>

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
