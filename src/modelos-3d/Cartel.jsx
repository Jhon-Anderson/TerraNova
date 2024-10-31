import React from 'react';
import { Text, useGLTF, Plane } from '@react-three/drei';

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
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
            <pointLight position={[-5, 5, 5]} intensity={0.5} />
            <primitive object={scene} scale={0.3} position={[-1, -1.5, 1]} />
            <Text
                position={[0, 1.5, 0]}
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
            <Plane
                args={[100, 100]}
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -1.5, 0]}
                receiveShadow
            >
                <meshStandardMaterial color="#a8a8a8" />
            </Plane>
        </>
    );
};

export default Cartel;
