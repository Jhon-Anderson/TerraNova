import React, { useState, useEffect } from 'react';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { DirectionalLight } from 'three';
import { useThree } from '@react-three/fiber';

const Barco = ({ position, scale = 0.01, rotation = [Math.PI / -2, 0, -1.6] }) => {
  const [obj, setObj] = useState();
  const { scene } = useThree();

  useEffect(() => {
    const directionalLight = new DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(10, 10, 10); 
    directionalLight.castShadow = true; 
    scene.add(directionalLight);

    
    const mtlLoader = new MTLLoader();
    mtlLoader.load('model-3d/12219_boat_v2_L2.mtl', (materials) => {
      materials.preload();

      const objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.load('model-3d/12219_boat_v2_L2.obj', (loadedObj) => {
        loadedObj.castShadow = true; 
        loadedObj.receiveShadow = true; 
        setObj(loadedObj);
      });
    });

   
    return () => {
      scene.remove(directionalLight);
    };
  }, [scene]);

  return obj ? (
    <primitive
      object={obj}
      position={[position[0], position[1] - 2.7, position[2]]}
      scale={scale}
      rotation={rotation}
      castShadow
      receiveShadow
    />
  ) : null;
};

export default Barco;

