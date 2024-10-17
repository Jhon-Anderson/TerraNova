// src/recycling/model-3d/TrashCan.jsx
import React from 'react';
import { useGLTF } from '@react-three/drei';

const TrashCan = ({ url }) => {
    const { scene } = useGLTF(url); // Cargar el modelo GLB
    return <primitive object={scene} scale={2.2} />; // Renderizar el modelo
};

export default TrashCan;
