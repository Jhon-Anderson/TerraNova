import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './QuizContaminacion.css';

const QuizContaminacion = () => {
  const filas = Array.from({ length: 5 }, (_, i) => i); 
  const navigate = useNavigate();
  const [contaminacionScore, setContaminacionScore] = useState(0);
  const [medioAmbienteScore, setMedioAmbienteScore] = useState(0);

  const handleBack = () => {
    navigate(-1);
  };

  const handleDrop = (event, target) => {
    event.preventDefault();
    const data = event.dataTransfer.getData('text');
    const draggedElement = document.getElementById(data);

    if (target === 'contaminacion') {
      setContaminacionScore((prev) => prev + 1);
    } else if (target === 'medioAmbiente') {
      setMedioAmbienteScore((prev) => prev + 1);
    }

    if (draggedElement) {
      draggedElement.style.visibility = 'hidden'; 
    }
  };

  const allowDrop = (event) => {
    event.preventDefault(); 
  };

  const handleDrag = (event) => {
    event.dataTransfer.setData('text', event.target.id); 
  };

  return (
    <div className="quiz-container">
      <button className="back-button" onClick={handleBack}>
        Back
      </button>
      <div className="scores">
        <div>Contaminación: {contaminacionScore}</div>
        <div>Medio Ambiente: {medioAmbienteScore}</div>
      </div>
      <div className="content">
        <div
          className="label-container drop-zone"
          onDrop={(event) => handleDrop(event, 'contaminacion')}
          onDragOver={allowDrop}
        >
          <div className="label">Contaminación</div>
        </div>
        <table className="tabla">
          <tbody>
            {filas.map((fila) => (
              <tr key={fila}>
                {filas.map((columna) => (
                  <td key={columna} className="cuadro">
                    <div
                      id={`figura-${fila}-${columna}`}
                      className="figura"
                      draggable="true"
                      onDragStart={handleDrag}
                    >
                      🌍
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div
          className="label-container drop-zone"
          onDrop={(event) => handleDrop(event, 'medioAmbiente')}
          onDragOver={allowDrop}
        >
          <div className="label">Medio Ambiente</div>
        </div>
      </div>
    </div>
  );
};

export default QuizContaminacion;