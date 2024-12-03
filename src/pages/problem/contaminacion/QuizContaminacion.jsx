import React, { useState } from 'react';
import "./QuizContaminacion.css";

const QuizContaminacion = () => {
  const questions = [
    {
      question: "¿Qué es la contaminación del agua?",
      options: [
        "La presencia de sustancias nocivas en el agua que afectan la vida acuática.",
        "El aumento de la temperatura del agua debido al cambio climático.",
        "El proceso de purificación del agua en plantas de tratamiento.",
      ],
      correct: 0, // La opción correcta es la primera
    },
    {
      question: "¿Cuál de los siguientes es un contaminante común del agua?",
      options: [
        "Plásticos",
        "Agua limpia",
        "Luz solar",
      ],
      correct: 0, // La opción correcta es la primera
    },
    {
      question: "¿Qué puede causar la contaminación del agua?",
      options: [
        "Vertido de productos químicos industriales",
        "Lluvias",
        "Reciclaje de plásticos",
      ],
      correct: 0, // La opción correcta es la primera
    },
    {
      question: "¿Qué impacto tiene la contaminación del agua en los ecosistemas acuáticos?",
      options: [
        "Muerte de especies acuáticas debido a la toxicidad del agua.",
        "Aumento de la biodiversidad en los océanos.",
        "Reducción de las lluvias en la región.",
      ],
      correct: 0, // La opción correcta es la primera
    },
    {
      question: "¿Cuál de los siguientes elementos puede contaminar el agua potable?",
      options: [
        "Bacterias y virus",
        "Oxígeno",
        "Hierro",
      ],
      correct: 0, // La opción correcta es la primera
    },
    {
      question: "¿Qué porcentaje del agua en la Tierra es potable?",
      options: [
        "Menos del 1%",
        "El 30%",
        "El 50%",
      ],
      correct: 0, // La opción correcta es la primera
    },
    {
      question: "¿Cómo afecta el vertido de petróleo en el mar?",
      options: [
        "Causa daño a la vida marina y afecta el ecosistema marino.",
        "Mejora la calidad del agua.",
        "Reduce la temperatura del agua.",
      ],
      correct: 0, // La opción correcta es la primera
    },
    {
      question: "¿Qué es el eutrofización del agua?",
      options: [
        "El crecimiento excesivo de algas debido a la contaminación por nutrientes.",
        "La descomposición de materiales orgánicos en el agua.",
        "El aumento de la salinidad del agua.",
      ],
      correct: 0, // La opción correcta es la primera
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(Array(questions.length).fill(0)); // Intentos por pregunta
  const [correctAnswers, setCorrectAnswers] = useState([]); // Guardar respuestas correctas
  const [quizEnded, setQuizEnded] = useState(false); // Flag para saber si el quiz terminó

  const handleAnswerClick = (index) => {
    if (quizEnded) return; // No hacer nada si el quiz ya terminó

    const currentAttempts = attempts[currentQuestionIndex];

    if (index === questions[currentQuestionIndex].correct) {
      setScore(score + 1);
      setMessage("Respuesta correcta");
      setCorrectAnswers([...correctAnswers, questions[currentQuestionIndex].question]);
      setAttempts((prevAttempts) =>
        prevAttempts.map((attempt, i) => (i === currentQuestionIndex ? 0 : attempt)) // Resetear intentos de la pregunta correcta
      );
      setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setMessage("");
        } else {
          setQuizEnded(true); // Termina el quiz
        }
      }, 1000);
    } else {
      const updatedAttempts = [...attempts];
      updatedAttempts[currentQuestionIndex] = currentAttempts + 1;
      setAttempts(updatedAttempts);

      if (updatedAttempts[currentQuestionIndex] >= 2) {
        setMessage(`¡Has agotado los intentos! La respuesta correcta era: ${questions[currentQuestionIndex].options[questions[currentQuestionIndex].correct]}`);
        setQuizEnded(true); // Termina el quiz
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
