import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import './QuizContaminacion.css';

const QuizContaminacion = () => {
  const filas = Array.from({ length: 5 }, (_, i) => i); // Genera un array [0, 1, 2, 3, 4]
  const navigate = useNavigate(); // Inicializa useNavigate

  const handleBack = () => {
    navigate(-1); // Navega a la página anterior
  };

  return (
    <div className="quiz-container">
      <button className="back-button" onClick={handleBack}>
        Back
      </button>
      <div className="content">
        <div className="label-container">
          <div className="label">Contaminación</div>
        </div>
        <table className="tabla">
          <tbody>
            {filas.map((fila) => (
              <tr key={fila}>
                {filas.map((columna) => (
                  <td key={columna} className="cuadro"></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="label-container">
          <div className="label">Medio Ambiente</div>
        </div>
      </div>
    </div>
  );
};

export default QuizContaminacion;
