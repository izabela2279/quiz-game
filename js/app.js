/*-------------------------------- Constants --------------------------------*/
const quizQuestions = [
  {Question: "Which is not a coffee bean?",
    Answers: ["Arabica", "Robusta", "Liberica", "Espresso"],
    Answer: "Espresso"
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
let question, answer, response, score

// let category


/*------------------------ Cached Element References ------------------------*/
const playBtn = document.getElementById("play")
const nextBtn = document.getElementById("next")
const resetBtn = document.getElementById("restart")
const questionEls = document.getElementById("question")


/*----------------------------- Event Listeners -----------------------------*/

playBtn.addEventListener("click", playGame)

nextBtn.addEventListener("click", nextQuestion)

resetBtn.addEventListener("click", init)

/*-------------------------------- Functions --------------------------------*/

function init(){
  return quizQuestions(0);
}
console.log(init);

function playGame(){
  question = questionEls[0];
  // console.log("start");
  // let playGame = quizQuestions[0];
}

function nextQuestion(){
  // console.log("next");
  questionEls[1];

}

