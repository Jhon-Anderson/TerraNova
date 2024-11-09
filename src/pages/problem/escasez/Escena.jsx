// OceanScene.jsx
import React, { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Oceano from '../../../modelos-3d/Oceano';
import Barco from '../../../modelos-3d/Barco';

const Escena = () => {
  const [position, setPosition] = useState([0, 1, 0]);

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

  return (
    <Canvas camera={{ position: [0, 5, 10], fov: 75 }}>
      <color attach="background" args={["#87CEEB"]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[-10, 10, 10]} intensity={0.5} />

      <Oceano />

      <Suspense fallback={null}>
        <Barco position={position} />
      </Suspense>

      <OrbitControls />
    </Canvas>
  );
};

export default Escena;
