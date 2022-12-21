/*-------------------------------- Constants --------------------------------*/
import {quizQuestions} from "../data/questions.js";

/*---------------------------- Variables (state) ----------------------------*/
let answer, score, response, currentQuestion, question, nextQ

let countdownEl = document.getElementById("countdown")
let timeLeft = 15

/*------------------------ Cached Element References ------------------------*/
const category1Btn = document.getElementById("c1")
const category2Btn = document.getElementById("c2")
const category3Btn = document.getElementById("c3")
const category4Btn = document.getElementById("c4")

// const playBtn = document.getElementById("play")
const nextBtn = document.getElementById("next")
const resetBtn = document.getElementById("restart")
const questionEls = document.getElementById("question-display")
const trueBtn = document.getElementById("true")
const falseBtn = document.getElementById("false")
const displayEl = document.getElementById("message-display")

// const answerEls = document.getElementsByClassName("answer")


/*----------------------------- Event Listeners -----------------------------*/
category1Btn.addEventListener("click", renderFirstGame)
category2Btn.addEventListener("click", renderSecondGame)
category3Btn.addEventListener("click", renderThirdGame)
category4Btn.addEventListener("click", renderFourthGame)


// playBtn.addEventListener("click", playGameOne)

nextBtn.addEventListener("click", nextQuestion)

resetBtn.addEventListener("click", function(){
  init()
})

//answerEls.addEventListener("click", playGameOne)


trueBtn.addEventListener("click", handleResponse)

falseBtn.addEventListener("click", handleResponse)


/*-------------------------------- Functions --------------------------------*/
function init(){
  questionEls.textContent = "Choose a category";
}
init()

function currentCategory(evt){
  currentCategory = evt.target.id; 
  console.log(currentCategory);
}


function renderFirstGame(){
  currentQuestion = quizQuestions
  question = 0
  questionEls.textContent = currentQuestion[question].question;
}
function renderSecondGame(){
  currentQuestion = quizQuestions
  question = 4
  questionEls.textContent = currentQuestion[question].question;
}
function renderThirdGame(){
  currentQuestion = quizQuestions
  question = 8
  questionEls.textContent = currentQuestion[question].question;
}
function renderFourthGame(){
  currentQuestion = quizQuestions
  question = 12
  questionEls.textContent = currentQuestion[question].question;
}

function nextQuestion(){
  question += 1
  questionEls.textContent = currentQuestion[question].question; 
}

function handleResponse(evt){
  response = evt.target.id; 
  console.log(response); 
  answer = currentQuestion[question].answer;
  console.log(answer);
  if (answer === response){
    displayEl.textContent = "Correct Answer"
    console.log("Correct, great job!");
  } else {
    displayEl.textContent = "Incorrect, nice try!"
    console.log("Incorrect Answer");
  }
}

let timer = setInterval(function(){
  countdownEl.textContent = timeLeft + ` seconds remaining!`
  timeLeft -= 1
  console.log(timeLeft)
  if (timeLeft === -1) {
    countdownEl.textContent = `Time's Up`
    clearInterval(timer)
  }
}, 1000)
