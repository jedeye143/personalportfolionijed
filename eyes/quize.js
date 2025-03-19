const questions = [
    {
        question: "What is the main ingredient in espresso?",
        options: ["Milk", "Water", "Orange Juice", "Tea"],
        correctAnswer: "Water"
    },
    {
        question: "In the word 'Coffee,' which letter comes between 'E' and 'G'?",
        options: ["D", "F", "H", "I"],
        correctAnswer: "F"
    },
    {
        question: "What color is a typical coffee bean?",
        options: ["Red", "Brown", "Green", "Black"],
        correctAnswer: "Green"
    },
    {
        question: "In which country did coffee originate?",
        options: ["Italy", "Ethiopia", "Brazil", "Colombia"],
        correctAnswer: "Ethiopia"
    },
    {
        question: "What is the primary flavor of a cappuccino?",
        options: ["Sweet", "Bitter", "Sour", "Creamy"],
        correctAnswer: "Creamy"
    },
];

let currentQuestionIndex = 0;
let score = 0;

const body = document.body;
const quizContainer = document.querySelector(".quiz-container");
const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const progressText = document.getElementById("quiz-progress");
const nextButton = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const scoreText = document.getElementById("score");
const tryAgainButton = document.getElementById("try-again-btn");
const resultMessage = document.getElementById("result-message");

function startQuiz() {
    body.style.backgroundColor = "#f8f1eb";
    quizContainer.style.backgroundColor = "#fdfaf6";
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").innerText = currentQuestion.question;

    optionsContainer.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.addEventListener("click", () => selectAnswer(button));
        optionsContainer.appendChild(button);
    });

    progressText.innerText = `Progress: ${(currentQuestionIndex / questions.length) * 100}%`;
}

function selectAnswer(selectedButton) {
    const buttons = optionsContainer.querySelectorAll('button');
    buttons.forEach(button => button.classList.remove('selected'));
    selectedButton.classList.add('selected');
}

function checkAnswer() {
    const selectedButton = optionsContainer.querySelector('.selected');
    if (selectedButton) {
        const currentQuestion = questions[currentQuestionIndex];
        if (selectedButton.innerText === currentQuestion.correctAnswer) {
            score++;
        }

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }
}

function showResult() {
    questionContainer.style.display = "none";
    resultContainer.style.display = "block";
    scoreText.innerText = score;

    if (score === 5) {
        resultMessage.innerText = "Congratulations! You're a true coffee connoisseur!";
    } else if (score >= 3) {
        resultMessage.innerText = "Great job! You know your coffee well.";
    } else {
        resultMessage.innerText = "Nice try! Keep exploring the world of coffee.";
    }

    body.style.backgroundColor = "#d3ffd3";
    quizContainer.style.backgroundColor = "#f0fff0";
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    questionContainer.style.display = "block";
    resultContainer.style.display = "none";
    startQuiz();
}

function logout() {

    const logoutUrl = "quizeLandingPage.html";


    window.location.href = logoutUrl;
}

startQuiz();