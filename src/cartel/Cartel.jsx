import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Sign from './model-3d/Sign';

const Cartel = () => {
    return (
        <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} />
            <Sign url="/model-3d/sign.glb" position={[-6, -3, 3]} />
            <OrbitControls />
        </Canvas>
    );
};

export default Cartel;

