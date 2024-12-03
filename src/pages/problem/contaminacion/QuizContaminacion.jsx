import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import "./QuizContaminacion.css";

const QuizContaminacion = () => {
  const navigate = useNavigate(); // Crear la instancia de useNavigate

  const questions = [
    {
      question: "¿Qué es la contaminación del agua?",
      info: "La contaminación del agua ocurre cuando sustancias nocivas, como productos químicos y desechos, ingresan en el agua, afectando su calidad y los ecosistemas acuáticos.",
      options: [
        "La presencia de sustancias nocivas en el agua que afectan la vida acuática.",
        "El aumento de la temperatura del agua debido al cambio climático.",
        "El proceso de purificación del agua en plantas de tratamiento.",
      ],
      correct: 0,
    },
    {
      question: "¿Cuál de los siguientes es un contaminante común del agua?",
      info: "Los plásticos, debido a su durabilidad, se acumulan en ríos, lagos y océanos, afectando la vida marina y la calidad del agua.",
      options: [
        "Plásticos",
        "Agua limpia",
        "Luz solar",
      ],
      correct: 0,
    },
    {
      question: "¿Qué puede causar la contaminación del agua?",
      info: "Las industrias, la agricultura y las actividades humanas pueden verter productos químicos y desechos que alteran la calidad del agua.",
      options: [
        "Vertido de productos químicos industriales",
        "Lluvias",
        "Reciclaje de plásticos",
      ],
      correct: 0,
    },
    {
      question: "¿Qué impacto tiene la contaminación del agua en los ecosistemas acuáticos?",
      info: "El agua contaminada puede ser tóxica para muchas especies acuáticas, afectando su salud y reproducción.",
      options: [
        "Muerte de especies acuáticas debido a la toxicidad del agua.",
        "Aumento de la biodiversidad en los océanos.",
        "Reducción de las lluvias en la región.",
      ],
      correct: 0,
    },
    {
      question: "¿Cuál de los siguientes elementos puede contaminar el agua potable?",
      info: "Bacterias y virus en el agua potable pueden causar enfermedades graves si no se tratan adecuadamente.",
      options: [
        "Bacterias y virus",
        "Oxígeno",
        "Hierro",
      ],
      correct: 0,
    },
    {
      question: "¿Qué porcentaje del agua en la Tierra es potable?",
      info: "La mayoría del agua en la Tierra es salada o inaccesible para el consumo humano. Solo una pequeña fracción es agua dulce y potable.",
      options: [
        "Menos del 1%",
        "El 30%",
        "El 50%",
      ],
      correct: 0,
    },
    {
      question: "¿Cómo afecta el vertido de petróleo en el mar?",
      info: "El petróleo en el mar crea una capa que impide la oxigenación del agua y afecta a los organismos marinos, causando daños ambientales graves.",
      options: [
        "Causa daño a la vida marina y afecta el ecosistema marino.",
        "Mejora la calidad del agua.",
        "Reduce la temperatura del agua.",
      ],
      correct: 0,
    },
    {
      question: "¿Qué es el eutrofización del agua?",
      info: "Es el proceso por el cual el agua se enriquece en nutrientes como nitrógeno y fósforo, favoreciendo el crecimiento desmedido de algas que afectan la vida acuática.",
      options: [
        "El crecimiento excesivo de algas debido a la contaminación por nutrientes.",
        "La descomposición de materiales orgánicos en el agua.",
        "El aumento de la salinidad del agua.",
      ],
      correct: 0,
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(Array(questions.length).fill(0));
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [quizEnded, setQuizEnded] = useState(false);

  const handleAnswerClick = (index) => {
    if (quizEnded) return;

    const currentAttempts = attempts[currentQuestionIndex];

    if (index === questions[currentQuestionIndex].correct) {
      setScore(score + 1);
      setMessage("Respuesta correcta");
      setCorrectAnswers([...correctAnswers, questions[currentQuestionIndex].question]);
      setAttempts((prevAttempts) =>
        prevAttempts.map((attempt, i) => (i === currentQuestionIndex ? 0 : attempt))
      );
      setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setMessage("");
        } else {
          setQuizEnded(true);
        }
      }, 1000);
    } else {
      const updatedAttempts = [...attempts];
      updatedAttempts[currentQuestionIndex] = currentAttempts + 1;
      setAttempts(updatedAttempts);

      if (updatedAttempts[currentQuestionIndex] >= 2) {
        setMessage(`¡Has agotado los intentos! La respuesta correcta era: ${questions[currentQuestionIndex].options[questions[currentQuestionIndex].correct]}`);
        setQuizEnded(true);
      } else {
        setMessage("Respuesta incorrecta. Intenta de nuevo.");
      }
    }
  };

  const showResults = () => {
    return (
      <div>
        <h3>¡Gracias por completar el quiz!</h3>
        <p>Puntaje final: {score} de {questions.length}</p>
        <h4>Preguntas acertadas:</h4>
        <ul>
          {correctAnswers.map((answer, index) => (
            <li key={index}>{answer}</li>
          ))}
        </ul>
        <button onClick={() => window.location.reload()} className="quiz-restart">
          Volver a intentar
        </button>
        <button
          onClick={() => navigate("/gamecontaminacion")} // Navegar a GameContaminacion
          className="quiz-back"
        >
          Atrás
        </button>
      </div>
    );
  };

  return (
    <div className="quiz-container">
      <h2>Quiz sobre la Contaminación del Agua</h2>
      {message && <p>{message}</p>}
      {!quizEnded && currentQuestionIndex < questions.length ? (
        <div>
          <h3>{questions[currentQuestionIndex].question}</h3>
          <p className="quiz-info">{questions[currentQuestionIndex].info}</p> {/* Texto informativo */}
          <div>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(index)}
                className="quiz-option"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        showResults()
      )}
      <div className="score">
        <p>Puntaje actual: {score}</p>
      </div>
    </div>
  );
};

export default QuizContaminacion;
