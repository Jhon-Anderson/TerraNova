import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Footer from '../../../componentes/Footer';
import Header from '../../../componentes/Header';
import Oil from '../../../modelos-3d/Oil.jsx';
import './Contaminacion.css';

const Contaminacion = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const openModal = (title, content) => {
        setModalContent({ title, content });
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="contaminacion-container">
            <Header />
            <h1 className="title">Contaminación del Agua</h1>
            
            <div className="info-boxes">
                <div className="info-box" onClick={() => openModal(
                    'Causas de la contaminación del agua',
                    <Canvas className="canvas-modal">
                        <ambientLight intensity={1} />
                        <Oil />
                        <OrbitControls />
                    </Canvas>)}>
                    <h2>Causas de la contaminación del agua</h2>
                    <p>
                        La contaminación del agua es causada por vertidos industriales y domésticos,
                        uso de pesticidas y fertilizantes, y derrames de petróleo.
                    </p>
                </div>
                <div className="info-box" onClick={() => openModal(
                    'Efectos de la contaminación del agua',
                    <Canvas className="canvas-modal">
                        <ambientLight intensity={1} />
                        <Oil />
                        <OrbitControls />
                    </Canvas>)}>
                    <h2>Efectos de la contaminación del agua</h2>
                    <p>
                        La contaminación del agua daña ecosistemas acuáticos, afecta la salud humana y 
                        provoca la muerte de flora y fauna.
                    </p>
                </div>
                <div className="info-box" onClick={() => openModal(
                    'Soluciones para la contaminación del agua',
                    <Canvas className="canvas-modal">
                        <ambientLight intensity={1} />
                        <Oil />
                        <OrbitControls />
                    </Canvas>)}>
                    <h2>Soluciones para la contaminación del agua</h2>
                    <p>
                        La contaminación del agua puede reducirse tratando desechos, usando menos
                        químicos en agricultura y previniendo derrames.
                    </p>
                </div>
            </div>

            {modalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>{modalContent.title}</h2> {/* Título del modal */}
                        {modalContent.content} {/* Contenido del modal */}
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default Contaminacion;
