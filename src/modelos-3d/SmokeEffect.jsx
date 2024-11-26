import React, { useState } from 'react';

function SmokeEffect({ position }) {
  const [visible, setVisible] = useState(true);

  // Temporizador para ocultar el humo después de 2 segundos
  React.useEffect(() => {
    const timeout = setTimeout(() => setVisible(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  if (!visible) return null; // Si el efecto ya pasó, no renderizar nada

  return (
    <mesh position={position}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        color="green"
        transparent
        opacity={0.5}
        emissive="green"
        emissiveIntensity={1.9}
      />
    </mesh>
  );
}

export default SmokeEffect;
