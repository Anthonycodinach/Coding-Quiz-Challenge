var highScores = JSON.parse(localStorage.getItem("high-scores"));
var highScoreP = document.createElement("p")

if (highScores === null) {
highScores = []

}


function displayHighScore() {
    for (let index = 0; index < highScores.length; index++) {
        // create element for high score
        // set element text content for high score & initial
        highScoreP.textContent = "Initials: " + highScores[index].initials + " " + " Score: " + highScores[index].score
        document.getElementById("highscorebox").append(highScoreP);
        // append element to page
    
    }
    }

   function clearScores() {

    highScoreP.style.display = "none";

    }

   var clearBtn = document.getElementById("clear-scores")

   clearBtn.addEventListener("click", clearScores);
   displayHighScore();
