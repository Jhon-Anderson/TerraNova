import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import Sign from './model-3d/Sign';

const Cartel = () => {
    return (
        <Canvas className="canvas-cartel">
            <ambientLight intensity={0.2} />
            <directionalLight position={[5, 5, 5]} />

            <Sign url="/model-3d/sign.glb" position={[-3, -1.2, 3.5]} />

            <Text
                position={[0, 0.5, 3.5]}
                fontSize={0.14}
                color="white"
                anchorX="center"
                anchorY="middle"
                maxWidth={2.5}
                lineHeight={1.1}
                textAlign="justify"
                wrap={true}
            >
                El cuidado del agua es un desafío global urgente, ya que el crecimiento poblacional y la contaminación amenazan su disponibilidad. Es esencial implementar prácticas sostenibles para asegurar el acceso a agua limpia y proteger la salud y la agricultura.
            </Text>

            <OrbitControls />
        </Canvas>
    );
};

export default Cartel;
