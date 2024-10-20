import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Recycling from './recycling/Recycling.jsx';

const Home = () => {
    const navigate = useNavigate();

    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: 'INTRODUCCIÓN',
            content: (
                <div className="introduction-text">
                    <p>
                        La problemática del cuidado del agua es uno de los mayores desafíos globales de nuestro tiempo. El agua es un recurso esencial para la vida, la producción de alimentos, la energía y el desarrollo económico, pero está gravemente amenazada por la contaminación y el mal uso. Factores como la industrialización, la agricultura intensiva, el calentamiento global, y la deforestación han degradado la calidad del agua, afectando ecosistemas enteros y exponiendo a millones de personas a riesgos sanitarios. Esta crisis demanda soluciones urgentes que incluyan la reducción de emisiones, el tratamiento adecuado de residuos, y la conservación de los recursos hídricos para garantizar un futuro sostenible.
                    </p>
                </div>
            ),
        },
        {
            title: 'PROBLEMATICA',
            content: <Recycling />,
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
