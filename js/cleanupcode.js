// const quizOneQuestions = [
//   {
//     category: "c1",
//     question: "Are Arabica, Robusta, Liberica and Espresso all coffee beans?",
//     answers: ["true", "false"],
//     answer: "false"
//   },
//   {
//     category: "c1",
//     question: "Is instant coffee made from coffee beans?",
//     answers: ["true", "false"],
//     answer: "true"
//   },
//   {
//     category: "c1",
//     question: "Arabica beans are the most popular beans.",
//     answers: ["true", "false"],
//     answer: "true"
//   },
//   {
//     category: "c1",
//     question: "Not all coffee beans contain caffeine.",
//     answers: ["true", "false"],
//     answer: "false"
//   },
// ]

// const quizTwoQuestions = [
//   {
//     category: "c2",
//     question: "A French Press requires ground beans",
//     answers: ["true", "false"],
//     answer: "true"
//   },
//   {
//     category: "c2",
//     question: "All espresso machines grind beans",
//     answers: ["true", "false"],
//     answer: "false"
//   },
//   {
//     category: "c2",
//     question: "Pour Over uses a filter",
//     answers: ["true", "false"],
//     answer: "true"
//   },
//   {
//     category: "c2",
//     question: "Cold Brew is not a brewing method",
//     answers: ["true", "false"],
//     answer: "false"
//   },
// ]

// const quizThreeQuestions = [
//   {
//     category: "c3",
//     question: "Espresso can be served hot or cold",
//     answers: ["true", "false"],
//     answer: "true"
//   },
//   {
//     category: "c3",
//     question: "Flat White has microfoam milk",
//     answers: ["true", "false"],
//     answer: "true"
//   },
//   {
//     category: "c3",
//     question: "Cappucino originated in the US",
//     answers: ["true", "false"],
//     answer: "false"
//   },
//   {
//     category: "c3",
//     question: "A Latte has steamed milk",
//     answers: ["true", "false"],
//     answer: "true"
//   },
// ]

// const quizFourQuestions = [
//   {
//     category: "c4",
//     question: "Iced Coffee is made using espresso",
//     answers: ["true", "false"],
//     answer: "false"
//   },
//   {
//     category: "c4",
//     question: "It's best to soak ground beans for 24 hours",
//     answers: ["true", "false"],
//     answer: "true"
//   },
//   {
//     category: "c4",
//     question: "Require whole beans instead of ground beans",
//     answers: ["true", "false"],
//     answer: "false"
//   },
//   {
//     category: "c4",
//     question: "Iced coffee can be served with milk",
//     answers: ["true", "false"],
//     answer: "true"
//   },
// ]

// export {
//   quizOneQuestions,
//   quizTwoQuestions,
//   quizThreeQuestions,
//   quizFourQuestions
// }

/*-------------------------------- Constants --------------------------------*/
import {quizOneQuestions, quizTwoQuestions, quizThreeQuestions, quizFourQuestions} from "../data/questions.js";

/*---------------------------- Variables (state) ----------------------------*/
let questionOne, questionTwo, questionThree, questionFour, answerOnelo

/*----------------------------- Event Listeners -----------------------------*/
// category1Btn.addEventListener("click", playGameOne)
// category2Btn.addEventListener("click", playGameTwo)
// category3Btn.addEventListener("click", playGameThree)
// category4Btn.addEventListener("click", playGameFour)

nextBtn.addEventListener("click", nextOneQuestion)
nextBtn.addEventListener("click", nextTwoQuestion)
nextBtn.addEventListener("click", nextThreeQuestion)
nextBtn.addEventListener("click", nextFourQuestion)


/*-------------------------------- Functions --------------------------------*/
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

// if (currentCategory === "c1"){
  //   currentQuestion = quizQuestions[0].question
  //   console.log(currentQuestion)
  //   questionEls.textContent = currentQuestion
  //   console.log(currentQuestion)
  // } else if (currentCategory === "c2") {
  //   currentQuestion = quizQuestions[4].question
  //   questionEls.textContent = currentQuestion
  // } else if (currentCategory === "c3") {
  //   currentQuestion = quizQuestions[8].question
  //   questionEls.textContent = currentQuestion
  // } else if (currentCategory === "c4"){
  //   currentQuestion = quizQuestions[12].question
  //   questionEls.textContent = currentQuestion
  // }
    
  
  // currentQuestion = 0
  // currentQuestions = quizOneQuestions
  // questionOne = 0
  // questionEls.textContent = currentQuestions[question].question; 

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