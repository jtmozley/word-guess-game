//contains names to be used in game
var characters = ["elsa", "mickey", "ariel", "goofy", "woody"];

// var selection = characters[Math.floor(Math.random() * characters.length)];
// console.log(selection);
//secret word
var secretWord="";
//user's array
var usersArray = [];
//letters used
var wrongWordArray =[];
var logged= "";
// console.log(logged);

var wins = 0;
var losses = 0;
//var ties = 0;
var guessesLeft = 15;
var userInput="";
var isWordDone = false;

var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var currentWord = document.getElementById("currentWord");
var guessesLeftText = document.getElementById("guessesLeft");
var lettersUsed = document.getElementById("lettersUsed");


//create a fx to call a random secret word and creates a 
//a users array with all blanks "_"
function getSecretWord()
{
	secretWord = characters[Math.floor(Math.random() * characters.length)];
	console.log(secretWord);
	logged = secretWord.split('');
	console.log(logged);

	for(var x=0; x<logged.length;x++)
	{
		usersArray.push("_");
	}
	console.log(usersArray);

	return usersArray;


}



//start fx
//win=0
//losses=0
//guessleft=15
//get a new random work
//create a user's array based on the length of the random word and fill with "_"
//display all the values

function start()
{
	win=0
	losses=0
	guessleft=15
	getSecretWord();
	console.log("wins "+win);
	console.log("losses "+losses);
	console.log("guesses left "+guessleft);
	
}

start();

//onkey event to check 
//check to see if the 
//if the game is not over the guesses>0
	//check to see if usersArray == secret word
	//update wins++;
	//get new secret word
	//create a blank array for usersArray with "_"
	//check to see if the userinput = the user's secret word
	//update the user's array with the input to match
	//else if the userinput!= users secret word
	//update the wrongWordArray with the char
	//else if userinput!= user's 

//else guessesLeft>15 game is over
//update losses++;

document.onkeyup = function(event) 
{
	userInput = event.key;
	if(guessesLeft > 0) {
		//call function win(secret word, user array)
		//if is done === true then 
				//wins++
		//else check user input to see if it matches user array
		//getSecredWord()
		//

	} else {
		losses++;
		guessesLeft = 15;
		getSecretWord();
	}
};


//function win( secret word, user array) 
for(
//	if secred word === user Array then isdone is true
//  else is done is false
//
)




/*

//loop through selected world and generate blank(_) spaces and push them to word[]
for (var i = 0; i < selection.length; i++) 
{
  word.push("_");
}
//removes commas between blanks(_) in word[] and stores in displayWord
var displayWord = word.join(" ");

// runs whenever the user presses a key.
document.onkeyup = function(event) 
{
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
*/