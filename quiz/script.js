
// https://opentdb.com/api.php?amount=5
const quizBank = [
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question: "What was the title of ABBA`s first UK hit single?",
    correct_answer: "Waterloo",
    incorrect_answers: ["Mamma Mia", "Fernando", "Dancing Queen"],
  },
  {
    category: "Geography",
    type: "boolean",
    difficulty: "easy",
    question: "Greenland is almost as big as Africa.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "easy",
    question: "Which country does the band Rammstein hail from?",
    correct_answer: "Germany",
    incorrect_answers: ["Austria", "Armenia", "Belgium"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "How many voice channels does the Super Nintendo Entertainment System support?",
    correct_answer: "8",
    incorrect_answers: ["6", "10", "12"],
  },
  {
    category: "Entertainment: Video Games",
    type: "boolean",
    difficulty: "medium",
    question:
      "In the video game &quot;Transistor&quot;, &quot;Red&quot; is the name of the main character.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
];

var currentQuiz = 0;
var score = 0;
const questionEle = document.querySelector(".quiz-container form h3");
const answerAreaEle = document.querySelector(".answer-area");
const buttonSubmit = document.querySelector(".quiz-container button");
function printQuiz() {
  const quiz = quizBank[currentQuiz];
  answerAreaEle.innerHTML = "";
  questionEle.innerHTML = quiz.question;
  var answers = quiz.incorrect_answers;
  //get all answer
  answers.push(quiz.correct_answer);
  //random answer
  answers = shuffle(answers);
  //get answer dom
  answers.forEach((answer, index) => {
    var answerNode = document.createElement("div");
    answerNode.innerHTML = `<input type="radio" id="answer${index}" name="answer" /><span class="checkmark"></span><label for="answer${index}">${answer}</label><br />`;
    answerAreaEle.appendChild(answerNode);
  });
}

function shuffle(o) {
  for (
    var j, x, i = o.length;
    i;
    j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
  );
  return o;
}
printQuiz();

buttonSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  const quiz = quizBank[currentQuiz];
  const answerEle = document.querySelector(
    ".quiz-container input:checked ~ label"
  );
  if (answerEle) {
    var answerChecked = answerEle.innerHTML;
  }
  if (quiz.correct_answer === answerChecked) {
    score++;
  }
  if (currentQuiz < quizBank.length - 1) {
    currentQuiz++;
    printQuiz();
  } else {
    alert(`Score: ${score}/${quizBank.length}`);
  }
});
