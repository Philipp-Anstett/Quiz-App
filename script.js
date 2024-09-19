let questions = [
  {
    question: "Wer hat HTML erfunden?",
    answer_1: "Mr. Anderson",
    answer_2: "Kid Cudi",
    answer_3: "Tim Berners-Lee",
    answer_4: "Ronald McDonald",
    right_answer: 3,
  },
  {
    question:
      "Welche HTML-Tags werden verwendet, um die größte Überschrift zu erstellen?",
    answer_1: "<h6>",
    answer_2: "<h1>",
    answer_3: "<header>",
    answer_4: "<head>",
    right_answer: 2,
  },
  {
    question:
      "Welches CSS-Attribut wird verwendet, um die Hintergrundfarbe zu ändern?",
    answer_1: "color",
    answer_2: "background-color",
    answer_3: "font-color",
    answer_4: "bg-color",
    right_answer: 2,
  },
  {
    question: "Wie wählst du alle Elemente mit der Klasse 'button' in CSS aus?",
    answer_1: "#button",
    answer_2: ".button",
    answer_3: "*button",
    answer_4: "button",
    right_answer: 2,
  },
  {
    question:
      "Welche Methode wird in JavaScript verwendet, um eine Nachricht in der Konsole anzuzeigen?",
    answer_1: "console.write()",
    answer_2: "console.log()",
    answer_3: "console.display()",
    answer_4: "console.print()",
    right_answer: 2,
  },
  {
    question: "Wie definierst du eine JavaScript-Variable?",
    answer_1: "var myVariable",
    answer_2: "def myVariable",
    answer_3: "let myVariable",
    answer_4: "function myVariable",
    right_answer: 3,
  },
  {
    question:
      "Welches HTML-Attribut wird verwendet, um eine Bilddatei in einer Webseite einzubinden?",
    answer_1: "href",
    answer_2: "src",
    answer_3: "alt",
    answer_4: "link",
    right_answer: 2,
  },
];

let currentQuestion = 0;
let rightQuestions = 0;

function init() {
  document.getElementById("total-questions").innerHTML = questions.length;

  showQuestion();
}

function showQuestion() {
  if (currentQuestion >= questions.length) {
    document.getElementById("endscreen-container").style = "";
    document.getElementById("question-container").style = "display:none";

    document.getElementById("amount-of-questions").innerHTML = questions.length;
    document.getElementById("right-questions").innerHTML = rightQuestions;
    document.getElementById("header-image").src = "./img/trophy.svg";
  } else {
    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100);

    document.getElementById("progress-bar").innerHTML = `${percent} %`;
    document.getElementById("progress-bar").style = `width: ${percent}%`;

    let question = questions[currentQuestion];

    document.getElementById("question-Number").innerHTML = currentQuestion + 1;
    document.getElementById("question-text").innerHTML = question["question"];
    document.getElementById("answer_1").innerText = question["answer_1"];
    document.getElementById("answer_2").innerText = question["answer_2"];
    document.getElementById("answer_3").innerText = question["answer_3"];
    document.getElementById("answer_4").innerText = question["answer_4"];
  }
}

function answer(selection) {
  let question = questions[currentQuestion];
  let selectedQuestionNumber = selection.slice(-1);

  let idOfRightAnswer = `answer_${question["right_answer"]}`;

  if (selectedQuestionNumber == question["right_answer"]) {
    document.getElementById(selection).parentNode.classList.add("bg-success");
    rightQuestions++;
  } else {
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document
      .getElementById(idOfRightAnswer)
      .parentNode.classList.add("bg-success");
  }
  document.getElementById("next-button").disabled = false;
}

function nextQuestion() {
  currentQuestion++;
  document.getElementById("next-button").disabled = true;
  resetAnswerButtons();
  showQuestion();
}

function resetAnswerButtons() {
  document.getElementById("answer_1").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_1").parentNode.classList.remove("bg-success");
  document.getElementById("answer_2").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_2").parentNode.classList.remove("bg-success");
  document.getElementById("answer_3").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_3").parentNode.classList.remove("bg-success");
  document.getElementById("answer_4").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_4").parentNode.classList.remove("bg-success");
}

function restartGame() {
  document.getElementById("header-image").src = "./img/quiz.jpg";
  document.getElementById("question-container").style = "";
  document.getElementById("endscreen-container").style = "display:none";
  currentQuestion = 0;
  rightQuestions = 0;
  init();
}
