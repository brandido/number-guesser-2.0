var inputForm = document.querySelector('.input-form')
var userInputGuess = document.querySelector('.user-guess-input');
// var submitButton = document.querySelector('.submit-guess-button');
var showNumber = document.querySelector('output');
var showGuessFeedback = document.querySelector('.guess-feedback');
var clearButton = document.querySelector('.clear-form-button');
var resetButton = document.querySelector('.reset-button');

// calling randomNumber function and assigning it to resultRandomNumber variable
var resultRandomNumber = randomNumber();
console.log(resultRandomNumber);

// listening for a submit on the inputForm
inputForm.addEventListener('submit', startGame);
resetButton.addEventListener('click', reloadPage);
  // function(e){
//   e.preventDefault(); 
//   // taking the user input value, converting it to a number, assigning it to guessNum variable
//   var guessNum = parseInt(userInputGuess.value);
//   // display user's last guess
//   showNumber.innerText = guessNum;
//   // calling the guessFeedback function and passing it arguments of guessNum and resultRandomNumber
//   guessFeedback(guessNum, resultRandomNumber);
// });

function startGame(e) {
e.preventDefault(); 
  // taking the user input value, converting it to a number, assigning it to guessNum variable
  var guessNum = parseInt(userInputGuess.value);
  // display user's last guess
  showNumber.innerText = guessNum;
  // calling the guessFeedback function and passing it arguments of guessNum and resultRandomNumber
  guessFeedback(guessNum, resultRandomNumber);
};

function randomNumber() {
  return Math.floor(Math.random() * 100 + 1);
};

 function guessFeedback(guess, randomNum) {
  if (guess > randomNum) {
    showGuessFeedback.innerText = 'That is too high';
    console.log('too high');
  } else if (guess < randomNum) {
    showGuessFeedback.innerText = 'That is too low';
    console.log('too low');
  } else {
    showGuessFeedback.innerText = 'BOOM!';
    console.log('boom');
  }
};
//use reload
function reloadPage(e) {
  e.preventDefault();
  location.reload();
}

// Listen for event on input form, if there enable clear button
userInputGuess.addEventListener()
