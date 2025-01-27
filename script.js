const correctAnswers = {
    q1: "b",
    q2: "a",
    q3: "d",
    q4: "b",
    q5: "d",
  };

  // Referencia al formulario
  const quizForm = document.getElementById("quizForm");
  // Agregar evento de envío
  quizForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita el envío predeterminado del formulario
  
    let score = 0; // Contador de respuestas correctas
    let totalQuestions = Object.keys(correctAnswers).length; // Total de preguntas
    let answeredQuestions = 0; // Contador de preguntas respondidas
  
    // Validar respuestas
    for (let question in correctAnswers) {
      const userAnswer = quizForm[question].value; // Obtener la respuesta seleccionada
  
      if (userAnswer) {
        answeredQuestions++; // Incrementar si hay respuesta
        if (userAnswer === correctAnswers[question]) {
          score++; // Incrementar el puntaje si es correcta
        }
      } else {
        // Si falta una respuesta, mostrar alerta y salir del bucle
        alert(`Por favor, selecciona una respuesta para la pregunta ${question.slice(1)}.`);
        return;
      }
    }
  
    // Verificar si todas las preguntas tienen respuesta
    if (answeredQuestions === totalQuestions) {
      // Mostrar resultados
      alert(`Tu puntuación es ${score} de ${totalQuestions}`);
    }
  });