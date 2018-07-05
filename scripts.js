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
// maxNum and minNum functions not working yet
// maxValue.addEventListener('keyup', maxNum)
// minValue.addEventListener('keyup', minNum)

var resultRandomNumber = randomNumber();
console.log(resultRandomNumber);

function startGame(e) {
e.preventDefault(); 
  var guessNum = parseInt(userInputGuess.value);
  showNumber.innerText = guessNum;
  guessFeedback(guessNum, resultRandomNumber);
};

function randomNumber() {
  var maxNum = parseInt(maxValue.value);
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

// make function for with condition for logic of adjusting min and max up and down by 10 if user wins
// find method that adjusts or changes attribute
// function randomNumber(max) {
//   var maxNum = parseInt(maxValue.value);
//   console.log(maxNum); 
//   maxNum.setAttribute(max, maxNum)
//   return Math.floor(Math.random() * 100 + 1);
//   console.log(randomNumber)
// };


