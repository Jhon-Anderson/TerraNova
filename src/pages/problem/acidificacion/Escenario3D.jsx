import React from 'react';
import { useFrame } from '@react-three/fiber';

function Escenario3D() {
    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[3, -2, 10]} />
            <mesh position={[0, 0, 0]}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial color="blue" />
            </mesh>
        </>
    );
}

export default Escenario3D;
