let myNumbers = [1, 4, 3, 7, 2, 6];

function doubleNumbers(arr) {
  myNumbers = arr.map(num => num * 2);
  return myNumbers;
}


console.log(doubleNumbers(myNumbers)); // => [2, 8, 6, 14, 4, 12]


