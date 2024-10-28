import React, { useState } from 'react';
import Footer from '../../../componentes/Footer';
import Header from '../../../componentes/Header';
import './Contaminacion.css';

const Contaminacion = () =>{

    return (
        <div className="contaminacion-container">
            <Header />

            <h1 className="title">Contaminación del Agua</h1>
            
            <div className="info-boxes">
                <div className="info-box">
                    <h2>Causas de la contaminacion del agua</h2>
                    <p>
                        La contaminación del agua es causada por vertidos industriales y domésticos,
                        uso de pesticidas y fertilizantes, y derrames de petróleo.
                    </p>
                </div>
                <div className="info-box">
                    <h2>Efectos de la contaminacion del agua</h2>
                    <p>
                    La contaminación del agua daña ecosistemas acuáticos, afecta la salud humana y 
                    provoca la muerte de flora y fauna.
                    </p>
                </div>
                <div className="info-box">
                    <h2>Soluciones para la contaminacion del agua</h2>
                    <p>
                    La contaminación del agua puede reducirse tratando desechos, usando menos
                    químicos en agricultura y previniendo derrames.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contaminacion;
