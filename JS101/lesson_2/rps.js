const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard']; // create object prototype of valid choices and add 'r' 's' 'p' 'l', keep in mind inheritance
function prompt(msg) {
  console.log(`=> ${msg}`);
}
let compCounter = 0;
let userCounter = 0;


while (true) {
  prompt(`Please choose either ${VALID_CHOICES.join(', ')}`);
  let userChoice = readline.question().toLowerCase();
  switch (userChoice) {
    case 'r': userChoice = 'rock';
      break;
    case 'p': userChoice = 'paper';
      break;
    case 'l': userChoice = 'lizard';
      break;
    case 's': while (true) {
      prompt('Please specify. Choose either 1 or 2\n1)spock\n2)scissors');
      let sClarify = readline.question();
      if (sClarify === '1') {
        userChoice = 'spock';
      } else if (sClarify === '2') {
        userChoice = 'scissors';
      } else {
        prompt('Please choose either 1 or 2');//create validation
        sClarify = readline.question();
      }
      break;
    }
  }

  while (!VALID_CHOICES.includes(userChoice)) {
    prompt('Not a valid entry.  Please choose either rock, paper, scissors, spock, or lizard.');
    userChoice = readline.question().toLowerCase();

  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];


  if ((userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper') ||
    (userChoice === 'spock' && computerChoice === 'rock') ||
    (userChoice === 'lizard' && computerChoice === 'spock') ||
    (userChoice === 'rock' && computerChoice === 'lizard') ||
    (userChoice === 'paper' && computerChoice === 'spock') ||
    (userChoice === 'spock' && computerChoice === 'scissors') ||
    (userChoice === 'scissors' && computerChoice === 'lizard') ||
    (userChoice === 'lizard' && computerChoice === 'paper')) {
    prompt('You win!');
    userCounter++;
  } else if ((userChoice === 'scissors' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'spock') ||
    (userChoice === 'rock' && computerChoice === 'spock') ||
    (userChoice === 'rock' && computerChoice === 'paper') ||
    (userChoice === 'paper' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'lizard') ||
    (userChoice === 'spock' && computerChoice === 'paper') ||
    (userChoice === 'spock' && computerChoice === 'lizard') ||
    (userChoice === 'lizard' && computerChoice === 'rock') ||
    (userChoice === 'lizard' && computerChoice === 'scissors')) {
    prompt('Computer wins!');
    compCounter++;
  } else {
    prompt('It\'s a tie!');
  }
  if ((userCounter === 1 && compCounter === 0)) {
    console.log(`You chose : ${userChoice}.  The computer chose : ${computerChoice}. You have won ${userCounter} game.  The computer has won ${compCounter} games.`);
  } else if ((userCounter === 0 && compCounter === 1)) {
    console.log(`You chose : ${userChoice}.  The computer chose : ${computerChoice}. You have won ${userCounter} games.  The computer has won ${compCounter} game.`);
  } else if ((userCounter === 1 && compCounter === 1)) {
    console.log(`You chose : ${userChoice}.  The computer chose : ${computerChoice}. You have won ${userCounter} game.  The computer has won ${compCounter} game.`);
  } else {
    console.log(`You chose : ${userChoice}.  The computer chose : ${computerChoice}. You have won ${userCounter} games.  The computer has won ${compCounter} games.`);
  }
  prompt('Would you like to play again? y/n');
  let answer = readline.question().toLowerCase();
  while (answer !== 'n' && answer !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  if (answer !== 'y') {
    break;
  }

}
