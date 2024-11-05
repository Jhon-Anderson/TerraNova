import React from 'react';
import { useGLTF } from '@react-three/drei';

const SeaHorseModel = () => {
    const { scene } = useGLTF('/model-3d/Sea_horse.glb');
    
    return (
        <primitive object={scene} scale={0.5} position={[0.1, -0.04, 4.7]}  rotation={[0, Math.PI / -2, 0]}/>
    );
};

export default SeaHorseModel;
