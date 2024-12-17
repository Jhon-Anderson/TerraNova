import React, { useState } from 'react';
import { RigidBody } from '@react-three/rapier';
import { OrbitControls } from '@react-three/drei';
import SeaHorseModel from '../../../modelos-3d/SeaHorseModel';
import SeaFloorModel from '../../../modelos-3d/SeaFloorModel';
import CrabModel from '../../../modelos-3d/CrabModel';
import SmokeEffect from '../../../modelos-3d/SmokeEffect';
import Oceano from '../../../modelos-3d/Oceano';
import Cartel from '../../../modelos-3d/cartel2';

function Escenario3D() {
    const [smokePosition, setSmokePosition] = useState(null);

    const handleCrabCollide = (position) => {
        console.log('Colisión detectada en posición:', position);
        setSmokePosition(position);
    };

    // Reinicia el estado después de 2 segundos para permitir que vuelva a ocurrir
    setTimeout(() => setSmokePosition(null), 2000);
    
    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />

            <SeaFloorModel position={[0, -1, 0]} scale={2} />

            <SeaHorseModel position={[3, 0, 0]} scale={1} />
            <Oceano />
            <RigidBody type="fixed" colliders="hull">
                <CrabModel 
                    position={[0, -2.6, 0]} 
                    scale={0.4} 
                    onCollide={() => handleCrabCollide([0, -2.6, 0])} 
                />
            </RigidBody>

            {smokePosition && <SmokeEffect position={smokePosition} />}
            <Cartel/>
        </>
    );
}

export default Escenario3D;
