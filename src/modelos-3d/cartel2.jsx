
import React from 'react';
import { Text, useGLTF } from '@react-three/drei';

const Cartel = () => {
    const { scene } = useGLTF('/model-3d/sign.glb');

    scene.traverse((child) => {
        if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
        }
    });

    return (
        <>
            <primitive 
                object={scene} 
                scale={55} 
                position={[0, 1, -58]} 
                rotation={[0, Math.PI / 6, 0]}
            />
            <Text
                position={[-1, 15, -48]}
                fontSize={1.6}
                color="white"
                anchorX="center"
                anchorY="middle"
                maxWidth={6.5}
                lineHeight={0.5}
                textAlign="justify"
                wrap={true}
            >
               La&nbsp;escasez&nbsp;de&nbsp;agua&nbsp;es&nbsp;un&nbsp;problema&nbsp; global&nbsp;creciente&nbsp;impulsado&nbsp;por&nbsp;el&nbsp;cambio&nbsp; climático,&nbsp;la&nbsp;contaminación&nbsp;y&nbsp;la&nbsp;mala&nbsp; gestión&nbsp;de&nbsp;recursos.&nbsp; Afecta&nbsp;el&nbsp;acceso&nbsp;al&nbsp;agua&nbsp;potable,&nbsp;la&nbsp;agricultura&nbsp;y&nbsp;los&nbsp; ecosistemas,&nbsp;impactando&nbsp; gravemente&nbsp;a&nbsp;las&nbsp;comunidades&nbsp;más&nbsp;vulnerables
                        </Text>
        </>
    );
};

export default Cartel;
