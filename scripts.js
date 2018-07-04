var inputForm = document.querySelector('.input-form');
var userInputGuess = document.querySelector('.user-guess-input');
// var submitButton = document.querySelector('.submit-guess-button');
var showNumber = document.querySelector('output');
var showGuessFeedback = document.querySelector('.guess-feedback');
var clearButton = document.querySelector('.clear-form-button');
var resetButton = document.querySelector('.reset-button');
var guessButton = document.querySelector('.submit-guess-button');

// calling randomNumber function and assigning it to resultRandomNumber variable
var resultRandomNumber = randomNumber();
console.log(resultRandomNumber);


// function enableBtn() {
//     // setAttribute to enabled
//     guessButton.setAttribute("disabled", false);
// }
// listening for an entry on the userInputGuess
userInputGuess.addEventListener('focus', enableBtn)
// listening for a submit on the inputForm
inputForm.addEventListener('submit', startGame);
// listening for click on reset button
resetButton.addEventListener('click', reloadPage);

function startGame(e) {
e.preventDefault(); 
  // taking the user input value, converting it to a number, assigning it to guessNum variable
  var guessNum = parseInt(userInputGuess.value);
  // display user's last guess in HTML
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
  } else if (guess < randomNum) {
    showGuessFeedback.innerText = 'That is too low';
  } else {
    showGuessFeedback.innerText = 'BOOM!';
  }
};
//use reload method
function reloadPage(e) {
  // e.preventDefault();
  location.reload();
}

function enableBtn(e) {
  e.preventDefault();
  console.log('working')
  resetButton.removeAttribute('disabled');
  clearButton.removeAttribute('disabled');
  guessButton.removeAttribute('disabled');

}

// Ben showed Kevin how to set min and max

// Listen for event (onchange attribute)on input form, if there enable clear button
// use change event with 
// Or -- Use the validity.valid in JS with :valid or :invalid CSS pseudo-class property

