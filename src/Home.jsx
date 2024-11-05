// Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Recycling from './recycling/Recycling.jsx';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <header className="header">
                <div className="logo">
                    <img src="/logo.svg" alt="Terranova Logo" className="logo-img" />
                    <h2 className="logo-text">Terranova</h2>
                </div>
                <nav className="navbar">
                    <ul className="nav-links">
                        <li><button onClick={() => navigate('/option1')} className="nav-button">Opción 1</button></li>
                        <li><button onClick={() => navigate('/option2')} className="nav-button">Opción 2</button></li>
                        <li><button onClick={() => navigate('/option3')} className="nav-button">Opción 3</button></li>
                    </ul>
                </nav>
                <button onClick={() => navigate('/login')} className="logout-button">Cerrar Sesión</button>
            </header>

            <main className="main-content">
                <div className="slider">
                    <div className="slide-content">
                        <Recycling />
                    </div>
                </div>
            </main>

            <footer className="footer">
                <p>© 2024 Terranova. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default Home;
