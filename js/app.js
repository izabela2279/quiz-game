/*-------------------------------- Constants --------------------------------*/
import {quizQuestions} from "../data/questions.js";

/*---------------------------- Variables (state) ----------------------------*/
let answer, response, currentQuestion, question
let timeLeft = 30
let clickCount = 0
let score = 0

/*------------------------ Cached Element References ------------------------*/
const countdownEl = document.getElementById("countdown")
const category1Btn = document.getElementById("c1")
const category2Btn = document.getElementById("c2")
const category3Btn = document.getElementById("c3")
const category4Btn = document.getElementById("c4")
const nextBtn = document.getElementById("next")
const resetBtn = document.getElementById("restart")
const questionEls = document.getElementById("question-display")
const trueBtn = document.getElementById("true")
const falseBtn = document.getElementById("false")
const displayEl = document.getElementById("message-display")
const scoreEl = document.getElementById("score")
const soundBeans = new Audio("../audio/beans.wav")
const soundBrew = new Audio("../audio/machine.wav")
const soundCoffee = new Audio("../audio/coffee.wav")
const soundIce = new Audio("../audio/ice.mp3")



/*----------------------------- Event Listeners -----------------------------*/
category1Btn.addEventListener("click", renderFirstGame)
category2Btn.addEventListener("click", renderSecondGame)
category3Btn.addEventListener("click", renderThirdGame)
category4Btn.addEventListener("click", renderFourthGame)


// playBtn.addEventListener("click", playGameOne)

nextBtn.addEventListener("click", nextQuestion)

nextBtn.addEventListener("click", function(){
  clickCount +=1
  if(clickCount >= 3)
  nextBtn.disabled = true;
})

resetBtn.addEventListener("click", function(){
  init()
})

trueBtn.addEventListener("click", handleResponse)


falseBtn.addEventListener("click", handleResponse)


/*-------------------------------- Functions --------------------------------*/
function startTimer(){
  let timer = setInterval(function(){
    countdownEl.textContent = timeLeft + ` seconds remaining!`
    timeLeft -= 1
    if (timeLeft === -1) {
      countdownEl.textContent = `Time's Up`
      clearInterval(timer)
    }
  }, 1000)
}

function init(){
  location.reload()
}

function renderFirstGame(){
  soundBeans.play()
  startTimer()
  category2Btn.disabled = "true"
  category3Btn.disabled = "true"
  category4Btn.disabled = "true"
  displayEl.textContent = "You have 30 seconds to answer all questions in given category"
  currentQuestion = quizQuestions
  question = 0
  questionEls.textContent = currentQuestion[question].question;
}
function renderSecondGame(){
  soundBrew.play()
  startTimer()
  category1Btn.disabled = "true"
  category3Btn.disabled = "true"
  category4Btn.disabled = "true"
  displayEl.textContent = "You have 30 seconds to answer all questions in given category"
  currentQuestion = quizQuestions
  question = 4
  questionEls.textContent = currentQuestion[question].question;
}
function renderThirdGame(){
  soundCoffee.play()
  startTimer()
  category1Btn.disabled = "true"
  category2Btn.disabled = "true"
  category4Btn.disabled = "true"
  displayEl.textContent = "You have 30 seconds to answer all questions in given category"
  currentQuestion = quizQuestions
  question = 8
  questionEls.textContent = currentQuestion[question].question;
}
function renderFourthGame(){
  soundIce.play()
  startTimer()
  category1Btn.disabled = "true"
  category2Btn.disabled = "true"
  category3Btn.disabled = "true"
  displayEl.textContent = "You have 30 seconds to answer all questions in given category"
  currentQuestion = quizQuestions
  question = 12
  questionEls.textContent = currentQuestion[question].question;
}

function nextQuestion(){
  displayEl.textContent = "☕ ☕ ☕ ☕ ☕ ☕ ☕ ☕ ☕ ☕ ☕"
  question += 1 <= 4
  questionEls.textContent = currentQuestion[question].question; 
}

function handleResponse(evt){
  response = evt.target.id; 
  answer = currentQuestion[question].answer;
  if (answer === response){
    displayEl.textContent = "Correct, great job!"
    console.log("Correct");
    score ++;
    console.log(score);
  } else {
    displayEl.textContent = "Incorrect, nice try!"
    console.log("Incorrect Answer");
  }
  trackScore()
}


function trackScore(){
  scoreEl.textContent = `You got ${score} out of 4 correct`
}




