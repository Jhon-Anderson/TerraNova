import React from 'react';
import Footer from '../../Footer';
import Header from '../../Header';
import './Acidificacion.css';

function Acidificacion() {
    return (
        <div className="acidificacion-container">
        <Header/>
            <h1 className="title">Acidificación de los Océanos</h1>
            <div className="info-boxes">
                <div className="info-box">
                    <h2>¿Qué es la Acidificación de los Océanos?</h2>
                    <p>
                        La acidificación de los océanos es el proceso por el cual el agua del mar se vuelve
                        más ácida debido a la absorción de dióxido de carbono (CO2) de la atmósfera.
                    </p>
                </div>
                <div className="info-box">
                    <h2>Causas de la Acidificación</h2>
                    <p>
                        La principal causa de la acidificación es el aumento de las emisiones de CO2
                        debido a actividades humanas, como la quema de combustibles fósiles.
                    </p>
                </div>
                <div className="info-box">
                    <h2>Consecuencias de la Acidificación</h2>
                    <p>
                        La acidificación afecta a la vida marina, incluyendo corales, moluscos y peces,
                        y puede alterar los ecosistemas marinos.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Acidificacion;
