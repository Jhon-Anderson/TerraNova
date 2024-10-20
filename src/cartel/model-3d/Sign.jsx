import React from 'react';
import { useGLTF } from '@react-three/drei';

const Sign = ({ url, position = [0, 0, 0] }) => {
    const { scene } = useGLTF(url); // Cargar el modelo GLB
    return <primitive object={scene} scale={2} position={position} />; // Aplicar la posición
};

export default Sign;
