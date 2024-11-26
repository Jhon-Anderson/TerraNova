import React from 'react';
import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier'; // Importa las físicas

export function SeaFloorModel(props) {
  const { nodes } = useGLTF('/model-3d/suelo_marino.glb'); // Ruta correcta al modelo

  return (
    <RigidBody type="fixed" colliders="trimesh" {...props}> {/* Tipo fijo para que no se mueva */}
      <group dispose={null}>
        <mesh
          position={[0, -1, 0]}
          scale={16}
          rotation={[0, Math.PI / 2, 0]}
          castShadow
          receiveShadow
          geometry={nodes.geometry_0.geometry}
          material={nodes.geometry_0.material}
        />
      </group>
    </RigidBody>
  );
};

export default SeaFloorModel;
