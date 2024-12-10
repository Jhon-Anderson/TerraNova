import React from 'react';
import './QuizContaminacion.css';

const QuizContaminacion = () => {
  const filas = Array.from({ length: 5 }, (_, i) => i); // Genera un array [0, 1, 2, 3, 4]

  return (
    <div className="quiz-container">
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
  );
};

export default QuizContaminacion;
