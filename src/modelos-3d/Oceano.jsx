import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Plane } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';

const Oceano = ({ color = "#1e90ff", opacity = 0.8 }) => {
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
    <RigidBody type="fixed" colliders="trimesh">
      <Plane args={[100, 100, 50, 50]} rotation={[-Math.PI / 2, 0, 0]} ref={meshRef}>
        <meshPhongMaterial
          attach="material"
          color={color}
          shininess={100}
          opacity={opacity}
          transparent={true}
        />
      </Plane>
    </RigidBody>
  );
};

export default Oceano;