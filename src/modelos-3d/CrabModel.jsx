import React, { useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';

function CrabModel({ onCollide, ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/model-3d/Crab.glb'); // Ruta del modelo
  console.log('Nodos:', nodes); // Agrega un log para depurar
  console.log('Materiales:', materials);

  const [isHit, setIsHit] = useState(false); // Estado para manejar colisiones

  return (
    <RigidBody
      ref={group}
      type="kinematicPosition" // No será afectado por la gravedad
      colliders="hull"
      restitution={0.2}
      friction={4}
      onCollisionEnter={({ other }) => {
        if (other.rigidBodyObject?.name === 'acidSphere') {
          setIsHit(true); // Marca al cangrejo como golpeado
          onCollide?.();
        }
      }}
      {...props}
    >
      <group dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes?.mesh_0?.geometry} // Cambia "mesh_0" si es necesario
          material={materials?.TexMap} // Cambia "TexMap" si es necesario
        />
      </group>
    </RigidBody>
  );
}

export default CrabModel;
