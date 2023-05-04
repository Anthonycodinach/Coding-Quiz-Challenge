

// Create timer function

// element variables
var startButton = document.querySelector("#start");



// Set the countdown timer duration
var timer = document.querySelector(".timer");
var countDownDuration = 75;
function endGame(){
    console.log("Game eneded!")
    // display input el and prompt user for their initials
    // click save score btn -> save initials and countdownduration to local storage
    // display all highscores from local storage 
    // /\ ( should be a function connected to another button that can be used any time during game )
    // { clicking pauses the game timer and can returrne to same question }
}
// init interval variable
var countDown;

// Start quiz function
function startQuiz () {
    countDown = setInterval(function() {
        
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
}
    
// document.querySelector("intro-div").style.display = "none"

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
    // incorrect line 81 below figure it out
document.getElementById("question").innerHTML=currentQuestion.question
document.getElementById("answer-1").innerHTML=currentQuestion.answers[0]
document.getElementById("answer-2").innerHTML=currentQuestion.answers[1]
document.getElementById("answer-3").innerHTML=currentQuestion.answers[2]
document.getElementById("answer-4").innerHTML=currentQuestion.answers[3]
}
updateDOM()

// Function presents next question & options


// Function checks answer
function checkAnswer(correct) {
    document.getElementById("result-alert").style.display = block;
    
    if (currentQuestion.correct === currentQuestion.choices[correct]) {
        document.getElementById("result-alert").innerHTML = "Correct!"
        
    } else {
        countDownDuration -= 10;
        document.getElementById("result-alert").innerHTML = "Wrong! The correct answer is: " + currentQuestion.answer;
    }

    index++;

    if (index < questions.length) {
        updateDOM();
    } else{
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

startButton.addEventListener("click", startQuiz);
startButton.addEventListener("click", updateDOM);
