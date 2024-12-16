import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './QuizContaminacion.css';

const QuizContaminacion = () => {
  const filas = Array.from({ length: 5 }, (_, i) => i);
  const navigate = useNavigate();
  const [contaminacionScore, setContaminacionScore] = useState(0);
  const [medioAmbienteScore, setMedioAmbienteScore] = useState(0);
  const [points, setPoints] = useState(0); // Nueva variable para los puntos
  const [stickers, setStickers] = useState([]);
  const [audio, setAudio] = useState(new Audio('/public/sonidos/quiz_sonido.mp3'));

  useEffect(() => {
    audio.play();
    const generateStickers = () => {
      const allStickers = [
        '🚗','🏍️','🛢️', '🚚', '🚜', '🏙️', '💨', '🗑️', 
        '🌱', '🐦', '🌊', '🌍', '🌼', '🌳', '🦢', '🦋', '🐨', '🐢',
      ];
      let shuffled = allStickers.sort(() => 0.5 - Math.random());
      return shuffled;
    };
    setStickers(generateStickers());
  }, [audio]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleDrop = (event, target) => {
    event.preventDefault();
    const data = event.dataTransfer.getData('text');
    const draggedElement = document.getElementById(data);

    if (draggedElement) {
      if (target === 'contaminacion' && draggedElement.classList.contains('contaminacion')) {
        setContaminacionScore((prev) => prev + 1);
        setPoints((prev) => prev + 2); 
        draggedElement.style.visibility = 'hidden';
      } else if (target === 'medioAmbiente' && draggedElement.classList.contains('medioAmbiente')) {
        setMedioAmbienteScore((prev) => prev + 1);
        setPoints((prev) => prev + 2); 
        draggedElement.style.visibility = 'hidden';
      }
    }
  };

  const allowDrop = (event) => {
    event.preventDefault();
  };

  const handleDrag = (event) => {
    event.dataTransfer.setData('text', event.target.id);
  };

  const playInstructionSound = () => {
    if (!audio.paused) {
      audio.pause();
      audio.currentTime = 0;
    }
    const newAudio = new Audio('/public/sonidos/texto_quiz.wav');
    setAudio(newAudio);
    newAudio.play();
  };

  const getStickerForCell = (fila, columna) => {
    return stickers[(fila * filas.length + columna) % stickers.length];
  };

  return (
    <div className="quiz-container">
      <video autoPlay loop muted className="background-video">
        <source src="/videos/quiz_background.mp4" type="video/mp4" />
        Tu navegador no soporta la reproducción de video.
      </video>

      <button className="back-button" onClick={handleBack}>
        Back
      </button>

      <div className="scores">
        <div>Contaminación: {contaminacionScore}</div>
        <div>Medio Ambiente: {medioAmbienteScore}</div>
        <div>Puntos Totales: {points}</div> 
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
                {filas.map((columna) => {
                  const sticker = getStickerForCell(fila, columna);
                  const isContaminacion = ['🚗', '🏍️', '🛢️', '🚚', '🚜', '🏙️', '💨', '🗑️'].includes(sticker);
                  const stickerClass = isContaminacion ? 'contaminacion' : 'medioAmbiente';
                  return (
                    <td key={columna} className="cuadro">
                      <div
                        id={`figura-${fila}-${columna}`}
                        className={`figura ${stickerClass}`}
                        draggable="true"
                        onDragStart={handleDrag}
                      >
                        {sticker}
                      </div>
                    </td>
                  );
                })}
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

      <button className="how-to-play-button" onClick={playInstructionSound}>
        ¿Cómo Jugar?
      </button>
    </div>
  );
};

export default QuizContaminacion;
