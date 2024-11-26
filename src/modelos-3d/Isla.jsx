import React from 'react';
import { useGLTF } from '@react-three/drei';

const Isla = () => {
    const { scene } = useGLTF('/model-3d/isla.glb', true, 'draco');

    // Configurar sombras para los meshes del modelo
    scene.traverse((child) => {
        if (child.isMesh) {
            child.castShadow = true; // Permite que el objeto proyecte sombras
            child.receiveShadow = true; // Permite que el objeto reciba sombras
        }
    });

    return (
        <>
            {/* Modelo 3D de la isla */}
            <primitive
                object={scene}
                scale={5}
                position={[-0.5, -0.5, -0.2]}
                rotation={[0, Math.PI / -4, 0]}
            />

            {/* Iluminación adicional */}
            {/* Luz puntual para resaltar la isla */}
            <pointLight
                position={[2, 5, -3]} // Ajusta la posición según la escena
                intensity={1.2}
                castShadow
            />

            {/* Luz ambiental para iluminación general */}
            <ambientLight intensity={0.4} />

            {/* Luz direccional para sombras generales */}
            <directionalLight
                position={[10, 10, 10]}
                intensity={1.5}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-near={0.1}
                shadow-camera-far={50}
                shadow-camera-left={-15}
                shadow-camera-right={15}
                shadow-camera-top={15}
                shadow-camera-bottom={-15}
            />
        </>
    );
};

export default Isla;
