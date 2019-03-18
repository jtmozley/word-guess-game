//contains names to be used in game
var characters = ["elsa", "mickey", "ariel", "goofy", "woody"];

var selection = characters[Math.floor(Math.random() * characters.length)];
console.log(selection);

var word = []
//var displayWord = word.join(' ');

var wins = 0;
var losses = 0;
var ties = 0;
var guessesLeft = 15;

var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var currentWord = document.getElementById("currentWord");
var guessesLeft = document.getElementById("guessesLeft");
var lettersUsed = document.getElementById("lettersUsed");

for (var i = 0; i < selection.length; i++) {
  word.push('_');
}
var displayWord = word.join(' ');

//to be displayed
//userChoiceText.textContent = "You chose: " + userGuess;
//computerChoiceText.textContent = "The computer chose: " + computerGuess;
winsText.textContent = "wins: " + wins;
lossesText.textContent = "losses: " + losses;
currentWord.textContent = displayWord;
