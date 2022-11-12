/*  

ask user for loan amount
ask user for interest rate
ask user for duration of loan
implement formula
return monthly payment */

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}
function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt('Welcome to the mortgage calculator');
prompt('---------------------------');

prompt('Please enter the loan amount');
let loanAmount = readline.question();
while (invalidNumber(loanAmount)) {
  prompt('Please enter a valid number');
  loanAmount = readline.question();
}

prompt('Please enter the interest rate\nExample 5% = 5 6% = 6');
let interestRate = readline.question();

while (invalidNumber(interestRate)) {
  prompt('Please enter a number that is greater than 0');
  interestRate = readline.question();
} while (interestRate <= 0) {
  prompt('Interest rate must be more than 0');
  interestRate = readline.question();
  interestRate = interestRate / 100 / 12
}


prompt('Please enter length of loan in years');
let length = readline.question();
while (invalidNumber(length)) {
  prompt('Please enter a valid number');
  length = readline.question();
} while (length > 10) {
  prompt('Loan term is too long.  Please choose a term that is 10 years or less')
  length = length * 12;
}


let monthlyPayment = loanAmount * (interestRate / (1 - Math.pow((1 + interestRate), (-length))));
console.log(`Your monthly payment is ${monthlyPayment}`);