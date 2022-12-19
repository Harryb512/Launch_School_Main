let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};
function selectFruit(obj) {
  let newArr = Object.entries(obj);
  let isFruit = [];
  for (let index = 0; index < newArr.length; index++) {
    if (newArr[index][1] === 'Fruit') {
      isFruit.push(newArr[index]);
    }
  }
  let newObj = Object.fromEntries(isFruit);
  return console.log(newObj);
}

selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }
console.log(produce);