import React from 'react';
import { OrbitControls } from '@react-three/drei';
import SeaHorseModel from '../../../modelos-3d/SeaHorseModel';

function Escenario3D() {
    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <SeaHorseModel />
            <OrbitControls />
        </>
    );
}

export default Escenario3D;
