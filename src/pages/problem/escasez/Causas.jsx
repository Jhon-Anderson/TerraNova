import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';
import Desierto from '../../../modelos-3d/desierto';
import { OrbitControls } from '@react-three/drei';
import Auto from '../../../modelos-3d/auto';
import Cartel3 from '../../../modelos-3d/cartel3';
const Causas = () => {
    return (
        <div
            style={{
                width: '100%',
                height: '100vh',
                backgroundImage: 'url(/images/soldeser.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Canvas camera={{ position: [0, 5, 10], fov: 20 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <Physics gravity={[0, -2, 0]}>
                    <Auto/>
                    <Desierto/>
                    <Cartel3/>  
                </Physics>
                <OrbitControls/>
            </Canvas>
        </div>
    );
};

export default Causas;

