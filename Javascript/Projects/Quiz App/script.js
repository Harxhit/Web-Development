document.addEventListener("DOMContentLoaded", () => {
  const startQuiz = document.getElementById("startBtn");
  startQuiz.addEventListener("click", () => {
    window.location.href =
      "/tailwind/public/Projects/Quiz Application/index.html";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const questionText = document.getElementById("question");
  const option1Button = document.getElementById("option1");
  const option2Button = document.getElementById("option2");
  const option3Button = document.getElementById("option3");
  const option4Button = document.getElementById("option4");
  const nextButton = document.getElementById("nextBtn");

  const quizQuestions = [
    {
      title: "What does HTML stand for?",
      option1: "HyperText Markup Language",
      option2: "HighText Machine Language",
      option3: "Hyperloop Machine Language",
      option4: "HyperTool Markup Language",
      correctAnswer: "option1",
    },
    {
      title: "Which symbol is used for comments in JavaScript?",
      option1: "//",
      option2: "<!-- -->",
      option3: "#",
      option4: "**",
      correctAnswer: "option1",
    },
    {
      title: "Which company developed the Java programming language?",
      option1: "Microsoft",
      option2: "Sun Microsystems",
      option3: "IBM",
      option4: "Google",
      correctAnswer: "option2",
    },
    {
      title: "What is the output of: console.log(typeof null)?",
      option1: "'object'",
      option2: "'null'",
      option3: "'undefined'",
      option4: "'boolean'",
      correctAnswer: "option1",
    },
    {
      title: "Which of the following is NOT a programming language?",
      option1: "Python",
      option2: "Java",
      option3: "HTML",
      option4: "C++",
      correctAnswer: "option3",
    },
    {
      title: "Which keyword is used to define a constant in JavaScript?",
      option1: "let",
      option2: "var",
      option3: "const",
      option4: "define",
      correctAnswer: "option3",
    },
    {
      title: "Which HTML tag is used to link JavaScript to a web page?",
      option1: "<js>",
      option2: "<script>",
      option3: "<javascript>",
      option4: "<link>",
      correctAnswer: "option2",
    },
    {
      title: "What does CSS stand for?",
      option1: "Computer Style Sheets",
      option2: "Creative Style Sheets",
      option3: "Cascading Style Sheets",
      option4: "Colorful Style Sheets",
      correctAnswer: "option3",
    },
    {
      title: "What is the value of 2 + '2' in JavaScript?",
      option1: "4",
      option2: "'4'",
      option3: "'22'",
      option4: "NaN",
      correctAnswer: "option3",
    },
    {
      title: "Which method converts JSON data to a JavaScript object?",
      option1: "JSON.convert()",
      option2: "JSON.parse()",
      option3: "JSON.stringify()",
      option4: "JSON.toObject()",
      correctAnswer: "option2",
    },
  ];

  let currentQuestionIndex = 0;
  let scoreCounter = 0;

  renderQuestion(quizQuestions[currentQuestionIndex]);

  function renderQuestion(question) {
    questionText.textContent = question.title;
    option1Button.textContent = question.option1;
    option2Button.textContent = question.option2;
    option3Button.textContent = question.option3;
    option4Button.textContent = question.option4;

    const buttons = [
      option1Button,
      option2Button,
      option3Button,
      option4Button,
    ];
    buttons.forEach((btn) => {
      btn.classList.remove("bg-green-500", "bg-red-400");
      btn.classList.add("bg-purple-300");
      btn.disabled = false;
    });
  }

  function checkAnswer(selectedOption) {
    const correctAnswer = quizQuestions[currentQuestionIndex].correctAnswer;

    [option1Button, option2Button, option3Button, option4Button].forEach(
      (btn) => {
        btn.classList.remove("bg-purple-300");
      }
    );

    if (selectedOption === correctAnswer) {
      document.getElementById(selectedOption).classList.add("bg-green-500");
      scoreCounter += 1;
    } else {
      document.getElementById(selectedOption).classList.add("bg-red-400");
      document.getElementById(correctAnswer).classList.add("bg-green-500");
    }

    option1Button.disabled = true;
    option2Button.disabled = true;
    option3Button.disabled = true;
    option4Button.disabled = true;
  }

  option1Button.addEventListener("click", () => checkAnswer("option1"));
  option2Button.addEventListener("click", () => checkAnswer("option2"));
  option3Button.addEventListener("click", () => checkAnswer("option3"));
  option4Button.addEventListener("click", () => checkAnswer("option4"));

  nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      currentQuestionIndex++;
      renderQuestion(quizQuestions[currentQuestionIndex]);
    } else {
      localStorage.setItem("quizScore", scoreCounter);
      window.location.href = "score.html";
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const restartButton = document.getElementById("restartBtn");
  const scoreText = document.getElementById("score");
  const score = localStorage.getItem("quizScore");

  if (score) {
    alert(`Your score is : ${score}`);
    scoreText.textContent = `Your score: ${score}/10`;
  }

  restartButton.addEventListener("click", () => {
    localStorage.removeItem("quizScore");
    window.location.href = "index.html";
  });
});
