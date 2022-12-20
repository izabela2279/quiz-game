/*-------------------------------- Constants --------------------------------*/
import {quizOneQuestions, quizTwoQuestions, quizThreeQuestions, quizFourQuestions} from "../data/questions.js";

/*---------------------------- Variables (state) ----------------------------*/
let questionOne, questionTwo, questionThree, questionFour, answer, score, response

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
category1Btn.addEventListener("click", playGameOne)
category2Btn.addEventListener("click", playGameTwo)
category3Btn.addEventListener("click", playGameThree)
category4Btn.addEventListener("click", playGameFour)


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

function render(){
  playGameOne()
  playGameTwo()
  playGameThree()
  playGameFour()
  nextOneQuestion()
  nextTwoQuestion()
  nextThreeQuestion()
  nextFourQuestion()
}

function playGameOne(){
  questionOne = 0
  questionEls.textContent = quizOneQuestions[questionOne].question; 

  // answerOne = 0
  // answerOne = quizOneQuestions[answerOne].answer;
  // console.log(answerOne);
}

function nextOneQuestion(){
  questionOne += 1
  questionEls.textContent = quizOneQuestions[questionOne].question; 

  // answerOne += 1
  // answerOne = quizOneQuestions[answerOne].answer;
  // console.log(answerOne);
}

function playGameTwo(){
  questionTwo = 0
  questionEls.textContent = quizTwoQuestions[questionTwo].
  question; 
  }
function nextTwoQuestion(){
  questionTwo += 1
  questionEls.textContent = quizTwoQuestions[questionTwo].question; 
}

function playGameThree(){
  questionThree = 0
  questionEls.textContent = quizThreeQuestions[questionThree].question; 
  }
function nextThreeQuestion(){
  questionThree += 1
  questionEls.textContent = quizThreeQuestions[questionThree].question; 
}

function playGameFour(){
  questionFour = 0
  questionEls.textContent = quizFourQuestions[questionFour].question; 
  }
function nextFourQuestion(){
  questionFour += 1
  questionEls.textContent = quizFourQuestions[questionFour].question; 
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
  answer = quizOneQuestions[questionOne].answer;
  // answer = quizTwoQuestions[questionTwo].answer;
  // answer = quizThreeQuestions[questionThree].answer;
  // answer = quizFourQuestions[questionFour].answer;
  console.log(answer);
  if (answer === response){
    console.log("Correct Answer");
  } else {
    console.log("Incorrect Answer");
  }
}

// function handleResponse(evt){
//   response = evt.target.id; 
//   if (answer = quizOneQuestions[0].answer){
//     if (answer === response){
//       console.log("Correct Answer");
//     } else {
//       console.log("Incorrect Answer");
//     }
//   }
//   if (answer = quizOneQuestions[1].answer){
//     if (answer === response){
//       console.log("Correct Answer");
//     } else {
//       console.log("Incorrect Answer");
//     }
//   }
//   if (answer = quizOneQuestions[2].answer){
//     if (answer === response){
//       console.log("Correct Answer");
//     } else {
//       console.log("Incorrect Answer");
//     }
//   }
//   if (answer = quizOneQuestions[3].answer){
//     if (answer === response){
//       console.log("Correct Answer");
//     } else {
//       console.log("Incorrect Answer");
//     }
//   }
// }