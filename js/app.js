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
const answerEls = document.getElementsByClassName("answer-display")
const trueBtn = document.getElementById("true-btn")
const falseBtn = document.getElementById("false-btn")


/*----------------------------- Event Listeners -----------------------------*/

playBtn.addEventListener("click", playGame)

nextBtn.addEventListener("click", nextQuestion)

resetBtn.addEventListener("click", startOver)

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
  display = "none";
  render()
}
init()

function render(){
  playGame()
  nextQuestion()
}

function playGame(){
  questionEls.textContent = quizQuestions[0].Question; 
  answerEls.textContent = quizQuestions[0].Answers[1]; 
  // {
  //   answer = true
  //   if (answer === quizQuestions[0].Answer){
  //     return ("Correct Answer");
  //   } else {
  //     return ("Incorrect Answer");
  //   }
  // }
  }

function nextQuestion(){
  // question = []
  quizQuestions.forEach(function(que){
    questionEls.textContent = que;
    console.log(que[0]);
    // questionEls.textContent = que, idx
  });
  // questionEls.textContent = quizQuestions[1].Question;

   // for (let i = 1; i < quizQuestions.length; i++){
  //   if (answer === Question[i].Answer[i]){
  //     return ("Correct Answer");
  //   } else {
  //     return ("Incorrect Answer");
  //   }
  // }
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

function startOver(){
  playGame();
}