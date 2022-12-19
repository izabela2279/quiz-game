/*-------------------------------- Constants --------------------------------*/
const quizQuestions = [
  {Question: "Are Arabica, Robusta, Liberica and Espresso all coffee beans?",
    Answers: ["True", "False"],
    Answer: "False"
  },
  {Question: "Is instant coffee made from coffee beans?",
    Answers: ["True", "False"],
    Answer: "True"
  },
  {Question: "Arabica beans are the most popular beans.",
    Answers: ["True", "False"],
    Answer: "True"
  },
  {Question: "Not all coffee beans contain caffeine.",
    Answers: ["True", "False"],
    Answer: "False"
  },
]
  

/*---------------------------- Variables (state) ----------------------------*/
let question, answer

// let category, score, response


/*------------------------ Cached Element References ------------------------*/
const playBtn = document.getElementById("play")
const nextBtn = document.getElementById("next")
const resetBtn = document.getElementById("restart")
const questionEls = document.getElementById("question-display")
const trueBtn = document.getElementById("true-btn")
const falseBtn = document.getElementById("false-btn")

/*----------------------------- Event Listeners -----------------------------*/

playBtn.addEventListener("click", playGame)

nextBtn.addEventListener("click", nextQuestion)

resetBtn.addEventListener("click", startOver)

trueBtn.addEventListener("click", function(){

})

falseBtn.addEventListener("click", function(){

})


/*-------------------------------- Functions --------------------------------*/

function render(){
  
}

function playGame(){
  questionEls.textContent = quizQuestions[0].Question;
}

function nextQuestion(){
  questionEls.textContent = quizQuestions[1].Question;
}

function response(){
  
}

function startOver(){
  questionEls.textContent
}
