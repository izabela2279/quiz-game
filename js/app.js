/*-------------------------------- Constants --------------------------------*/
import {quizOneQuestions, quizTwoQuestions, quizThreeQuestions,
  quizFourQuestions} from "../data/questions.js";
console.log(quizOneQuestions);

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
const answerEls = document.getElementsByClassName("answer")
// const trueBtn = document.getElementById("true-btn")
// const falseBtn = document.getElementById("false-btn")


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

answerEls.addEventListener("click", playGameOne)

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


trueBtn.addEventListener("click", responseTrue)

falseBtn.addEventListener("click", responseFalse)


/*-------------------------------- Functions --------------------------------*/
function init(){
  questionEls.textContent = "Chose a category";
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
  questionEls.textContent = quizOneQuestions[questionOne].Question; 
  // answer = 0
  // answerEls.textContent = quizOneQuestions[answer].Answer;
  // console.log(answer);
  // }
}

function nextOneQuestion(){
  questionOne += 1
  questionEls.textContent = quizOneQuestions[questionOne].Question; 

}

function playGameTwo(){
  questionTwo = 0
  questionEls.textContent = quizTwoQuestions[questionTwo].
  Question; 
  }
function nextTwoQuestion(){
  questionTwo += 1
  questionEls.textContent = quizTwoQuestions[questionTwo].Question; 
}

function playGameThree(){
  questionThree = 0
  questionEls.textContent = quizThreeQuestions[questionThree].Question; 
  }
function nextThreeQuestion(){
  questionThree += 1
  questionEls.textContent = quizThreeQuestions[questionThree].Question; 
}

function playGameFour(){
  questionFour = 0
  questionEls.textContent = quizFourQuestions[questionFour].Question; 
  }
function nextFourQuestion(){
  questionFour += 1
  questionEls.textContent = quizFourQuestions[questionFour].Question; 
}

let timer = setInterval(function(){
  countdownEl.textContent = time + ` seconds remaing!`
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
