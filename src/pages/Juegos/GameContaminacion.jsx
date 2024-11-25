import React, { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Text, Html } from '@react-three/drei';
import Chiamaia from '../../modelos-3d/Chiamaia';
import Indicador from '../../modelos-3d/Indicador';

const Tree = ({ position }) => (
  <group position={position}>
    <mesh position={[0, 1, 0]} castShadow>
      <cylinderGeometry args={[0.3, 0.5, 2]} />
      <meshStandardMaterial color="brown" />
    </mesh>
    <mesh position={[0, 3, 0]} castShadow>
      <sphereGeometry args={[1.5, 8, 8]} />
      <meshStandardMaterial color="darkgreen" />
    </mesh>
  </group>
);

const Scene = () => {
  const [flyPosition, setFlyPosition] = useState([0, 0, 0]);
  const flyRef = useRef();

  const moveFly = (direction) => {
    setFlyPosition((prev) => {
      const newPosition = [...prev];
      if (direction === 'up') newPosition[2] -= 0.5;
      if (direction === 'down') newPosition[2] += 0.5;
      if (direction === 'left') newPosition[0] -= 0.5;
      if (direction === 'right') newPosition[0] += 0.5;
      return newPosition;
    });
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowUp' || e.key === 'w') moveFly('up');
      if (e.key === 'ArrowDown' || e.key === 's') moveFly('down');
      if (e.key === 'ArrowLeft' || e.key === 'a') moveFly('left');
      if (e.key === 'ArrowRight' || e.key === 'd') moveFly('right');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[10, 20, 10]}
        intensity={3}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-25}
        shadow-camera-right={25}
        shadow-camera-top={25}
        shadow-camera-bottom={-25}
      />
      <pointLight position={[-10, 10, -10]} intensity={0.5} />
      <spotLight position={[0, 10, 0]} angle={0.15} intensity={0.8} castShadow />

      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="green" />
      </mesh>

      <Tree position={[-20, 0, -5]} />
      <Tree position={[-10, 0, -5]} />
      <Tree position={[10, 0, -5]} />
      <Tree position={[20, 0, -5]} />
      <Tree position={[-20, 0, 5]} />
      <Tree position={[-10, 0, 5]} />
      <Tree position={[10, 0, 5]} />
      <Tree position={[20, 0, 5]} />

      <Chiamaia position={flyPosition} ref={flyRef} castShadow />
      <Indicador position={[0, 0, -8]} castShadow />

      {/* Texto 3D flotante */}
      <Text
        position={[0, 7, -10]}
        fontSize={2}
        color="red"
        anchorX="center"
        anchorY="middle"
      >
        CONTAMINACIÓN
      </Text>

      <Html position={[-10, 6, -10]}>
        <div style={{ textAlign: 'center', color: 'black', fontSize: '1.7rem' }}>
          CUIDEMOS EL MUNDO
        </div>
      </Html> 

      {/* Texto 2D */}
      <Html position={[4, 6, -10]}>
        <div style={{ textAlign: 'center', color: 'black', fontSize: '1.7rem' }}>
          NO MAS CONTAMINACION
        </div>
      </Html>

      <OrbitControls enableDamping enableZoom={false} />
    </>
  );
};

const GameContaminacion = () => (
  <Canvas camera={{ position: [0, 5, 20], fov: 40 }} shadows>
    <Scene />
  </Canvas>
);

export default GameContaminacion;
