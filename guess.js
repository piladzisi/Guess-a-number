var correctGuess = false;
var randomNumber = Math.floor (Math.random() *10) +1;
var guess = prompt ('I am thinking of a number between 1 and 10. What is it?');
if (parseInt(guess) === randomNumber){
	correctGuess = true;
} else if ( parseInt(guess)  < randomNumber ){
	var guessMore = prompt('The number is higher than ' + guess +'. Try again');
	if (parseInt(guessMore) === randomNumber){
		correctGuess = true;
	}
} else if ( parseInt(guess) > randomNumber){
	var guessLess = prompt('The number is lower than ' + guess +'. Try again');
	if (parseInt(guessLess) === randomNumber){
		correctGuess = true;
	}
}
	if (correctGuess){
		document.write ('<p>You guessed it!</p>');
	} else{
		document.write ('<p>Sorry. The number was ' + randomNumber + '.</p');
	}