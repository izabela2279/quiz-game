/*-------------------------------- Constants --------------------------------*/
import {quizQuestions} from "../data/questions.js";

/*---------------------------- Variables (state) ----------------------------*/
let answer, score, response, currentQuestion, question
let timeLeft = 30
let clickCount = 0

/*------------------------ Cached Element References ------------------------*/
const countdownEl = document.getElementById("countdown")
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

nextBtn.addEventListener("click", function(){
  clickCount +=1
  if(clickCount >= 3)
  nextBtn.disabled = true;
})

resetBtn.addEventListener("click", function(){
  init()
})

//answerEls.addEventListener("click", playGameOne)


trueBtn.addEventListener("click", handleResponse)

falseBtn.addEventListener("click", handleResponse)


/*-------------------------------- Functions --------------------------------*/
function startTimer(){
  let timer = setInterval(function(){
    console.log(setInterval);
    countdownEl.textContent = timeLeft + ` seconds remaining!`
    timeLeft -= 1
    console.log(timeLeft)
    if (timeLeft === -1) {
      countdownEl.textContent = `Time's Up`
      clearInterval(timer)
    }
  }, 1000)
}

function init(){
  location.reload()
}


function currentCategory(evt){
  currentCategory = evt.target.id; 
  console.log(currentCategory);
}


function renderFirstGame(){
  startTimer()
  displayEl.textContent = "You have 30 seconds to answer the question"
  currentQuestion = quizQuestions
  question = 0
  questionEls.textContent = currentQuestion[question].question;
}
function renderSecondGame(){
  startTimer()
  displayEl.textContent = "You have 30 seconds to answer all questions in this category"
  currentQuestion = quizQuestions
  question = 4
  questionEls.textContent = currentQuestion[question].question;
}
function renderThirdGame(){
  startTimer()
  displayEl.textContent = "You have 30 seconds to answer all questions in this category"
  currentQuestion = quizQuestions
  question = 8
  questionEls.textContent = currentQuestion[question].question;
}
function renderFourthGame(){
  startTimer()
  displayEl.textContent = "You have 30 seconds to answer all questions in this category"
  currentQuestion = quizQuestions
  question = 12
  questionEls.textContent = currentQuestion[question].question;
}

function nextQuestion(){
  displayEl.textContent = "You have 30 seconds to answer all questions in this category"
  question += 1 <= 4
  questionEls.textContent = currentQuestion[question].question; 
}

function handleResponse(evt){
  response = evt.target.id; 
  console.log(response); 
  answer = currentQuestion[question].answer;
  console.log(answer);
  if (answer === response){
    displayEl.textContent = "Correct, great job!"
    console.log("Correct");
  } else {
    displayEl.textContent = "Incorrect, nice try!"
    console.log("Incorrect Answer");
  }
}

function quizResults(){

}


