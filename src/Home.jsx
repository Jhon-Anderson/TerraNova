import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Importa el archivo de estilos
import logo from './logo.svg';

const Home = () => {
    const navigate = useNavigate();

    // Controlador para el slider
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            title: 'INTRODUCCIÓN',

        },
        {
            title: 'Naturaleza',

        },
        {

            title: 'Sostenibilidad',

        },
    ];

    const handleLogout = () => {
        navigate('/login');
    };

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
                    <img src={logo} alt="Terranova Logo" className="logo-img" />
                    <h2 className="logo-text">Terranova</h2>
                </div>
                <nav className="navbar">
                    <ul className="nav-links">
                        <li><button onClick={() => navigate('/option1')} className="nav-button">Opción 1</button></li>
                        <li><button onClick={() => navigate('/option2')} className="nav-button">Opción 2</button></li>
                        <li><button onClick={() => navigate('/option3')} className="nav-button">Opción 3</button></li>
                    </ul>
                </nav>
                <button onClick={handleLogout} className="logout-button">Cerrar Sesión</button>
            </header>

            <main className="main-content">
                <div className="slider">
                    <button className="arrow left-arrow" onClick={prevSlide}>&lt;</button>
                    <div className="slide">
                        <img src={slides[currentSlide].image} alt={slides[currentSlide].title} className="slide-image" />
                        <h1>{slides[currentSlide].title}</h1>
                        <p className="slide-description">{slides[currentSlide].description}</p>
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