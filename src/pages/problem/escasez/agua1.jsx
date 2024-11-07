// Agua1.jsx
import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Plane } from '@react-three/drei';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';

function Ocean({ color = "#1e90ff", opacity = 0.8 }) {
  const meshRef = useRef();

  useFrame(() => {
    const time = Date.now() * 0.001;
    meshRef.current.geometry.attributes.position.array.forEach((_, i) => {
      const x = meshRef.current.geometry.attributes.position.getX(i);
      const y = meshRef.current.geometry.attributes.position.getY(i);
      const waveX1 = 0.5 * Math.sin(x * 0.2 + time);
      const waveX2 = 0.25 * Math.sin(x * 0.3 + time * 2);
      const waveY1 = 0.1 * Math.sin(y * 0.3 + time);
      meshRef.current.geometry.attributes.position.setZ(i, waveX1 + waveX2 + waveY1);
    });
    meshRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Plane args={[100, 100, 50, 50]} rotation={[-Math.PI / 2, 0, 0]} ref={meshRef}>
      <meshPhongMaterial
        attach="material"
        color={color}
        shininess={100}
        opacity={opacity}
        transparent={true}
      />
    </Plane>
  );
}

function Model({ position, scale = 0.01, rotation = [Math.PI / -2, 0, 0] }) {
  const [obj, setObj] = useState();

  useEffect(() => {
    const mtlLoader = new MTLLoader();
    mtlLoader.load('model-3d/12219_boat_v2_L2.mtl', (materials) => {
      materials.preload();

      const objLoader = new OBJLoader();
      objLoader.setMaterials(materials); // Aplica los materiales del archivo MTL
      objLoader.load('model-3d/12219_boat_v2_L2.obj', (loadedObj) => {
        setObj(loadedObj);
      });
    });
  }, []);

  return obj ? (
    <primitive object={obj} position={[position[0], position[1] + -2.7, position[2]]}  scale={scale} rotation={rotation} />
  ) : null;
}

export default function Agua1() {
  const [position, setPosition] = useState([0, 1, 0]);

  // Manejar las teclas para mover el modelo
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

    // Añadir el evento de teclado
    window.addEventListener('keydown', handleKeyDown);

    // Remover el evento cuando se desmonte el componente
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <Canvas camera={{ position: [0, 5, 10], fov: 75 }}>
      {/* Cielo y Luz */}
      <color attach="background" args={["#87CEEB"]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[-10, 10, 10]} intensity={0.5} />

      {/* Superficie del Océano */}
      <Ocean />

      {/* Modelo 3D con Movimiento y Texturas */}
      <Suspense fallback={null}>
        <Model position={position} />
      </Suspense>

      {/* Controles de Cámara */}
      <OrbitControls />
    </Canvas>
  );
}
