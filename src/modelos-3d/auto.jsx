import React, { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { TextureLoader } from 'three';
import { RigidBody } from '@react-three/rapier';

const Auto = ({ initialPosition = [-1, 0, -5], scale = 3.5, rotation = [0, -5, 0] }) => {
  const [model, setModel] = useState(null);
  const [texture, setTexture] = useState(null);
  const groupRef = useRef();
  const [position, setPosition] = useState(initialPosition); // Estado para la posición del auto

  useEffect(() => {
    // Cargar la textura PNG
    const textureLoader = new TextureLoader();
    textureLoader.load('/model-3d/Car Texture 1.png', (loadedTexture) => {
      setTexture(loadedTexture);
    });

    // Cargar el modelo OBJ
    const objLoader = new OBJLoader();
    objLoader.load('/model-3d/auto.obj', (obj) => {
      obj.traverse((child) => {
        if (child.isMesh) {
          if (texture) {
            child.material.map = texture;
          }
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      setModel(obj);
    });
  }, [texture]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      setPosition((prevPosition) => {
        const speed = 0.5; // Velocidad de movimiento
        switch (event.key) {
          case 'ArrowUp': // Mover hacia adelante
            return [prevPosition[0], prevPosition[1], prevPosition[2] - speed];
          case 'ArrowDown': // Mover hacia atrás
            return [prevPosition[0], prevPosition[1], prevPosition[2] + speed];
          case 'ArrowLeft': // Mover hacia la izquierda
            return [prevPosition[0] - speed, prevPosition[1], prevPosition[2]];
          case 'ArrowRight': // Mover hacia la derecha
            return [prevPosition[0] + speed, prevPosition[1], prevPosition[2]];
          default:
            return prevPosition;
        }
      });
    };

    // Agregar el evento al presionar teclas
    window.addEventListener('keydown', handleKeyDown);

    // Limpiar el evento al desmontar el componente
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      {/* Modelo 3D del auto */}
      {model && (
        <RigidBody colliders="hull" mass={1} position={position}>
          <primitive
            object={model}
            scale={scale}
            rotation={rotation}
            ref={groupRef}
            castShadow
            receiveShadow
            restitution={0.2}
            friction={4}
            type="kinematicPosition"
          />
        </RigidBody>
      )}
    </>
  );
};

export default Auto;
