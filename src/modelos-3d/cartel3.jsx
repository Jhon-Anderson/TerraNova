import React, { useState } from 'react';
import { Text, useGLTF } from '@react-three/drei';
import { RigidBody, CuboidCollider } from '@react-three/rapier';

const Cartel3 = () => {
  const { scene } = useGLTF('/model-3d/sign.glb');
  const [message, setMessage] = useState(null);

  // Agregar sombras al modelo
  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  // Función para manejar la colisión
  const handleCollision = () => {
    // Mostrar el mensaje cuando el cartel colisiona
    setMessage('¡Colisión detectada!');
  };

  return (
    <>
      {/* Cartel con físicas */}
      <RigidBody type="kinematicPosition" position={[5, -0.5, -2]}>
        <primitive 
          object={scene} 
          scale={10} 
          rotation={[0, Math.PI / -1.4, 0]}
        />
        {/* Caja invisible para la detección de colisiones */}
        <CuboidCollider args={[2, 1, 0.1]} onCollisionEnter={handleCollision} />
      </RigidBody>

      {/* Mensaje cuando ocurre una colisión */}
      {message && (
        <Text
          position={[4, 1.7, -4]}
          rotation={[0, Math.PI / -1.12, 0]}
          fontSize={0.25}
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={7.5}
          lineHeight={0.6}
          textAlign="justify"
          wrap={true}
        >
          {"La escasez de agua es causada principalmente por factores como el crecimiento poblacional, que incrementa la demanda de recursos hídricos; la contaminación de fuentes de agua debido a actividades industriales, agrícolas y domésticas; y el cambio climático, que altera los patrones de lluvia y reduce la disponibilidad de agua en algunas regiones. Además, la gestión ineficiente de los recursos hídricos y el desperdicio agravan este problema, especialmente en áreas con infraestructura deficiente."}
        </Text>
      )}
    </>
  );
};

export default Cartel3;
