
const totalTime = 25*60;
let timeLeft = totalTime;
let timerId = null;

const timerDisplay = document.querySelector(".timerField");


function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}
function updateDisplay() {
  timerDisplay.textContent = formatTime(timeLeft);
}

function startTimer() {
  if (timerId) return; 
  timerId = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateDisplay();
    } else {
      clearInterval(timerId);
      timerId = null;
      updateDisplay();
      alarmSound.play();
      alert("Time's up!");
    }
  }, 1000);
}

function pauseTimer() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
}

function resetTimer() {
  pauseTimer();
  timeLeft = totalTime;
  updateDisplay();
}
const startBtn = document.querySelector(".startButton");
const pauseBtn = document.querySelector(".pauseButton");
const resetBtn = document.querySelector(".resetButton");

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

updateDisplay();
