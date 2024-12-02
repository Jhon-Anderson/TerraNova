import React from 'react';
import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three-stdlib';

const Indicador = ({ 
    position = [0, 0, 0], 
    scale = 0.08, 
    rotation = [0, 0, 0] 
}) => {
    const scene = useLoader(OBJLoader, '/model-3d/indicador.obj');

    // Configurar sombras para las mallas dentro del objeto
    scene.traverse((child) => {
        if (child.isMesh) {
            child.castShadow = true;     
            child.receiveShadow = true;  
        }
    });

    // Función para reproducir el sonido
    const handleClick = () => {
        const soundEffect = new Audio('/sonidos/texto_indicador.wav');
        soundEffect.play().catch((error) => {
            console.error('Error al reproducir el sonido:', error);
        });
    };

    return (
        <primitive
            object={scene}
            scale={scale}
            position={position}
            rotation={rotation}
            onClick={handleClick} // Manejador del clic
        />
    );
};

export default Indicador;
