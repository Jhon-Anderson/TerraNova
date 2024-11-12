// SeaFloorModel.js
import React from 'react';
import { useGLTF } from '@react-three/drei';

export function SeaFloorModel(props) {
  const { nodes } = useGLTF('/model-3d/suelo_marino.glb'); // Asegúrate de que la ruta sea correcta

  return (
    
    <group {...props} dispose={null}>
      <mesh
        position={[0,-1,0]}
        scale={16}
        rotation={[0, Math.PI / 2, 0]}
        castShadow
        receiveShadow
        geometry={nodes.geometry_0.geometry}
        material={nodes.geometry_0.material}
      />
    </group>
  );
};
export default SeaFloorModel;
