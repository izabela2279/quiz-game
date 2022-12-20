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
  {Question: "A French Press requires ground beans",
    Answers: ["True", "False"],
    Answer: "True"
  },
  {Question: "All espresso machines grind beans",
    Answers: ["True", "False"],
    Answer: "False"
  },
  {Question: "Pour Over uses a filter",
    Answers: ["True", "False"],
    Answer: "True"
  },
  {Question: "Cold Brew is not a brewing method",
    Answers: ["True", "False"],
    Answer: "False"
  },
]

const quizThreeQuestions = [
  {Question: "Espresso can be served hot or cold",
    Answers: ["True", "False"],
    Answer: "True"
  },
  {Question: "Flat White has microfoam milk",
    Answers: ["True", "False"],
    Answer: "True"
  },
  {Question: "Cappucino originated in the US",
    Answers: ["True", "False"],
    Answer: "False"
  },
  {Question: "A Latte has steamed milk",
    Answers: ["True", "False"],
    Answer: "True"
  },
]

const quizFourQuestions = [
  {Question: "Iced Coffee is made using espresso",
    Answers: ["True", "False"],
    Answer: "False"
  },
  {Question: "It's best to soak ground beans for 24 hours",
    Answers: ["True", "False"],
    Answer: "True"
  },
  {Question: "Require whole beans instead of ground beans",
    Answers: ["True", "False"],
    Answer: "False"
  },
  {Question: "Iced coffee can be served with milk",
    Answers: ["True", "False"],
    Answer: "True"
  },
]
  

/*---------------------------- Variables (state) ----------------------------*/
let questionOne, questionTwo, questionThree, questionFour, answer, score, response

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

trueBtn.addEventListener("click", function(){
  response = true
  if (response === quizOneQuestions[0].Answer)
  response = true
  console.log("Correct Answer!");
  if (response !== quizOneQuestions[0].Answer)
  response = false
  console.log("Incorrect, nice try!");
})

falseBtn.addEventListener("click", function(){
  response = false
  if (response === quizOneQuestions[0].Answer)
  response = true
  console.log("Correct Answer!");
  if (response !== quizOneQuestions[0].Answer)
  response = false
  console.log("Incorrect, nice try!");
})

// answerEls.addEventListener("click")

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
