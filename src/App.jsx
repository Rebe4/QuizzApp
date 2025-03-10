import { useState } from 'react'
import './App.css'

const questions = [
  {
    question: "¿Cuál de estos hábitos no es saludable?",
    options: ["Dormir bien",
      "Fumar",
      "Alimentación sana"
    ],
    answer: "Fumar",
  },
  {
    question: "¿Cuáles son las 5R de reciclaje?",
    options: [
      "Reciclar, reducir, reutilizar, reconvertir y reparar",
      "Reciclar, reutilizar, rechazar, reducir y reparar",
      "Reutilizar, reparar, reestructurar, reconvertir y reciclar",
    ],
    answer: "Reciclar, reutilizar, rechazar, reducir y reparar",
  },
  {
    question: "¿Cuál de estas definiciones es correcta?",
    options: [
      "Contaminación: es la introducción de sustancias nocivas o elementos físicos en un medio ambiente, lo que provoca que este sea inseguro o no apto para su uso",
      "Contaminación: es la introducción de un contaminante en un ambiente natural que causa estabilidad, orden, daño o malestar en un ecosistema",
      "Contaminación: es la introducción de un agente no contaminante que puede ser líquido, sólido o gaseoso en un medio natural",
    ],
    answer: "Contaminación: es la introducción de sustancias nocivas o elementos físicos en un medio ambiente, lo que provoca que este sea inseguro o no apto para su uso",
  },
  {
    question: "¿Qué significan las siglas RCP?",
    options: [
      "Respiración cardiovascular perfecta",
      "Rescate corporal personalizado",
      "Reanimación cardiopulmonar",
    ],
    answer: "Reanimación cardiopulmonar",
  },
  {
    question: "¿Qué significa la conducta PAS?",
    options: [
      "Proteger, avisar, socorrer",
      "Proteger, asistir, salvar",
      "Proteger, avisar, servir",
    ],
    answer: "Proteger, avisar, socorrer",
  },
  {
    question: "¿Sabías cuántos árboles se talan en el mundo al año para fabricar papel?",
    options: [
      "4.500 millones",
      "3.800 millones",
      "4.000 millones",
    ],
    answer: "4.000 millones",
  },
  {
    question: "¿Qué significa 'kilómetro cero' en alimentación?",
    options: [
      "Alimentos importados",
      "Alimentos producidos localmente para reducir transporte",
      "Alimentos procesados",
    ],
    answer: "Alimentos producidos localmente para reducir transporte",
  },
  {
    question: "¿En qué año se proclamó la Declaración Universal de Derechos Humanos?",
    options: [
      "1948",
      "1951",
      "1955",
    ],
    answer: "1948",
  },
  {
    question: "¿Qué significa el término 'inclusión' en un entorno social?",
    options: [
      "Adaptar el entorno para que todas las personas se sientan valoradas y respetadas",
      "Ignorar las diferencias individuales para tratarlas a todas igual",
      "Crear espacios exclusivos para ciertos grupos sociales",
    ],
    answer: "Adaptar el entorno para que todas las personas se sientan valoradas y respetadas",
  },
  {
    question: "¿Cuántos vasos de agua se recomienda beber al día para mantener una hidratación adecuada?",
    options: [
      "5",
      "9",
      "8",
    ],
    answer: "8",
  },
];

export default function Quiz() {
  const [showStartScreen, setShowStartScreen] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleStartQuiz = () => {
    setShowStartScreen(false);
  };

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setQuizFinished(true);
    }
  };

  return (
    <div className="quiz-container">
      {showStartScreen ? (
        <div className="start-screen">
          <h1>Bienvenido/a al Quiz</h1>
          <p>Demuestra tus conocimientos en cultura general y salud.</p>
          <button onClick={handleStartQuiz}>Comenzar</button>
        </div>
      ) : quizFinished ? (
        <div className="result">
          <h2>Tu puntuación: {score} / {questions.length}</h2>
          <button onClick={() => window.location.reload()}>Reiniciar</button>
        </div>
      ) : (
        <div className="question-box">
          <h2>{questions[currentQuestion].question}</h2>
          {questions[currentQuestion].options.map((option, index) => (
            <button key={index} className="option-button" onClick={() => handleAnswer(option)}>
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}


