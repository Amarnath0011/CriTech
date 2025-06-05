
const questions = [
    {
      question: "Which is the oldest programming Language?",
      options: ["C++", "C", "java", "C#"],
      correct: "C"
    },
    {
      question: "Who won IPL 2025?",
      options: [
        "Chennai Super King",
        "PUNJAB KINGS",
        "ROYAL CHALLANGERS BANGALORE",
        "None"
      ],
      correct: "ROYAL CHALLANGERS BANGALORE"
    },
    {
      question: "Who was the Orange Cap holder?",
      options: ["Sai Sudarshan", "Virat Kohli", "Thala", "Rohit Sharma"],
      correct: "Sai Sudarshan"
    },
    {
      question: "Which the best Franchise in India Primier league?",
      options: ["RCB❤️", "CSK💩", "KKR🕌", "MI🧅"],
      correct: "RCB"
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
  