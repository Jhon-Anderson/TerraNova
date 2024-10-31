import React from 'react';
import { useGLTF } from '@react-three/drei';

const Isla = () => {
    const { scene } = useGLTF('/model-3d/isla.glb', true, 'draco');

    return (
        <>
            <primitive
            object={scene}
            scale={0.5}
            position={[1, -2.5, 1.2]}
            rotation={[0, Math.PI / -5, 0]}/>;
        </>
    );
};

export default Isla;
