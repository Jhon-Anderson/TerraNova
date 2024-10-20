import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Cartel from './cartel/Cartel.jsx';

const Home = () => {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: 'INTRODUCCIÓN',
            content: <Cartel />,
        },
        {
            title: 'PROBLEMATICA',
            content: <Cartel />,
        },
    ];

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    return (
        <div className="home-container">
            <header className="header">
                <div className="logo">
                    <img src="/logo.svg" alt="Terranova Logo" className="logo-img" />
                    <h2 className="logo-text">TerraNova</h2>
                </div>
                <nav className="navbar">
                    <ul className="nav-links">
                        <li><button onClick={() => navigate('/Contaminacion')} className="nav-button">Contaminación</button></li>
                        <li><button onClick={() => navigate('/Escasez')} className="nav-button">Escasez</button></li>
                        <li><button onClick={() => navigate('/Acidificacion')} className="nav-button">Acidificación</button></li>
                    </ul>
                </nav>
                <button onClick={() => navigate('/')} className="logout-button">Cerrar Sesión</button>
            </header>

            <main className="main-content">
                <div className="slider">
                    <button className="arrow left-arrow" onClick={prevSlide}>&lt;</button>
                    <div className="slide">
                        <h1>{slides[currentSlide].title}</h1>
                        <div className="slide-content">
                            {slides[currentSlide].content}
                        </div>
                    </div>
                    <button className="arrow right-arrow" onClick={nextSlide}>&gt;</button>
                </div>
            </main>

            <footer className="footer">
                <p>© 2024 TerraNova. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default Home;
