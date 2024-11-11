import React, { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Html } from '@react-three/drei';
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
  const [showText, setShowText] = useState(false);  // Estado para mostrar el texto
  const [showInstructions, setShowInstructions] = useState(false); // Estado para mostrar instrucciones
  const flyRef = useRef();

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

  // Manejador de evento de clic para mostrar el texto de contaminación
  const handleClick = () => {
    setShowText(true);  // Muestra el texto al hacer clic
  };

  // Manejador de evento de clic para mostrar las instrucciones
  const handleInstructionsClick = () => {
    setShowInstructions(true);  // Muestra las instrucciones al hacer clic
  };

  return (
    <>
      {/* Implementación de iluminación adicional */}
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

      {/* Estrellas y fondo del cielo */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="green" />
      </mesh>

      {/* Árboles */}
      <Tree position={[-20, 0, -5]} />
      <Tree position={[-10, 0, -5]} />
      <Tree position={[10, 0, -5]} />
      <Tree position={[20, 0, -5]} />
      <Tree position={[-20, 0, 5]} />
      <Tree position={[-10, 0, 5]} />
      <Tree position={[10, 0, 5]} />
      <Tree position={[20, 0, 5]} />

      {/* Modelos 3D */}
      <Chiamaia position={flyPosition} ref={flyRef} castShadow />
      <Indicador position={[0, 0, -8]} castShadow />

      {/* Texto sobre el indicador, se muestra solo si showText es true */}
      {showText && (
        <Html position={[-3.3, 5, -8]}>
          <p style={{ color: 'black', fontSize: '1rem', textAlign: 'justify', padding: '10px', width: '20rem' }}>
            La contaminación afecta el aire, agua y suelo, amenazando la biodiversidad y salud. Es esencial reducir residuos, proteger ecosistemas y fomentar la sostenibilidad.
          </p>
        </Html>
      )}

      {/* Instrucciones, se muestra solo si showInstructions es true */}
      {showInstructions && (
        <Html position={[-3.3, 2, -8]}>
          <p style={{ color: 'black', fontSize: '1rem', textAlign: 'justify', padding: '10px', width: '20rem' }}>
            Para mover el personaje usa las flechas del teclado (arriba, abajo, izquierda, derecha) o haz clic y arrastra el mouse.
          </p>
        </Html>
      )}

      {/* Elementos HTML 3D */}
      <Html position={[-10, 2, -10]}>
        <h1 style={{ color: 'white', fontSize: '2rem' }}>¡Bienvenido a la escena!</h1>
        <button style={{ backgroundColor: 'green', color: 'white', padding: '10px' }} onClick={handleClick}>
          Haz clic aquí
        </button>
        <button style={{ backgroundColor: 'blue', color: 'white', padding: '10px', marginLeft: '20px' }} onClick={handleInstructionsClick}>
          Instrucciones
        </button>
      </Html>

      {/* Control de la cámara */}
      <OrbitControls enableDamping enableZoom={false} />
    </>
  );
};

const GameContaminacion = () => (
  <Canvas camera={{ position: [0, 15, 25], fov: 20 }} shadows>
    <Scene />
  </Canvas>
);

export default GameContaminacion;
