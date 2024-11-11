import React, { useState, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';

const SeaHorseModel = () => {
    const { scene } = useGLTF('/model-3d/pulpo.glb');
    const [position, setPosition] = useState([0.04, -0.02, 4.7]);

    // Maneja las pulsaciones de teclas para mover el modelo
    useEffect(() => {
        const handleKeyDown = (event) => {
            setPosition((prevPosition) => {
                switch (event.key) {
                    case 'ArrowUp':
                        return [prevPosition[0], prevPosition[1] + 0.1, prevPosition[2]];
                    case 'ArrowDown':
                        return [prevPosition[0], prevPosition[1] - 0.1, prevPosition[2]];
                    case 'ArrowLeft':
                        return [prevPosition[0] - 0.1, prevPosition[1], prevPosition[2]];
                    case 'ArrowRight':
                        return [prevPosition[0] + 0.1, prevPosition[1], prevPosition[2]];
                    default:
                        return prevPosition;
                }
            });
        };

        // Agregar y eliminar el evento de teclado
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <primitive object={scene} scale={0.5} position={position} />
    );
};

export default SeaHorseModel;
