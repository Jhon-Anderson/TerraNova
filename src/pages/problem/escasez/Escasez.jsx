import React from 'react';
import Footer from '../../Footer';
import Header from '../../Header';
import './Escasez.css';

function Escasez() {
    return (
        <div className="escasez-container">
            <Header/>
            <h1 className="title">Escasez de Agua</h1>
            <div className="info-boxes">
                <div className="info-box">
                    <h2>¿Qué es la Escasez de Agua?</h2>
                    <p>
                        La escasez de agua se refiere a la falta de acceso suficiente al agua dulce
                        para satisfacer las necesidades humanas y ecológicas.
                    </p>
                </div>
                <div className="info-box">
                    <h2>Causas de la Escasez de Agua</h2>
                    <p>
                        Las principales causas de la escasez de agua incluyen el crecimiento poblacional,
                        la contaminación, el cambio climático y la gestión ineficiente del agua.
                    </p>
                </div>
                <div className="info-box">
                    <h2>Consecuencias de la Escasez de Agua</h2>
                    <p>
                        La escasez de agua puede causar problemas de salud, conflictos sociales
                        y afectar la producción agrícola y la biodiversidad.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Escasez;
