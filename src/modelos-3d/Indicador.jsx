import React from 'react';
import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three-stdlib';

const Indicador = ({ position = [0, 0, 0] }) => {
    const scene = useLoader(OBJLoader, '/model-3d/indicador.obj');

    return (
        <primitive
            object={scene}
            scale={0.08}
            position={position} // Aplicar la posición recibida como prop
        />
    );
};

export default Indicador;
