import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

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

const Scene = () => (
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

    <OrbitControls enableDamping />
  </>
);

const Lobby = () => (
  <Canvas camera={{ position: [0, 15, 25], fov: 45 }}>
    <Scene />
  </Canvas>
);

export default Lobby;
