import React, { useState } from 'react'; // Combina ambas importaciones de React
import { OrbitControls } from '@react-three/drei';
import SeaHorseModel from '../../../modelos-3d/SeaHorseModel';
import SeaFloorModel from '../../../modelos-3d/SeaFloorModel';
import CrabModel from '../../../modelos-3d/CrabModel';
import SmokeEffect from '../../../modelos-3d/SmokeEffect';
import Oceano from '../../../modelos-3d/Oceano';

function Escenario3D() {
    // Inicializa el estado para la posición del humo
    const [smokePosition, setSmokePosition] = useState(null);

    // Maneja la colisión del cangrejo
    const handleCrabCollide = (position) => {
        console.log('Colisión detectada en posición:', position); // Debug para verificar
        setSmokePosition(position); // Actualiza la posición del humo
      };
    // Reinicia el estado después de 2 segundos para permitir que vuelva a ocurrir
    setTimeout(() => setSmokePosition(null), 2000);
    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />

            {/* Suelo marino con físicas */}
            <SeaFloorModel position={[0, -1, 0]} scale={2} />

            {/* Calamar con interacciones */}
            <SeaHorseModel position={[3, 0, 0]} scale={1} />
            <Oceano/>

            {/* Cangrejo con físicas y detección de colisión */}
            <CrabModel
                position={[0, -2.6, 0]} // Ajusta la posición según tu escena
                scale={0.4}
                onCollide={() => handleCrabCollide([0, -2.6, 0])} 
            />

            {/* Humo verde al colisionar */}
            {smokePosition && <SmokeEffect position={smokePosition} />}
        </>
    );
}

export default Escenario3D;
