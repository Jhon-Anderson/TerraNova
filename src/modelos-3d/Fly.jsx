import React from 'react';
import { useGLTF } from '@react-three/drei';

const Fly = ({ position }) => {
    const { scene } = useGLTF('/model-3d/fly.glb');

    return (
        <>
            <primitive
                object={scene}
                scale={500}
                position={position} // Usar la posición pasada como prop
                rotation={[0, Math.PI, 0]} // Rotación de 180 grados en el eje Y
            />
        </>
    );
};

export default Fly;
