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

const playBtn = document.getElementById("play")
const nextBtn = document.getElementById("next")
const resetBtn = document.getElementById("restart")
const questionEls = document.getElementById("question-display")
const trueBtn = document.getElementById("true")
const falseBtn = document.getElementById("false")

// const answerEls = document.getElementsByClassName("answer")


/*----------------------------- Event Listeners -----------------------------*/
category1Btn.addEventListener("click", renderGame)
category2Btn.addEventListener("click", currentCategory)
category3Btn.addEventListener("click", currentCategory)
category4Btn.addEventListener("click", currentCategory)


// playBtn.addEventListener("click", playGameOne)

nextBtn.addEventListener("click", nextQuestion)

resetBtn.addEventListener("click", function(){
  init()
})

//answerEls.addEventListener("click", playGameOne)

// trueBtn.addEventListener("click", function(){
//   response = true
//   if (response === quizOneQuestions[0].Answer)
//   response = true
//   console.log("Correct Answer!");
//   if (response !== quizOneQuestions[0].Answer)
//   response = false
//   console.log("Incorrect, nice try!");
// })

// falseBtn.addEventListener("click", function(){
//   response = false
//   if (response === quizOneQuestions[0].Answer)
//   response = true
//   console.log("Correct Answer!");
//   if (response !== quizOneQuestions[0].Answer)
//   response = false
//   console.log("Incorrect, nice try!");
// })


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


function renderGame(){
  currentQuestion = quizQuestions
  question = 0
  questionEls.textContent = currentQuestion[question].question;
}

function nextQuestion(){
  question += 1
  questionEls.textContent = currentQuestion[question].question; 
}

function handleResponse(evt){
  response = evt.target.id; 
  console.log(response); 
  answer = quizQuestions[currentQuestion].answer;
  console.log(answer);
  if (answer === response){
    console.log("Correct Answer");
  } else {
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
