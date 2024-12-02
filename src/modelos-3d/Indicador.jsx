import React from 'react';
import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three-stdlib';

const Indicador = ({ 
    position = [0, 0, 0], 
    scale = 0.08, 
    rotation = [0, 0, 0] 
}) => {
    const scene = useLoader(OBJLoader, '/model-3d/indicador.obj');
    
    // Crear el objeto de audio una vez
    const soundEffect = React.useRef(new Audio('/sonidos/texto_indicador.wav'));

    // Configurar sombras para las mallas dentro del objeto
    scene.traverse((child) => {
        if (child.isMesh) {
            child.castShadow = true;     
            child.receiveShadow = true;  
        }
    });

    const handleClick = () => {
        const audio = soundEffect.current;

        // Verificar si el audio está en pausa antes de reproducirlo
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
            onClick={handleClick} // Manejador del clic
        />
    );
};

export default Indicador;
