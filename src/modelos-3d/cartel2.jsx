
import React from 'react';
import { Text, useGLTF } from '@react-three/drei';

const Cartel = () => {
    const { scene } = useGLTF('/model-3d/sign.glb');

    scene.traverse((child) => {
        if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
        }
    });

    return (
        <>
            <primitive
                object={scene}
                scale={4}
                position={[-5.3, 0.6, -1.7]}
                rotation={[0, Math.PI / 1.6, 0]}
            />
            <Text
                position={[-4.6, 1.6, -1.5]} // Ajusta para que esté frente al cartel
                rotation={[0, Math.PI / 2.2, 0]} // Alinea con la rotación del cartel
                fontSize={0.16}
                color="white"
                anchorX="center"
                anchorY="middle"
                maxWidth={6.5}
                lineHeight={0.5}
                textAlign="justify"
                wrap={true}
            >
                Muevete&nbsp;con&nbsp;el&nbsp;mouse&nbsp;y&nbsp;las&nbsp;teclas
            </Text>
        </>
    );
};

export default Cartel;
