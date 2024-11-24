import React, { useState, useEffect, Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';
import { Physics } from '@react-three/rapier';
import Oceano from '../../../modelos-3d/Oceano';
import Barco from '../../../modelos-3d/Barco';
import Modelo3D from '../../../modelos-3d/Modelo3D';
import Cartel from '../../../modelos-3d/cartel2';

const Escena = () => {
  const [position, setPosition] = useState([0, 1, 0]);
  const [oscillation, setOscillation] = useState(0);
  const [mostrarInstrucciones, setMostrarInstrucciones] = useState(false);

  // Cargar la textura de fondo
  const backgroundTexture = useLoader(THREE.TextureLoader, '/images/sky-clouds-010.jpg');

  useEffect(() => {
    const handleKeyDown = (event) => {
      setPosition(([x, y, z]) => {
        switch (event.key) {
          case 'ArrowUp':
            return [x, y, z - 0.1];
          case 'ArrowDown':
            return [x, y, z + 0.1];
          case 'ArrowLeft':
            return [x - 0.1, y, z];
          case 'ArrowRight':
            return [x + 0.1, y, z];
          default:
            return [x, y, z];
        }
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setOscillation((prev) => prev + 0.05);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const handleBurbujaClick = () => {
    setMostrarInstrucciones(true);
  };

  return (
    <Canvas
      camera={{ position: [0, 5, 10], fov: 75 }}
      onCreated={({ scene }) => {
        scene.background = backgroundTexture;
      }}
    >
      <Physics gravity={[0, -0.5, 0]}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-10, 10, 10]} intensity={0.5} />

        <Oceano />

        <Suspense fallback={null}>
         
          <Barco position={[position[0], position[1], position[2]]} />

        
          <Modelo3D position={[2, 3.5, -60]} scale={0.5} rotation={[0, Math.PI / 4, 0]} />
          <Cartel position={[10, 3.5, -60]} scale={10} rotation={[0, Math.PI / 4, 0]} />
        </Suspense>

       
        <mesh position={[8, 12, 2]} onClick={handleBurbujaClick}>
          <sphereGeometry args={[2, 32, 32]} />
          <meshStandardMaterial color="yellow" transparent opacity={0.7} />
        </mesh>
      </Physics>

      
      {mostrarInstrucciones && (
        <Html position={[-4, 2, 1]} center>
          <div style={{ color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '10px', borderRadius: '8px' }}>
            Desplázate con las flechas
          </div>
        </Html>
      )}

      <OrbitControls maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 4} />
    </Canvas>
  );
};

export default Escena;
