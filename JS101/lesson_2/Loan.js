/*
ask user for loan amount
validate number
ask user for interest rate
validate number
ask user for duration of loan
validate number
calculate monthly interest rate
calculate loan duration in months
implement formula
return monthly payment
*/

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}
function invalidNumber(num) {
  return num.trim() === '' || Number.isNaN(Number(num)) || Number(num) <= 0;
}
while (true) {
  prompt('Hello, Welcome to the Loan Calculator\n-------------------------');


  prompt('Please enter the total amount of the loan');
  let loanAmount = readline.question();

  while (invalidNumber(loanAmount)) {
    prompt('Please enter a valid number');
    loanAmount = readline.question();
  }

  prompt('Please select the format in which you would like to enter your APR\n1) APR as a percentage (i.e. Enter 5 if APR is 5%)\n2) APR as a decimal (i.e. Enter .05 if APR is 5%) ');
  let aprFormat = readline.question();

  while (!['1', '2'].includes(aprFormat)) {
    prompt('Please enter either 1 or 2');
    aprFormat = readline.question();
  }

  prompt('Please enter your APR');
  let annualInterest = readline.question();

  while (invalidNumber(annualInterest)) {
    prompt('Please enter a valid number');
    annualInterest = readline.question();
  }

  let monthlyInterest;

  if (aprFormat === '1') {
    monthlyInterest = Number(annualInterest) / 100 / 12;
  } else if (aprFormat === '2') {
    while (annualInterest > 1 || annualInterest < 0) {
      prompt('Invalid format. Please enter a number that is less than 1 and greater than 0');
      annualInterest = readline.question();

    }
    monthlyInterest = Number(annualInterest) / 12;
  }

  prompt('Please enter length of loan (years)');
  let durationYears = readline.question();

  while (invalidNumber(durationYears)) {
    prompt('Please enter a valid number');
    durationYears = readline.question();
  }

  let durationMonths = Number(durationYears) * 12;

  let monthlyPayment = loanAmount *
    (monthlyInterest /
      (1 - Math.pow((1 + monthlyInterest), (-durationMonths))));

  prompt(`Your monthly payment is : $${monthlyPayment.toFixed(2)}`);

  prompt('Would you like to make another calculation?\nEnter y for yes or n for no');
  let continueWorking = readline.question().toLowerCase();
  while (continueWorking[0] !== 'y' && continueWorking[0] !== 'n') {
    prompt('Please enter either y or n');
    continueWorking = readline.question().toLowerCase();
  }
  if (continueWorking === 'n') {
    break;
  }
}