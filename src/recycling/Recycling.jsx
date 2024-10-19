// src/recycling/Recycling.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import TrashCan from './model-3d/TrashCan';

const Recycling = () => {
    return (
        <Canvas className='canvas-recycling'>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} />
            {/* Llama al componente TrashCan y pasa la URL del modelo */}
            <TrashCan url="/model-3d/trash-can.glb" />
            <OrbitControls />


        </Canvas>
    );
};

export default Recycling;
