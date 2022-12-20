/*-------------------------------- Constants --------------------------------*/
const quizOneQuestions = [
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

const quizTwoQuestions = [
  {Question: "French Press",
    Answers: ["True", "False"],
    Answer: "False"
  },
  {Question: "All espresso machines grind beans",
    Answers: ["True", "False"],
    Answer: "False"
  },
  {Question: "Pour Over",
    Answers: ["True", "False"],
    Answer: "True"
  },
  {Question: "Instant",
    Answers: ["True", "False"],
    Answer: "False"
  },
]

const quizThreeQuestions = [
  {Question: "Espresso",
    Answers: ["True", "False"],
    Answer: "False"
  },
  {Question: "Flat White",
    Answers: ["True", "False"],
    Answer: "True"
  },
  {Question: "Cappucino",
    Answers: ["True", "False"],
    Answer: "True"
  },
  {Question: "Latte",
    Answers: ["True", "False"],
    Answer: "False"
  },
]

const quizFourQuestions = [
  {Question: "Iced Coffee",
    Answers: ["True", "False"],
    Answer: "False"
  },
  {Question: "It's best to soak for 24 hours",
    Answers: ["True", "False"],
    Answer: "True"
  },
  {Question: "You use whole beans instead of ground",
    Answers: ["True", "False"],
    Answer: "False"
  },
  {Question: "Can be served with milk",
    Answers: ["True", "False"],
    Answer: "False"
  },
]
  

/*---------------------------- Variables (state) ----------------------------*/
let question, answer, score, response

/*------------------------ Cached Element References ------------------------*/
const category1Btn = document.getElementById("c1")
const category2Btn = document.getElementById("c2")
const category3Btn = document.getElementById("c3")
const category4Btn = document.getElementById("c4")

const playBtn = document.getElementById("play")
const nextBtn = document.getElementById("next")
const resetBtn = document.getElementById("restart")
const questionEls = document.getElementById("question-display")
const answerEls = document.getElementsByClassName("answer-display")
const trueBtn = document.getElementById("true-btn")
const falseBtn = document.getElementById("false-btn")


/*----------------------------- Event Listeners -----------------------------*/
category1Btn.addEventListener("click", playOneGame)
category2Btn.addEventListener("click", playTwoGame)
category3Btn.addEventListener("click", playThreeGame)
category4Btn.addEventListener("click", playFourGame)


playBtn.addEventListener("click", playGame)

nextBtn.addEventListener("click", nextQuestion)

resetBtn.addEventListener("click", function(){
  init()
})

// trueBtn.addEventListener("click", function(){
//   if (response === quizQuestions.Answer)
//   return true
// })

// falseBtn.addEventListener("click", function(){
//   if (response === quizQuestions.Answer)
//   return true
// })

// answerEls.addEventListener("click")

trueBtn.addEventListener("click", responseTrue)

falseBtn.addEventListener("click", responseFalse)


/*-------------------------------- Functions --------------------------------*/
function init(){
  questionEls.textContent = none;
  answerEls.textContent = "hide";
  render()
}
init()

function render(){
  playGame()
  nextQuestion()
}

function playOneGame(){
  question = 0
  questionEls.textContent = quizOneQuestions[question].Question; 
  // {
  //   answer = true
  //   if (answer === quizQuestions[0].Answer){
  //     return ("Correct Answer");
  //   } else {
  //     return ("Incorrect Answer");
  //   }
  // }
  }

function nextOneQuestion(){
  question += 1
  questionEls.textContent = quizOneQuestions[question].Question; 
  // quizQuestions.forEach(function(que){
  //   return questionEls.textContent = que.Question;
  //   console.log(que);
  // });
  // questionEls.textContent = quizQuestions[1].Question;

   // for (let i = 1; i < quizQuestions.length; i++){
  //   if (answer === Question[i].Answer[i]){
  //     return ("Correct Answer");
  //   } else {
  //     return ("Incorrect Answer");
  //   }
  // }
}

function playTwoGame(){
  question = 0
  questionEls.textContent = quizTwoQuestions[question].Question; 
  }
function nextTwoQuestion(){
  question += 1
  questionEls.textContent = quizTwoQuestions[question].Question; 
}

function playThreeGame(){
  question = 0
  questionEls.textContent = quizThreeQuestions[question].Question; 
  }
function nextThreeQuestion(){
  question += 1
  questionEls.textContent = quizThreeQuestions[question].Question; 
}

function playFourGame(){
  question = 0
  questionEls.textContent = quizFourQuestions[question].Question; 
  }
function nextFourQuestion(){
  question += 1
  questionEls.textContent = quizFourQuestions[question].Question; 
}

function responseTrue(){
  answer = true
  if (answer === quizQuestions.Answer){
    return "Answer is correct"
  } else {
    return "Answer is incorrect"
  }
}

function responseFalse(){
  console.log("Response");
  answer = false
  console.log(answer);
  if (answer === quizQuestions.Answer){
    return "Answer is correct"
  } else {
    return "Answer is incorrect"
  }
}
