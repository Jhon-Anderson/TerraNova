import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Text, Html, Cloud, Sky } from '@react-three/drei';
import { Physics, useBox, usePlane } from '@react-three/cannon';
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

const Clouds = () => {
  const positions = [
    [10, 10, -10],
    [-10, 8, 5],
    [-10, 8, -15],
    [5, 9, 10],
  ];
  return positions.map((pos, index) => <Cloud key={index} position={pos} />);
};

const Ground = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, 0, 0],
  }));
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="green" />
    </mesh>
  );
};

const FallingObject = ({ position, args, color }) => {
  const [ref] = useBox(() => ({ mass: 1, position }));
  return (
    <mesh ref={ref} castShadow>
      <boxGeometry args={args} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const RandomFallingObjects = () => (
  <>
    {Array.from({ length: 10 }).map((_, i) => (
      <FallingObject
        key={i}
        position={[
          (Math.random() - 0.5) * 20,
          10 + Math.random() * 10,
          (Math.random() - 0.5) * 20,
        ]}
        args={[1, 1, 1]}
        color={`hsl(${Math.random() * 360}, 100%, 50%)`}
      />
    ))}
  </>
);

const generateTreePositions = () => {
  const positions = [];
  const rows = [-5, 5];
  const cols = [-20, -10, 10, 20];
  rows.forEach((z) => cols.forEach((x) => positions.push([x, 0, z])));
  return positions;
};

const Scene = () => {
  const [flyPosition, setFlyPosition] = useState([0, -0.2, 0]);

  const moveFly = (direction) => {
    setFlyPosition((prev) => {
      const newPos = [...prev];
      if (direction === 'up') newPos[2] -= 0.5;
      if (direction === 'down') newPos[2] += 0.5;
      if (direction === 'left') newPos[0] -= 0.5;
      if (direction === 'right') newPos[0] += 0.5;
      newPos[1] = -0.2;
      return newPos;
    });
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const actions = {
        ArrowUp: () => moveFly('up'),
        w: () => moveFly('up'),
        ArrowDown: () => moveFly('down'),
        s: () => moveFly('down'),
        ArrowLeft: () => moveFly('left'),
        a: () => moveFly('left'),
        ArrowRight: () => moveFly('right'),
        d: () => moveFly('right'),
      };
      if (actions[e.key]) actions[e.key]();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {/* Iluminación */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 20, 10]} intensity={3} castShadow />
      <spotLight position={[0, 10, 0]} angle={0.15} intensity={0.8} castShadow />

      {/* Cielo y Estrellas */}
      <Sky inclination={0.5} azimuth={0.25} turbidity={10} rayleigh={2} />
      <Stars radius={100} depth={50} count={5000} factor={4} fade />

      {/* Modelos y Objetos */}
      <Chiamaia position={flyPosition} />
      <Indicador position={[0, 0, -8]} />
      {generateTreePositions().map((pos, i) => (
        <Tree key={i} position={pos} />
      ))}
      <Ground />
      <RandomFallingObjects />

      {/* Texto y Mensajes */}
      <Text position={[0, 7.5, -10]} fontSize={3} color="#1abc9c">
        CONTAMINACIÓN
      </Text>
      <Html position={[-10, 5, -10]}>
        <div style={{ color: '#ff6347', fontSize: '2rem' }}>CUIDEMOS EL MUNDO</div>
      </Html>
      <Html position={[5, 5, -10]}>
        <div style={{ color: '#32CD32', fontSize: '2rem' }}>PAREMOS DE CONTAMINAR</div>
      </Html>

      <OrbitControls enableDamping enableZoom={false} />
    </>
  );
};

const GameContaminacion = () => (
  <Canvas camera={{ position: [0, 5, 20], fov: 40 }} shadows>
    <Physics gravity={[0, -9.8, 0]}>
      <Scene />
      <Clouds />
    </Physics>
  </Canvas>
);

export default GameContaminacion;
