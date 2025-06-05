
const questions = [
    {
      question: "What is the capital of India?",
      options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
      correct: "Delhi"
    },
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Trainer Marking Language",
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "None"
      ],
      correct: "Hyper Text Markup Language"
    },
    {
      question: "Which of these is a JavaScript framework?",
      options: ["Laravel", "Django", "React", "Flask"],
      correct: "React"
    },
    {
      question: "What does CSS control?",
      options: ["Structure", "Behavior", "Style", "Database"],
      correct: "Style"
    }
  ];
  

  const quizContainer = document.getElementById("quiz");
  
  questions.forEach((q, index) => {
    const box = document.createElement("div");
    box.innerHTML = `
      <div class="question"> ${q.question}</div>
      <div class="options">
        ${q.options
          .map(
            option => `
          <label>
            <input type="radio" name="q${index}" value="${option}">
            <span>${option}</span>
          </label>
        `
          )
          .join("")}
      </div>
    `;
    quizContainer.appendChild(box);
  });
  
  // Submit and show results
  function submitQuiz() {
    let score = 0;
  
    questions.forEach((q, index) => {
      const selected = document.querySelector(`input[name="q${index}"]:checked`);
      if (selected && selected.value === q.correct) {
        score++;
      }
    });
  
    document.getElementById("result").textContent = `You scored ${score} out of ${questions.length}! 🎉`;
  
    const feedback = document.getElementById("feedback");
    if (score === questions.length) {
      feedback.textContent = "Excellent! You got everything correct.";
    } else if (score >= questions.length / 2) {
      feedback.textContent = "Good job! Try again to get a perfect score.";
    } else {
      feedback.textContent = "Don't worry! Study and try again.";
    }
  }
  