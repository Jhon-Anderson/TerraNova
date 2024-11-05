
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
                scale={5} 
                position={[0, -1, 0]} 
                rotation={[0, Math.PI / 6, 0]}
            />
            <Text
                position={[-0.1, 0.3, 1]}
                fontSize={0.13}
                color="white"
                anchorX="center"
                anchorY="middle"
                maxWidth={3.45}
                lineHeight={1.1}
                textAlign="justify"
                wrap={true}
            >
                El cuidado del agua es un desafío global urgente, ya que el crecimiento poblacional
                y la contaminación amenazan su disponibilidad. Es esencial implementar prácticas
                sostenibles para asegurar el acceso a agua limpia y proteger la salud y la agricultura.
            </Text>
        </>
    );
};

export default Cartel;
