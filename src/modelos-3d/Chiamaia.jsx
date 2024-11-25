import React from 'react';
import { useGLTF } from '@react-three/drei';

const Chiamaia = ({ position }) => {
    const { scene } = useGLTF('/model-3d/chiamaia.glb');

    return (
        <>
            <primitive
                object={scene}
                scale={20}
                position={position} // Usar la posición pasada como prop
                rotation={[0, Math.PI / 2.3, 0]} // Rotación de 180 grados en el eje Y
            />
        </>
    );
};

export default Chiamaia;
