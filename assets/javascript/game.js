//contains names to be used in game
var characters = ["elsa", "mickey", "ariel", "goofy", "woody"];

var selection = characters[Math.floor(Math.random() * characters.length)];
console.log(selection);

var word = [];
var logged = selection.split('');
console.log(logged);

var wins = 0;
var losses = 0;
var ties = 0;
var guessesLeft = 15;

var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var currentWord = document.getElementById("currentWord");
var guessesLeftText = document.getElementById("guessesLeft");
var lettersUsed = document.getElementById("lettersUsed");

//loop through selected world and generate blank(_) spaces and push them to word[]
for (var i = 0; i < selection.length; i++) {
  word.push("_");
}
//removes commas between blanks(_) in word[] and stores in displayWord
var displayWord = word.join(" ");

// runs whenever the user presses a key.
document.onkeyup = function(event) {
  // Determines which key was pressed.
  var userGuess = event.key;
  console.log(userGuess);
  
  for (var j = 0; j < logged.length; j++) {
    if (logged[j] === userGuess) {
      word[j] = userGuess;
      guessesLeft--;
    }
}
};



//to be displayed
//userChoiceText.textContent = "You chose: " + userGuess;
//computerChoiceText.textContent = "The computer chose: " + computerGuess;
winsText.textContent = wins;
lossesText.textContent = losses;
currentWord.textContent = displayWord;
guessesLeftText.textContent = guessesLeft;