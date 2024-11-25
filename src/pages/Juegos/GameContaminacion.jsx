import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Text, Html, Cloud, Sky } from '@react-three/drei'; // Asegúrate de importar Sky
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
  const [ref] = useBox(() => ({
    mass: 1,
    position,
  }));
  return (
    <mesh ref={ref} castShadow>
      <boxGeometry args={args} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const RandomFallingObjects = () => {
  const generateRandomPosition = () => [
    (Math.random() - 0.5) * 20,
    10 + Math.random() * 10,
    (Math.random() - 0.5) * 20,
  ];

  return (
    <>
      {Array.from({ length: 10 }).map((_, i) => (
        <FallingObject
          key={i}
          position={generateRandomPosition()}
          args={[1, 1, 1]}
          color={`hsl(${Math.random() * 360}, 100%, 50%)`}
        />
      ))}
    </>
  );
};

const Scene = () => {
  const [flyPosition, setFlyPosition] = useState([0, -0.2, 0]);
  const [moving, setMoving] = useState(false);

  const moveFly = (direction) => {
    setMoving(true);
    setFlyPosition((prev) => {
      const newPosition = [...prev];
      if (direction === 'up') newPosition[2] -= 0.5;
      if (direction === 'down') newPosition[2] += 0.5;
      if (direction === 'left') newPosition[0] -= 0.5;
      if (direction === 'right') newPosition[0] += 0.5;
      newPosition[1] = -0.2;
      return newPosition;
    });
  };

  const stopMoving = () => setMoving(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowUp' || e.key === 'w') moveFly('up');
      if (e.key === 'ArrowDown' || e.key === 's') moveFly('down');
      if (e.key === 'ArrowLeft' || e.key === 'a') moveFly('left');
      if (e.key === 'ArrowRight' || e.key === 'd') moveFly('right');
    };

    const handleKeyUp = () => stopMoving();

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
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

     {/* Sky con gradiente azul y blanco */}
     <Sky
        distance={450000} // Ajusta la distancia para modificar la intensidad del cielo
        inclination={0.5}  // Ajusta la inclinación para cambiar el ángulo del cielo
        azimuth={0.25}     // Ajusta el azimut para cambiar la dirección del sol
        turbidity={10}     // Ajusta la turbidez para más detalles en el cielo
        rayleigh={2}       // Ajusta la dispersión de la luz
        mieCoefficient={0.005} // Ajusta la dispersión de la luz
        mieDirectionalG={0.8} // Ajusta el efecto de luz direccional
        skyColor="#87CEEB"  // Azul claro
        sunColor="#87CEEB"  // Blanco
      />

      {/* Estrellas */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />

      {/* Nubes */}
      <Cloud position={[10, 10, -10]} />
      <Cloud position={[-10, 8, 5]} />
      <Cloud position={[-10, 8, -15]} />
      <Cloud position={[5, 9, 10]} />
      

      {/* Modelo vinculado a flyPosition */}
      <Chiamaia position={flyPosition} castShadow />
      <Indicador position={[0, 0, -8]} castShadow />

      {/* Indicador de movimiento */}
      <Text
        position={[flyPosition[0], 1.5, flyPosition[2]]}
        fontSize={0.5}
        color={moving ? 'lime' : 'red'}
        anchorX="center"
        anchorY="middle"
      >
      </Text>

      {/* Árboles */}
      <Tree position={[-20, 0, -5]} />
      <Tree position={[-10, 0, -5]} />
      <Tree position={[10, 0, -5]} />
      <Tree position={[20, 0, -5]} />
      <Tree position={[-20, 0, 5]} />
      <Tree position={[-10, 0, 5]} />
      <Tree position={[10, 0, 5]} />
      <Tree position={[20, 0, 5]} />

      {/* Física del suelo */}
      <Ground />

      {/* Objetos cayendo */}
      <RandomFallingObjects />

      {/* Texto 3D flotante */}
      <Text position={[0, 7, -10]} fontSize={2} color="red" anchorX="center" anchorY="middle">
        CONTAMINACIÓN
      </Text>

      <Html position={[-10, 6, -10]}>
        <div style={{ textAlign: 'center', color: 'black', fontSize: '1.7rem' }}>CUIDEMOS EL MUNDO</div>
      </Html>

      <Html position={[5, 6, -10]}>
        <div style={{ textAlign: 'center', color: 'black', fontSize: '1.7rem' }}>PAREMOS DE CONTAMINAR</div>
      </Html>

      <OrbitControls enableDamping enableZoom={false} />
    </>
  );
};

const GameContaminacion = () => (
  <Canvas camera={{ position: [0, 5, 20], fov: 40 }} shadows>
    <Physics gravity={[0, -9.8, 0]}>
      <Scene />
    </Physics>
  </Canvas>
);

export default GameContaminacion;
