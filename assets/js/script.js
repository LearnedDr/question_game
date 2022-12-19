var questionBank = [ 
    {
        text : "Inside the HTML document, where do you place your JavaScript code?",
        responses : [
            "Inside the <head> element",
            "In the <footer> element",
            "Inside the <script> element",
            "Inside the <link> element"
        ],
        correct : "Inside the <link> element"
    },
    {
        text : "What operator is used to assign a value to a declared variable?",
        responses : [
            "Equal sign (=)",
            "Double-equal (==)",
            "Question mark (?)",
            "Colon (:)"     
        ],
        correct : "Equal sign (=)"
    },
    {
        text : "What are the six primitive data types in JavaScript?",
        responses : [
            "sentence, int, truthy, bigInt, symbol, undefined",
            "string, num, falsy, bigInt, symbol, undefined",
            "string, number, boolean, bigInt, symbol, undefined",
            "sentence, float, data, bigInt, symbol, undefined"
        ],
        correct : "string, number, boolean, bigInt, symbol, undefined",
    },
    {
        text : "What is the difference between && and ||?",
        responses : [
            "The logical operator && returns true if one expression is true while the logical operator || returns true if both expressions return true.",
            "The logical operator && returns true if both expressions are true while the logical operator || returns false if one expression or the other returns true.",
            "The logical operator && returns true if none of the expressions are true while the logical operator || returns true if one expression or the other returns true.",
            "The logical operator && returns true if both expressions are true while the logical operator || returns true if one expression or the other returns true."
        ],
        correct : "The logical operator && returns true if both expressions are true while the logical operator || returns true if one expression or the other returns true."
    },
    {
        text : "How do we declare a conditional statement in JavaScript?",
        responses : [
            "while loop",
            "difference...between",
            "for loop",
            "if...else"
        ],
        correct : "if...else"
    },
    {
        text : "From the given array which index is the letter 'b' on? ['a', 'b', 'c', 'd']",
        responses : [
            "1",
            "2",
            "0",
            "3"
        ],
        correct : "1"
    },
    {
        text : "How do we stop a loop from from repeating indefinitely?",
        responses : [
            "When we have iterated through half of the condition.",
            "A loop will stop executing when the condition is true.",
            "We have to explicitly end the loop with the break keyword.",
            "A loop will stop executing when the condition is false."
        ],
        correct : "A loop will stop executing when the condition is false."
    },
    {
        text : "Which statement below is not true about functions in JavaScript?",
        responses : [
            "Functions can be reused throughout your code",
            "Functions can receive arguments that can alter the output of a function",
            "A function must always be assigned an identifier",
            "Functions are able to be recursive."
        ],
        correct : "A function must always be assigned an identifier"
    },
    {
        text : "What are the two types of scope JavaScript uses",
        responses :[
            "Abroad and Local",
            "Global and Local",
            "Surrounding and Inner",
            "Outside and Inside"
        ],
        correct : "Global and Local"
    },
    {
        text : "As a developer, I want to be able to remove the last element of my array and I want to also be able to add a new element to the beginning of my array. Which two array methods should I use?",
        responses : [
            "concat() and shift()",
            "pop() and unshift()",
            "forEach() and pop()",
            "push() and sort()"
        ],
        correct : "pop() and unshift()"
    }
];
var startButtonEl = $('#start-btn');
var secondsLeft = 10;
var timeEl = $(".time");
var leaderBoard = document.querySelector(".card")

var score = 0


// ***************Stevie's Shit
// function startgame(){
//     start timer function
//     if(timercount < 0) {
//         endgame()
//     }
//     handlequestion()
// }
// handlequestion() {
//     foreach()
// }
// ************************************************






function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.text(secondsLeft + " seconds left ");
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // ******** call endgame function
      }
  
    }, 1000);
  };

startButtonEl.on("click", function () {
    setTime();
});

startButtonEl.on("click", function () {
    console.log("Hello");
});

var endButtonEl = $("#end-btn");
var everyPlayer = [];

endButtonEl.on("click", function() {
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
    
});

//  **************This is Useless code because it didn't know how to read the array as an object

// endButtonEl.on("click", function() {
//     // endgame code here
//     // stop timer if timer > 0
    
//     // record score (already in variable)
//     // prompt for initials
//     // record initials
//         var initials = prompt("What are your initials?");
       
//         playerScore = {
//             player: initials,
//             scoreLocal: score
//         };
//         console.log(playerScore.scoreLocal);
//         everyPlayer.push(playerScore);
//         console.log(everyPlayer);
        



//         localStorage.setItem("everyPlayer", JSON.stringify(everyPlayer));
//         renderMessage()
// });
//         // document.querySelector(".card").append(playerScore.player + playerScore.scoreLocal);
//         // document.querySelector(".card").append(everyPlayer[playerScore.player] + "    " + everyPlayer[playerScore.scoreLocal]);
//         // JSON.parse(everyPlayer);
// function renderMessage() { 
//     var weAreFinished = JSON.parse(localStorage.getItem("everyPlayer"))
//     if (weAreFinished !== null) {
//     document.querySelector(".card").textContent = weAreFinished.player + "     " + weAreFinished.scoreLocal
//     }
// };
// ******************************************************
