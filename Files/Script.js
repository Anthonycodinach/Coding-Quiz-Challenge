

// element variables

var highScores = JSON.parse(localStorage.getItem("high-scores"));
var introDiv = document.querySelector(".intro-div")
var timer = document.querySelector(".timer");
var questionDiv = document.querySelector(".question-1-div")
var finalScore = document.getElementById("final-score-h2")
var scoreDiv = document.getElementById("scored-div")
var highScoreDiv = document.querySelector(".highScoreDiv")
var storedScoresPEl = document.querySelector(".high-scores")
var initialsInput = document.querySelector(".initials-p")
var submitScoreBtn = document.querySelector(".score-button")
var seeHighScoresH2 = document.getElementById("high-scores")
var question = document.getElementById("question")
var btn1 = document.getElementById("answer-1")
var btn2 = document.getElementById("answer-2")
var btn3 = document.getElementById("answer-3")
var btn4 = document.getElementById("answer-4")
var startButton = document.querySelector("#start");

submitScoreBtn.addEventListener("click", function () {
   localStorage.setItem("high-scores", JSON.stringify(highScores));
    // 1 - get initials from HTML
    document.getElementById("input-el")
    // 2 - create object of initials and score
    var userScore = {
        initials: initialsInput.value,
        score: countDownDuration.textContent
    }
    highScores.append(userScore)
    // 3 - append new object to existing high score array
    // 4 - set new array in local storage
    scoresArray.push(userScore)

    window.location.href="high-scores.html"
});
// Set the countdown timer duration
var countDownDuration = 75;
function endGame() {
    console.log("Game ended!")
    // display input el and prompt user for their initials
    introDiv.style.display = "none";
    timer.style.display = "none";
    questionDiv.style.display = "none";
    scoreDiv.style.display = "block";

    finalScore.textcontent = "Your final score is " + countDownDuration + "!"
    // click save score btn -> save initials and countdownduration to local storage
    // display all highscores from local storage 
    // /\ ( should be a function connected to another button that can be used any time during game )
    // { clicking pauses the game timer and can returrne to same question }
}
function storeHighScores(event) {
    event.preventDefault();

    introDiv.style.display = "none";
    timer.style.display = "none";
    questionDiv.style.display = "none";
    scoreDiv.style.display = "none";
    highScoreDiv.style.display = "block";

    storedScoresPEl.textContent = highscores;
    var scoresArray;

    var userScore = {
        initials: initialsInput.value,
        score: countDownDuration.textContent
    }

    scoresArray.push(userScore)
}
// init interval variable
var countDown;

// Create timer function
// Start quiz function
function startTimer() {
    introDiv.style.display = "none";
    countDown = setInterval(function () {

        // Calculate the remaining time in minutes and seconds
        var minutes = Math.floor(countDownDuration / 60);
        var seconds = countDownDuration % 60;

        // Display the remaining time in the HTML element with class="timer"
        timer.innerHTML = "Time: " + minutes + "m " + seconds + "s ";
        // Subtract 1 from the remaining time
        countDownDuration--;
        console.log(minutes, seconds)

        // If the countdown timer has reached 0, stop the timer and display a message
        if (countDownDuration === 0) {
            clearInterval(countDown);
            document.querySelector(".timer").innerHTML = "Time's up!";
            countDownDuration = 0
        }
    }, 1000);

    startQuiz();
}

function startQuiz() {
    document.getElementById('question-container').style.display = "block"
    updateDOM();
}

// Object to hold questions, options & correct answers
var questions = [

    {
        question: "Commonly used data types DO Not include:",
        answers: ["Strings", "Booleans", "Alerts", "Numbers"],
        correct: "Alerts"
    }, {

        question: "The condition in an if / else statement is enclosed with ______.:",
        answers: ["Quotes", "Curly Bracketss", "Parenthesis", "Square Brackets"],
        correct: "Parenthesis"

    }, {

        question: "Arrays in JavaScript can be used to store ______.",
        answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correct: "other arrays"

    }, {

        question: "String values must be enclosed within ______ when being assigned to variables.",
        answers: ["commas", "curly brackets", "quotes", "parenthesis"],
        correct: "quotes"

    }, {

        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        correct: "console.log"
    }
];

// Update HTML with next question
var index = 0;
var currentQuestion = questions[index]
function updateDOM() {
    currentQuestion = questions[index]

    question.innerHTML = currentQuestion.question
    btn1.innerHTML = currentQuestion.answers[0]
    btn2.innerHTML = currentQuestion.answers[1]
    btn3.innerHTML = currentQuestion.answers[2]
    btn4.innerHTML = currentQuestion.answers[3]
}
updateDOM()


// Function checks answer
function checkAnswer(e, correct) {
    document.getElementById("result-alert").style.display = "block";

    if (currentQuestion.correct === e.target.innerText) {
        document.getElementById("result-alert").innerHTML = "Correct!"
    } else {
        countDownDuration -= 10;
        document.getElementById("result-alert").innerHTML = "Wrong! The correct answer is: " + currentQuestion.answer;
    }

    index++;
    if (index < questions.length) {
        updateDOM();
    } else {
        endGame()
    }
    // everytime when the user clicks the answer button
    // check if answer matches correct answer
    // re-run updateDom
}
// questionElement.innerText=options[var].question

// If statment to deduct points when user selects wrong answer

// Event Listener to transition to next question


// Code to track high scores

function chooseBtn1(e) { checkAnswer(e, 0); }
function chooseBtn2(e) { checkAnswer(e, 1); }
function chooseBtn3(e) { checkAnswer(e, 2); }
function chooseBtn4(e) { checkAnswer(e, 3); }


startButton.addEventListener("click", startTimer);
btn1.addEventListener("click", chooseBtn1);
btn2.addEventListener("click", chooseBtn2);
btn3.addEventListener("click", chooseBtn3);
btn4.addEventListener("click", chooseBtn4);


