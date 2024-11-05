import React from 'react';
import { useGLTF } from '@react-three/drei';

const SeaHorseModel = () => {
    const { scene } = useGLTF('/model-3d/Sea_horse.glb');
    
    return (
        <primitive object={scene} scale={0.025} position={[0, -0.256, 0.231]} />
    );
};

export default SeaHorseModel;
