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
            content:  <Recycling />,
        },
        {
            title: 'PROBLEMATICA',
            content:  <Recycling />,
        },
        {
            title: 'EDUCACION',
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
                <p>© 2024 Terranova. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default Home;
