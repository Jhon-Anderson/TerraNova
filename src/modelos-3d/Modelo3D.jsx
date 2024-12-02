import React, { useState, useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { RigidBody } from '@react-three/rapier';
import { Html } from '@react-three/drei';

const Modelo3D = ({ position = [0, 0, 0], scale = 1, rotation = [0, 0, 0] }) => {
  const [model, setModel] = useState();
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const mtlLoader = new MTLLoader();
    mtlLoader.load('/model-3d/islabonita.mtl', (materials) => {
      materials.preload();

      const objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.load(
        '/model-3d/islabonita.obj',
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

  const handleCollision = (event) => {
    const { other } = event;
    // Verificar si el objeto que colisiona es el barco
    if (other.userData && other.userData.name === 'barco') {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false); // Oculta el mensaje después de 3 segundos
      }, 3000);
    }
  };

  return model ? (
    <RigidBody
    position={position}
    scale={scale}
    rotation={rotation}
    colliders="hull"
    onCollisionEnter={({ other }) => {
      // Verifica si el objeto que colisiona es el barco
      if (other.userData?.name === 'barco') {
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 3000);
      }
    }}
  >
    <primitive object={model} />
    {showMessage && (
      <Html position={[0, 2, 0]} center>
        <div
          style={{
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            padding: '10px',
            borderRadius: '8px',
          }}
        >
          ¡Colisión detectada con la isla!
        </div>
      </Html>
    )}
  </RigidBody>
  
  ) : null;
};

export default Modelo3D;
