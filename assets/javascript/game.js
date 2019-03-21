//contains names to be used in game
var characters = ["elsa", "mickey", "ariel", "goofy", "woody"];
//secret word
var secretWord = "";
//user's array
var usersArray = [];
//letters used
var wrongWordArray = [];
var logged = "";
// console.log(logged);

var wins = 0;
var losses = 0;
var guessesLeft;
var userInput = "";
var isWordDone = false;

function start() {
  wins = 0;
  losses = 0;
  guessesLeft = 15;
  getSecretWord();
}

start();

function getSecretWord() {
  secretWord = characters[Math.floor(Math.random() * characters.length)];
  logged = secretWord.split("");
  for (var x = 0; x < logged.length; x++) {
    usersArray.push("_");
  }
  console.log(secretWord);
  console.log(logged);
  console.log(usersArray);

  return usersArray;
}

// *on key press event*
// -if the guesses left is greater than 0 THEN check to see if letter pressed matches a letter in the word
// --if the letter matches a letter in the world then insert the letter into the array at the spot where
//		the letter(s) are supposed to be and subtract a guess
// --if NOT then log the word in the wrong word list and subtract a guesses left
// -if the guesses left is less than or equal to 0 THEN the game is over and the losses will update by 1,
//		the game will need to restart, and guesses left will need to be changed back to 15, and a new world
//		will need to be generated
document.onkeyup = function(event) {
	userInput = event.key.toLowerCase();
	console.log(userInput);

  if (userInput) {
    for (var i = 0; i < logged.length; i++) {
      if (userInput == logged[i]) {
				usersArray[i] = logged[i];
				guessesLeft--;
      } else {
        wrongWordArray.push(userInput);
        guessesLeft--;
      }
    }
  } else {
    isWordDone = true;
    losses++;
    guessesLeft = 15;
    getSecretWord();
  }
};

function gameWin() {
  if (secretWord === usersArray) {
    isWordDone = true;
    getSecretWord();
  } else {
    isWordDone = false;
  }
};

gameWin();

var winsText = (document.getElementById("wins").innerHTML = wins);
var lossesText = (document.getElementById("losses").innerHTML = losses);
var currentWord = (document.getElementById("currentWord").innerHTML = usersArray.join(" "));
var guessesLeftText = (document.getElementById("guessesLeft").innerHTML = guessesLeft);
var lettersUsed = (document.getElementById("lettersUsed").innerHTML = wrongWordArray);
