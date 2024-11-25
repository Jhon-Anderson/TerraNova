import React from 'react';
import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three-stdlib';

const Indicador = ({ 
    position = [0, 0, 0], 
    scale = 0.08, 
    rotation = [0, 0, 0] 
}) => {
    const scene = useLoader(OBJLoader, '/model-3d/indicador.obj');

    scene.traverse((child) => {
        if (child.isMesh) {
            child.castShadow = true;     
            child.receiveShadow = true;  
        }
    });

    return (
        <primitive
            object={scene}
            scale={scale}
            position={position}
            rotation={rotation}
        />
    );
};

export default Indicador;
