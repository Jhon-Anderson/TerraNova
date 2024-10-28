import Header from '../componentes/Header.jsx';
import Footer from '../componentes/Footer.jsx';
import Cartel from '../cartel/Cartel.jsx';
import './Home.css';

const Home = () => {

    return (
        <div className="home-container">
            <Header />

            <main className="main-content">
                <Cartel/>
            </main>

            <Footer />
        </div>
    );
};

export default Home;
