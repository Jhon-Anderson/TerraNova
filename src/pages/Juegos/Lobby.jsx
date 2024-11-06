import React, { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Fly from '../../modelos-3d/Fly.jsx';

const Ground = () => (
  <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
    <planeGeometry args={[50, 50]} />
    <meshStandardMaterial color="green" />
  </mesh>
);

const River = () => (
  <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
    <planeGeometry args={[10, 50]} />
    <meshStandardMaterial color="skyblue" opacity={0.7} transparent />
  </mesh>
);

const Tree = ({ position }) => (
  <group position={position}>
    {/* Tronco */}
    <mesh position={[0, 1, 0]}>
      <cylinderGeometry args={[0.3, 0.5, 2]} />
      <meshStandardMaterial color="brown" />
    </mesh>
    {/* Hojas */}
    <mesh position={[0, 3, 0]}>
      <sphereGeometry args={[1.5, 8, 8]} />
      <meshStandardMaterial color="darkgreen" />
    </mesh>
  </group>
);

const Scene = () => {
  const [flyPosition, setFlyPosition] = useState([0, 0, 0]);
  const flyRef = useRef();

  // Función para mover el modelo Fly con las teclas
  const moveFly = (direction) => {
    setFlyPosition((prev) => {
      const newPosition = [...prev];
      if (direction === 'up') newPosition[2] -= 1;
      if (direction === 'down') newPosition[2] += 1;
      if (direction === 'left') newPosition[0] -= 1;
      if (direction === 'right') newPosition[0] += 1;
      return newPosition;
    });
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowUp') moveFly('up');
      if (e.key === 'ArrowDown') moveFly('down');
      if (e.key === 'ArrowLeft') moveFly('left');
      if (e.key === 'ArrowRight') moveFly('right');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 20, 10]} intensity={0.8} />
      <Ground />
      <River />
      {/* Añadir árboles */}
      <Tree position={[-20, 0, -5]} />
      <Tree position={[-10, 0, -5]} />
      <Tree position={[0, 0, -5]} />
      <Tree position={[10, 0, -5]} />
      <Tree position={[20, 0, -5]} />
      <Tree position={[-20, 0, 5]} />
      <Tree position={[-10, 0, 5]} />
      <Tree position={[0, 0, 5]} />
      <Tree position={[10, 0, 5]} />
      <Tree position={[20, 0, 5]} />
      
      {/* Cargar el modelo Fly y pasarlo con la posición */}
      <Fly position={flyPosition} ref={flyRef} />

      <OrbitControls enableDamping enableZoom={false} />
    </>
  );
};

const Lobby = () => (
  <Canvas camera={{ position: [0, 15, 25], fov: 45 }}>
    <Scene />
  </Canvas>
);

export default Lobby;
