const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
function prompt(msg) {
  console.log(`=> ${msg}`);
}
let compCounter = 0;
let userCounter = 0;

while (true) {
  prompt('---Let\'s Play Rock, Paper, Scissors!---\nBest of 5 wins!');
  prompt(`Please choose either ${VALID_CHOICES.join(', ')} 
  ------>\nOr enter r for rock, p for paper, l for lizard, s for spock/scissors (clarification required)`);
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
      let sClarified = readline.question();
      if (sClarified === '1') {
        userChoice = 'spock';
        break;
      } else if (sClarified === '2') {
        userChoice = 'scissors';
        break;
      }
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
  if (userCounter === 3) {
    console.log('-----You won!------');
    break;
  } else if (compCounter === 3) {
    console.log('-------Computer won!------');
    break;
  }
  if ((userCounter !== 3) && (compCounter !== 3)) {
    prompt('Would you like to play again? y/n');
    let answer = readline.question().toLowerCase();
    if (answer === 'n') {
      console.clear();
      break;
    }
    while (answer !== 'n' && answer !== 'y') {
      prompt('Please enter "y" or "n".');
      answer = readline.question().toLowerCase();
    }
    if (answer === 'n') {
      console.clear();
      break;
    }
  }
}

