import React from 'react';
import { useGLTF } from '@react-three/drei';

const Isla = () => {
    const { scene } = useGLTF('/model-3d/isla.glb', true, 'draco');

    return (
        <>
            <primitive
            object={scene}
            scale={5}
            position={[-0.5, -1, -0.2]}
            rotation={[0, Math.PI / -4, 0]}/>;
        </>
    );
};

export default Isla;
