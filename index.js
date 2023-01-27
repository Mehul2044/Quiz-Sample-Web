function QuestionList(question, option1, option2, option3, option4, correct) {
    this.question = question;
    this.option1 = option1;
    this.option2 = option2;
    this.option3 = option3;
    this.option4 = option4;
    this.correct = correct;
}

let counter = 0;
let score = 0;
let selectedOption = "";

const arr = [new QuestionList("What is the capital of USA?",
    "Chicago", "Washington D.C.", "Los Angeles", "New York", "Washington D.C."),

    new QuestionList("What is the capital of India?",
        "Delhi", "Chennai", "Bangalore", "Mumbai", "Delhi"),

    new QuestionList("What is 3+5?",
        "3", "5", "8", "None of the above", "8")
];

function displayNextQuestion() {
    $(".start-box").hide();
    $(".question-answer-box").show();
    $(".footer").show();
    $(".next").hide();
    $(".answers").removeClass("clicked-button");
    $(".question").text(arr[counter].question);
    $(".option1").text(arr[counter].option1);
    $(".option2").text(arr[counter].option2);
    $(".option3").text(arr[counter].option3);
    $(".option4").text(arr[counter].option4);
}

function resetInitialiseQuiz() {
    counter = 0;
    score = 0;
    $(".question-answer-box").hide();
    $(".final-score").hide();
    $(".footer").hide();
    $(".start-box").show();
    $(".score").show();
    displayScore();
}

function finishQuiz() {
    $(".final-score").show();
    $(".final-score").text("Your final score is:" + score + "/" + arr.length);
    $(".next").hide();
    $(".question-answer-box").hide();
    $(".score").hide();
}

function displayScore() {
    $(".score").text("Score:" + score + "/" + arr.length);
}

function checkDisplayResult(selectedOption) {
    if (selectedOption === arr[counter].correct) {
        score++;
    }
    displayScore();
    counter++;
    if (counter > arr.length - 1) {
        finishQuiz();
    } else {
        displayNextQuestion();
    }
}

resetInitialiseQuiz();

$(".start-button").on("click", function () {
    displayNextQuestion();
});

$(".answers").on("click", function (event) {
    $(".answers").removeClass("clicked-button");
    event.target.classList.add("clicked-button");
    $(".next").show();
    selectedOption = event.target.innerText;
});

$(".next").on("click", function () {
    checkDisplayResult(selectedOption);
})

$(".restart").on("click", function () {
    resetInitialiseQuiz();
});

