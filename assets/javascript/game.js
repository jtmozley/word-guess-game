//names to be used in game
var characters = ["elsa", "mickey", "ariel", "goofy", "woody"];
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
//var isWordDone = false;

//stats displayed to user
var wins = 11110;
var losses = 0;
var guessesLeft = 0;

var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var currentWord = document.getElementById("currentWord");
var guessesLeftText = document.getElementById("guessesLeft");
var lettersUsed = document.getElementById("lettersUsed");

//updates any page displayed stats
function  updateData() {
	winsText.innerHTML = wins;
	lossesText.innerHTML = losses;
	currentWord.innerHTML = usersArray.join(" ");
	guessesLeftText.innerHTML = guessesLeft;
	lettersUsed.innerHTML = wrongWordArray;
};


//initializes the game and calles for a new word
function start() {
  wins = 0;
  losses = 0;
	guessesLeft = 15;
	updateData();
	getSecretWord();

}

start();

//select new word, adds to logged, replaces letters with "_" and pushes to usersArray[]
function getSecretWord() {
  secretWord = characters[Math.floor(Math.random() * characters.length)];
  logged = secretWord.split("");
  for (var x = 0; x < logged.length; x++) {
    usersArray.push("_");
	}
	updateData();
  console.log(secretWord);
  console.log(logged);
  console.log(usersArray);

  //return usersArray;
}


//records input from user
document.onkeyup = function(event) {
	userInput = event.key.toLowerCase();
	console.log(userInput);
  if (guessesLeft > 0) {
		indx = logged.indexOf(userInput);
		if(userInput == logged) {
			usersArray[indx] = userInput;
			updateData();
		} else {
			guessesLeft--
			wrongWordArray.push(userInput);
			updateData();
		}
	} else {
		losses++;
		updateData();
	}
};

function gameWin() {
  if (secretWord === usersArray) {
    //isWordDone = true;
    getSecretWord();
  } else {
    //isWordDone = false;
  }
};