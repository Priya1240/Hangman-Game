//Global variables
var wins = 0;
var guessesLeft = 15;
var lettersGuessed = "";
var gameWord;

var words = ["zebra", "lion", "tiger", "elephant", "boar", "giraffe", "hippopotamus", "snake", "monkey", "baboon", "impala", "wildebeest", "cheetah", "leopard", "meerkat", "waterbuck", "gorilla", "rhinoceros", "peacock", "muskox", "aardvark", "aardwolf", "antelope", "buffalo", "bushbaby", "hyena", "jackal", "mongoose", "okapi", "ostrich", "pangolin", "serval", "warthog", "crocodile"];

var gameWord = words[Math.floor(Math.random() * words.length)];
console.log("Game Word: ", gameWord);
var missed = [];
// function startGame() {
//     //random word selection

    
// }

// function resetGame() {
//     wins = 0;
//     guessesLeft = 15;
//     lettersGuessed = "";
// }



document.onkeyup = function() {
 	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    
    console.log("User Guess:", userGuess);
var lettersGuessed = [];

//lettersGuessed.push(userGuess);

lettersGuessed = userGuess + " " + lettersGuessed;




    function display() {
        //startGame();
        var s = "";

        for (var i = 0; i < gameWord.length; i++) {
            var letters = gameWord[i]

            if ((userGuess) != -1)
                s = s + letters;
                // missed.push(userGuess);
                // console.log(missed, "<-------ARRAY");

            else {
                s = s + "_";
                guessesLeft--; 
            }
        }

        if (userGuess == -1) {
            guessesLeft--;
        }

    }

    var html = "<p>Wins: " + wins + "</p>" +
        "<p>Guesses Left: " + guessesLeft + "</p>" +
        "<p>Your Guesses: " + lettersGuessed + "</p>" +
        "<p>Current Word: " + gameWord +"</p>"

    document.querySelector("#game").innerHTML = html;

}

