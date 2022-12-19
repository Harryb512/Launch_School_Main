function oddIndices(array) {
  for (let index = 0; index < array.length; index++) {
    if (array.indexOf(array[index]) % 2 === 1) {
      array[index] *= 2;
    }
  }
  return console.log(array);
}

let numbers = [1, 2, 3, 5, 8, 20];
oddIndices(numbers);
