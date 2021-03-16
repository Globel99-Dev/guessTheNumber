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
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(typeof guess);

  if (score > 1) {
    // When there is no input
    if (!guess) {
      document.querySelector('.message').textContent = `ᓚᘏᗢ No number`;
      score -= 1;
      document.querySelector('.score').textContent = score;
      // When player wins.
    } else if (guess === randomNumber) {
      document.querySelector('.message').textContent = `(●'◡'●) You Win`;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = randomNumber;
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
      // When guess is toot high
    } else if (guess > randomNumber) {
      document.querySelector('.message').textContent = `(☞ﾟヮﾟ)☞ Too high`;
      score -= 1;
      document.querySelector('.score').textContent = score;
      // When guess is toot low
    } else if (guess < randomNumber) {
      document.querySelector('.message').textContent = `☜(ﾟヮﾟ☜) Too low`;
      score -= 1;
      document.querySelector('.score').textContent = score;
    }
    // When score < 1, then you lose.
  } else {
    document.querySelector('.message').textContent = `(╯°□°）╯︵ ┻━┻ You lose`;
    document.querySelector('.score').textContent = 0;
  }
});
//Resetting all values
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  randomNumber = Math.floor(Math.random() * 20) + 1;
  console.log(`Segundo ${randomNumber}`);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ``;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
