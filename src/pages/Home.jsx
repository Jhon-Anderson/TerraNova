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
            <Canvas className="canvas" shadows>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
                <pointLight position={[-5, 5, 5]} intensity={0.5} />
                <Isla />
                <Cartel />

                <OrbitControls enablePan={true} enableZoom={true} />
            </Canvas>
            <Footer />
        </div>
    );
};


export default Home;
