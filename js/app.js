/*-------------------------------- Constants --------------------------------*/
const quizQuestions = [
  {Question: "Are all thse coffee beans?",
    Answers: ["Arabica", "Robusta", "Liberica", "Espresso"],
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
let question, answer, response

// let category, score


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

/*-------------------------------- Functions --------------------------------*/

function render(){
  
}

function playGame(){
  questionEls.textContent = quizQuestions[0].Question;
}

function nextQuestion(){
  questionEls.textContent = quizQuestions[1].Question;
}

function startOver(){
  questionEls.textContent
}
