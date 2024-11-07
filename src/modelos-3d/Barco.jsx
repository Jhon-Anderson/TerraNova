import React, { useState, useEffect } from 'react';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';

const Barco = ({ position, scale = 0.01, rotation = [Math.PI / -2, 0, 0] }) => {
  const [obj, setObj] = useState();

  useEffect(() => {
    const mtlLoader = new MTLLoader();
    mtlLoader.load('model-3d/12219_boat_v2_L2.mtl', (materials) => {
      materials.preload();

      const objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.load('model-3d/12219_boat_v2_L2.obj', (loadedObj) => {
        setObj(loadedObj);
      });
    });
  }, []);

  return obj ? (
    <primitive object={obj} position={[position[0], position[1] - 2.7, position[2]]} scale={scale} rotation={rotation} />
  ) : null;
};

export default Barco;
