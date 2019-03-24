//names to be used in game
var characters = ["elsa", "mickey", "ariel", "pluto", "jasmine"];
//word thats selected from characters[]
var secretWord = "";
//user's array that stores "_" blanks initially
var usersArray = [];
//letters used
var wrongWordArray = [];
//puts selected word into array of strings
var logged = "";
//stores which index the userInput equals inside of the logged[]
var indx;
//key the user pressed
var userInput = "";

//stats displayed to user
var wins = 0;
var losses = 0;
var guessesLeft = 0;

//vars with document id's for html printing
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var currentWord = document.getElementById("currentWord");
var guessesLeftText = document.getElementById("guessesLeft");
var lettersUsed = document.getElementById("lettersUsed");

//initializes the game and calles for a new word
function start() {
  wins = 0;
  losses = 0;
  guessesLeft = 6;
  updateData();
  getSecretWord();
}

//updates any page displayed stats
function updateData() {
  winsText.innerHTML = wins;
  lossesText.innerHTML = losses;
  currentWord.innerHTML = usersArray.join(" ");
  guessesLeftText.innerHTML = guessesLeft;
  lettersUsed.innerHTML = wrongWordArray;
}

//select new word, adds to logged, replaces letters with "_" and pushes to usersArray[]
function getSecretWord() {
  secretWord = characters[Math.floor(Math.random() * characters.length)];
  logged = secretWord.split("");
  for (var x = 0; x < logged.length; x++) {
    usersArray.push("_");
  }
  updateData();
  console.log(secretWord);
}

//records input from user
document.onkeyup = function(event) {
  userInput = event.key.toLowerCase();
  console.log(userInput);
  if (guessesLeft > 0) {
    indx = logged.indexOf(userInput);
    if (userInput == logged[indx]) {
      //if correct prints to document, update stats
      usersArray[indx] = userInput;
      guessesLeft = 6;
      updateData();
      gameWin();
    } else {
      //incorrect guess logs wrong guess, decrement guessesLeft
      guessesLeft--;
      wrongWordArray.push(userInput);
      updateData();
    }
  } else {
    //at loss, increase losses and reset game with new word
    losses++;
    guessesLeft = 6;
    usersArray = [];
    wrongWordArray = [];
    updateData();
    getSecretWord();
  }
};

//restarts game upon win/correct word guess
function gameWin() {
  if (usersArray.toString() == logged.toString()) {
    wins++;
    usersArray = [];
    updateData();
    getSecretWord();
  }
}

start();
