
import React, { useState, useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';

const Modelo3D = ({  position = [0, 0, 0], scale = 1, rotation = [0, 0, 0] }) => {
  const [model, setModel] = useState();

  useEffect(() => {
   
    const mtlLoader = new MTLLoader();
    mtlLoader.load('/model-3d/uploads_files_3382784_uploads_files_3382784_abolitos.mtl', (materials) => {
      materials.preload();

     
      const objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.load(
        '/model-3d/uploads_files_3382784_uploads_files_3382784_abolitos.obj',
        (loadedObj) => {
          setModel(loadedObj);
        },
        undefined,
        (error) => {
          console.error('Error al cargar el modelo OBJ:', error);
        }
      );
    });
  }, []);

  return model ? (
    <primitive
      object={model}
      position={[position[1.], position[1]  , position[2]]}
      scale={scale}
      rotation={rotation}
    />
  ) : null;
};

export default Modelo3D;
