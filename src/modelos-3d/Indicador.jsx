import React from 'react';
import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three-stdlib';

const Indicador = ({ 
    position = [0, 0, 0], 
    scale = 0.08, 
    rotation = [0, 0, 0] 
}) => {
    const scene = useLoader(OBJLoader, '/model-3d/indicador.obj');
    
    const soundEffect = React.useRef(new Audio('/sonidos/texto_indicador.wav'));

    scene.traverse((child) => {
        if (child.isMesh) {
            child.castShadow = true;     
            child.receiveShadow = true;  
        }
    });

    const handleClick = () => {
        const audio = soundEffect.current;

        if (audio.paused) {
            audio.currentTime = 0; // Reiniciar el audio al principio
            audio.play().catch((error) => {
                console.error('Error al reproducir el sonido:', error);
            });
        }
    };

    return (
        <primitive
            object={scene}
            scale={scale}
            position={position}
            rotation={rotation}
            onClick={handleClick}
        />
    );
};

export default Indicador;
