import React from 'react';
import { Text, useGLTF } from '@react-three/drei';

const Cartel = () => {
    const { scene } = useGLTF('/model-3d/sign.glb');

    // Configurar sombras para los meshes del modelo
    scene.traverse((child) => {
        if (child.isMesh) {
            child.castShadow = true; // Permite que el objeto proyecte sombras
            child.receiveShadow = true; // Permite que el objeto reciba sombras
        }
    });

    return (
        <>
            {/* Modelo 3D del cartel */}
            <primitive 
                object={scene} 
                scale={5} 
                position={[0, -0.6, 0]} 
                rotation={[0, Math.PI / 6, 0]} 
            />

            {/* Texto superpuesto */}
            <Text
                position={[-0.1, 0.6, 1]} // Posición del texto
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

            {/* Iluminación adicional */}
            {/* Luz puntual para resaltar el cartel */}
            <pointLight 
                position={[2, 5, 3]} 
                intensity={1.5} 
                castShadow 
            />

            {/* Luz ambiental para iluminación general */}
            <ambientLight intensity={0.3} />

            {/* Luz direccional para proyectar sombras */}
            <directionalLight
                position={[-5, 10, 5]}
                intensity={1}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-near={0.1}
                shadow-camera-far={50}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
            />
        </>
    );
};

export default Cartel;
