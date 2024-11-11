import { Center, Html, Text, Text3D } from "@react-three/drei";

const Title3D = () => {
    return (
        <>
            <Html
                occlude
                className="Welcome-Text"
                center
                distanceFactor={8}
                trasform
                position={[0, 2, 0]}
            >
                <h1>Afectados</h1>
            </Html>
        </>
    )
};
export default Title3D;