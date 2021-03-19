'use strict';
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🍕 Indovina il numero...';
document.querySelector('.number').textContent = '10';
document.querySelector('.score ').textContent = '70';
document.querySelector('.guess').value = '10';*/
let randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(`primer ${randomNumber}`);
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(typeof guess);

  if (score > 1) {
    // When there is no input
    if (!guess) {
      displayMessage(`ᓚᘏᗢ No number`);
      score -= 1;
      displayScore(score);
alert('Digite un numero');
      // When player wins.
    } else if (guess === randomNumber) {
      displayMessage(`(●'◡'●) You Win`);
      document.querySelector('body').style.backgroundColor = '#0398fc';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = randomNumber;
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
      // When guess is wrong
    } else if (guess !== randomNumber) {
      displayMessage(
        guess > randomNumber ? `(☞ﾟヮﾟ)☞ Too high` : `☜(ﾟヮﾟ☜) Too low`
      );
      score -= 1;
      displayScore(score);
    }
    // When score < 1, then you lose.
  } else {
    displayMessage(`(╯°□°）╯︵ ┻━┻ You lose`);
    document.querySelector('.score').textContent = 0;
  }
});
//Resetting all values
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  randomNumber = Math.floor(Math.random() * 20) + 1;
  console.log(`Segundo ${randomNumber}`);
  displayMessage('Start guessing...');
  displayScore(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ``;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
