/*-------------------------------- Constants --------------------------------*/
import {quizOneQuestions, quizTwoQuestions, quizThreeQuestions, quizFourQuestions} from "../data/questions.js";

/*---------------------------- Variables (state) ----------------------------*/
let questionOne, questionTwo, questionThree, questionFour, answer, score, response, answerOne, currentQuestions

let countdownEl = document.getElementById("countdown")
let time = 15

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
// category1Btn.addEventListener("click", playGameOne)
// category2Btn.addEventListener("click", playGameTwo)
// category3Btn.addEventListener("click", playGameThree)
// category4Btn.addEventListener("click", playGameFour)
category1Btn.addEventListener("click", currentCategory)
category2Btn.addEventListener("click", currentCategory)
category3Btn.addEventListener("click", currentCategory)
category4Btn.addEventListener("click", currentCategory)


playBtn.addEventListener("click", playGameOne)

nextBtn.addEventListener("click", nextOneQuestion)
nextBtn.addEventListener("click", nextTwoQuestion)
nextBtn.addEventListener("click", nextThreeQuestion)
nextBtn.addEventListener("click", nextFourQuestion)

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

// function currentQuestion(evt){
//   currentQuestion = evt.target.id; 
//   console.log(currentQuestion);
//   currentQuestions = quizOneQuestions
//   questionOne = 0
//   questionEls.textContent = currentQuestions[questionOne].question; 
// }

// function nextQuestion(){
//   questionOne += 1
//   questionEls.textContent = currentQuestions[questionOne].question; 
// }


function playGameOne(){
  currentQuestions = quizOneQuestions
  questionOne = 0
  questionEls.textContent = currentQuestions[questionOne].question; 

  // answerOne = 0
  // answerOne = quizOneQuestions[questionOne].answer;
  // console.log(answerOne);
}

function nextOneQuestion(){
  questionOne += 1
  questionEls.textContent = currentQuestions[questionOne].question; 

  // answerOne += 1
  // answerOne = quizOneQuestions[questionOne].answer;
  // console.log(answerOne);
}

function playGameTwo(){
  currentQuestions = quizTwoQuestions
  questionTwo = 0
  questionEls.textContent = currentQuestions[questionTwo].
  question; 
  }
function nextTwoQuestion(){
  questionTwo += 1
  questionEls.textContent = currentQuestions[questionTwo].question; 
}

function playGameThree(){
  currentQuestions = quizThreeQuestions
  questionThree = 0
  questionEls.textContent = currentQuestions[questionThree].question; 
  }
function nextThreeQuestion(){
  questionThree += 1
  questionEls.textContent = currentQuestions[questionThree].question; 
}

function playGameFour(){
  currentQuestions = quizFourQuestions
  questionFour = 0
  questionEls.textContent = currentQuestions[questionFour].question; 
  }
function nextFourQuestion(){
  questionFour += 1
  questionEls.textContent = currentQuestions[questionFour].question; 
}

let timer = setInterval(function(){
  countdownEl.textContent = time + ` seconds remaining!`
  time -+ 1
  if (time === -1){
    countdownEl.textContent = `Time's Up`
    clearInterval(timer)
  }
},1000)

// function responseTrue(){
//   answer = true
//   if (answer === quizQuestions.Answer){
//     return "Answer is correct"
//   } else {
//     return "Answer is incorrect"
//   }
// }

// function responseFalse(){
//   console.log("Response");
//   answer = false
//   console.log(answer);
//   if (answer === quizQuestions.Answer){
//     return "Answer is correct"
//   } else {
//     return "Answer is incorrect"
//   }
// }

function handleResponse(evt){
  response = evt.target.id; 
  console.log(response); 
  answer = currentQuestions[questionOne].answer;
  // answer = currentQuestions[questionTwo].answer;
  // answer = currentQuestions[questionThree].answer;
  // answer = currentQuestions[questionFour].answer;
  console.log(answer);
  if (answer === response){
    console.log("Correct Answer");
  } else {
    console.log("Incorrect Answer");
  }
}

// function handleResponse(evt){
//   response = evt.target.id; 
//   if (answer = quizOneQuestions[questionOne].answer){
//     if (answer === response){
//       console.log("Correct Answer");
//     } else {
//       console.log("Incorrect Answer");
//     }
//   }
//   else if (answer = quizTwoQuestions[questionTwo].answer){
//     if (answer === response){
//       console.log("Correct Answer");
//     } else {
//       console.log("Incorrect Answer");
//     }
//   }
//   else if (answer = quizThreeQuestions[questionThree].answer){
//     if (answer === response){
//       console.log("Correct Answer");
//     } else {
//       console.log("Incorrect Answer");
//     }
//   }
//   else if (answer = quizFourQuestions[questionFour].answer){
//     if (answer === response){
//       console.log("Correct Answer");
//     } else {
//       console.log("Incorrect Answer");
//     }
//   }
// }