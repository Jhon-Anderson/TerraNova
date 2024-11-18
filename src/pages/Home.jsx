import Header from '../componentes/Header.jsx';
import Footer from '../componentes/Footer.jsx';
import Cartel from '../modelos-3d/Cartel.jsx';
import Isla from '../modelos-3d/Isla.jsx';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <Header />
            <Canvas
                className="canvas"
                camera={{ position: [5, 5, 10], fov: 45 }}
            >
                {/* Suelo verde */}
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
                    <planeGeometry args={[50, 50]} />
                    <meshBasicMaterial color="green" /> {/* Material básico sin iluminación */}
                </mesh>

                {/* Modelos 3D */}
                <Isla />
                <Cartel />

                {/* Controles de cámara */}
                <OrbitControls enablePan={true} enableZoom={true} />
            </Canvas>
            <Footer />
        </div>
    );
};

export default Home;
