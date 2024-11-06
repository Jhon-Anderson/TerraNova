import React from 'react';
import { useGLTF } from '@react-three/drei';

const Oil = () => {
    const { scene } = useGLTF('/model-3d/oil.glb');

    return (
        <>
            <primitive
            object={scene}
            scale={7}
            position={[-1.5, -0.5, 0]}
            />;
        </>
    );
};

export default Oil;
