import React from 'react';
import { useGLTF } from '@react-three/drei';

const Isla = () => {
    const { scene } = useGLTF('/model-3d/isla.glb', true, 'draco');

    scene.traverse((child) => {
        if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
        }
    });

    return (
        <>
        <primitive object={scene} scale={0.3} position={[0, -2.2, 0]} />;
        </>
    );
};

export default Isla;
