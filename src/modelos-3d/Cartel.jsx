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
                scale={1} 
                position={[-3, -1.5, 2]} 
            />
            <Text
                position={[0, 0.19, 2]}
                fontSize={0.14}
                color="white"
                anchorX="center"
                anchorY="middle"
                maxWidth={2.5}
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
