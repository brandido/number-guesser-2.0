var inputForm = document.querySelector('.input-form');
var userInputGuess = document.querySelector('.user-guess-input');
var showNumber = document.querySelector('output');
var showGuessFeedback = document.querySelector('.guess-feedback');
var clearButton = document.querySelector('.clear-form-button');
var resetButton = document.querySelector('.reset-button');
var guessButton = document.querySelector('.submit-guess-button');
var maxValue = document.querySelector('.max-value');
var minValue = document.querySelector('.min-value');

userInputGuess.addEventListener('keyup', enableBtn)
inputForm.addEventListener('submit', startGame);
resetButton.addEventListener('click', reloadPage);

var resultRandomNumber = randomNumber();
console.log(resultRandomNumber);

function startGame(e) {
e.preventDefault(); 
  var guessNum = parseInt(userInputGuess.value);
  showNumber.innerText = guessNum;
  guessFeedback(guessNum, resultRandomNumber);
};

function randomNumber() {
  return Math.floor(Math.random() * 100 + 1);
  console.log(randomNumber)
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

function reloadPage(e) {
  location.reload();
};

function enableBtn(e) {
  e.preventDefault();
  resetButton.removeAttribute('disabled');
  clearButton.removeAttribute('disabled');
  guessButton.removeAttribute('disabled');
};



