import React, { useState, useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const SeaHorseModel = () => {
    const { scene } = useGLTF('/model-3d/pulpo.glb');
    const [position, setPosition] = useState([2, -0.02, 0.7]);
    const group = useRef(); // Referencia para el grupo del modelo

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

    // Animación de nado hacia arriba y hacia abajo
    useFrame(({ clock }) => {
        const time = clock.getElapsedTime();
        if (group.current) {
            group.current.position.y = position[1] + Math.sin(time) * 0.3; // Oscilación vertical
        }
    });

    return (
        <group ref={group} position={position}>
            <primitive object={scene} scale={1.5} />
        </group>
    );
};

export default SeaHorseModel;
