import React, { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { RigidBody } from '@react-three/rapier';

const Desierto = ({ position = [-7, -6.8, -5], scale = 8, rotation = [0, 0, 0] }) => {
  const [model, setModel] = useState(null);
  const groupRef = useRef();

  useEffect(() => {
    // Cargar el modelo 3D con materiales
    const mtlLoader = new MTLLoader();
    mtlLoader.load('/model-3d/desierto.mtl', (materials) => {
      materials.preload();
      const objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.load('/model-3d/desierto.obj', (obj) => {
        obj.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });
        setModel(obj);
      });
    });
  }, []);

  return (
    <>
      {/* Piso flotante con físicas */}
      <RigidBody type="fixed" position={[0, 0, 0]}>
        <mesh receiveShadow>
          <boxGeometry args={[15, 0.5, 15]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
      </RigidBody>

      {/* Modelo del desierto sin físicas */}
      {model && (
        <primitive
          object={model}
          scale={scale}
          rotation={rotation}
          ref={groupRef}
          castShadow
          receiveShadow
          position={position}
        />
      )}
    </>
  );
};

export default Desierto;

