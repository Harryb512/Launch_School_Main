function multiply(array, number) {
  let multipliedNumbers = [];

  for (let index = 0; index < array.length; index++) {
    let currentIndex = array[index];
    multipliedNumbers.push(currentIndex * number);
  }
  return console.log(multipliedNumbers);
}

let myNumbers = [1, 4, 3, 7, 2, 6];
multiply(myNumbers, 3);
console.log(myNumbers);