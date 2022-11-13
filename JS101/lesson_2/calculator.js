// Ask the user for the first number
// Ask the user for the second number
// Ask the user for an operation to perform
// Perform the operation on the two numbers
// Print the result to the terminal

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt('Welcome to the Calculator');

prompt('Please enter a number');
let number1 = readline.question();
while (invalidNumber(number1)) {
  prompt('Please enter a valid number');
  number1 = readline.question();
}
prompt('Please enter a second number');
let number2 = readline.question();
while (invalidNumber(number2)) {
  prompt('Please enter a valid number');
  number2 = readline.question();
}

prompt('Please choose the operation you like to perform\n1)Add 2)Subtract 3) Multiply 4) Divide');
let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('Please choose either 1, 2, 3, or 4');
  operation = readline.question();
}

let output;
switch (operation) {
  case '1': output = Number(number1) + Number(number2);
    break;
  case '2': output = Number(number1) - Number(number2);
    break;
  case '3': output = Number(number1) * Number(number2);
    break;
  case '4': output = Number(number1) / Number(number2);
    break;
}
console.log(`The result is : ${output}`);