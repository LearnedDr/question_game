
var startButtonEl = $('#start-btn');
var secondsLeft = 60;
var timeEl = $("#time");
// using JS vanilla to have correct syntax for replaceChildren and appendChild
var leaderBoard = document.querySelector(".card");

var score = 0;

var qI = 0;



function questionHandler() {
    let {text, responses} = questionBank[qI];
    main.innerHTML = `<h1>${text}</h1> <div id=answers></div>`;
    responses.forEach(ans => {
        answers.innerHTML += `<button onclick = "answerHandler('${ans}')">${ans}</button>`
    });
    if (qI == questionBank.length) {
        endGame();
    };
};

function answerHandler(ans) {
    if(ans==questionBank[qI].correct) {
        score++;
    } else {
        time -= 5;
    }

    qI++;
    questionHandler();
};


function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.text(secondsLeft + " seconds left ");
  
      if(secondsLeft < 1) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // ******** call endgame function
        endGame ();
      }
  
    }, 1000);
  };

startButtonEl.on("click", function () {
    setTime();
    questionHandler();
});

startButtonEl.on("click", function () {
    console.log("Hello");
});

var everyPlayer = [];




function endGame () {
// endgame code here
    var initials = prompt("What are your initials?");
   
    playerScore = {
        player: initials,
        scoreLocal: score
    };
    everyPlayer.push(playerScore);
    // var sortBoard = everyPlayer.sort(comparedNumbers);
    console.log(everyPlayer);
    localStorage.setItem("everyPlayer", JSON.stringify(everyPlayer));
    leaderBoard.replaceChildren();
    for (var i = 0; i < everyPlayer.length; i++ ) {
        var tag = document.createElement("p");
        leaderBoard.appendChild(tag);
        tag.textContent = everyPlayer[i].player + "       " + everyPlayer[i].scoreLocal;
    }
    
};



