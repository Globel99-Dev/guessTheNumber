'use strict';
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🍕 Indovina il numero...';
document.querySelector('.number').textContent = '10';
document.querySelector('.score ').textContent = '70';
document.querySelector('.guess').value = '10';*/
const overlay = document.querySelector('.overlay');
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

const reset = function () {
  score = 20;
  randomNumber = Math.floor(Math.random() * 20) + 1;
  console.log(`Segundo ${randomNumber}`);
  displayMessage('Iniziamo...');
  displayScore(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ``;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.overlay').textContent = 'DIGITA UN NUMERO';
  document.querySelector('.overlay').style.display = 'none';
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(typeof guess);

  if (score > 1) {
    // When there is no input
    if (!guess) {
      document.querySelector('.overlay').style.display = 'block';
      document.querySelector('body').style.backgroundColor = '#f54242';
      //displayMessage(`ᓚᘏᗢ Manca numero`);
      score -= 1;
      displayScore(score);
      document.querySelector('.overlay').addEventListener('click', function () {
        document.querySelector('.overlay').style.display = 'none';
        document.querySelector('body').style.backgroundColor = '#222';
      });
      // When player wins.
    } else if (guess === randomNumber) {
      document.querySelector('.overlay').style.display = 'block';
      //displayMessage(`(●'◡'●) Hai vinto`);
      document.querySelector('body').style.backgroundColor = '#0398fc';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = randomNumber;
      document.querySelector('.overlay').textContent = `(●'◡'●) Hai vinto`;
      document.querySelector('.overlay').addEventListener('click', function () {
        reset();
      });
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
      // When guess is wrong
    } else if (guess !== randomNumber) {
      displayMessage(
        guess > randomNumber ? `(☞ﾟヮﾟ)☞ Troppo alto` : `☜(ﾟヮﾟ☜) Troppo basso`
      );
      score -= 1;
      displayScore(score);
    }
    // When score < 1, then you lose.
  } else {
    displayMessage(`(╯°□°）╯︵ ┻━┻ Hai perso`);
    document.querySelector('.score').textContent = 0;
  }
});
//Resetting all values
document.querySelector('.again').addEventListener('click', function () {
  reset();
});
// ADD MODAL WITH MESSAGE WHEN WINS AND WHEN NO NUMBER AND MAYBE WHEN LOSE