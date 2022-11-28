let oldArr = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

// oldArr = [].concat(...oldArr);
// console.log(oldArr);


// let newArr = oldArr.reduce((acc, value) => {
//   return acc.concat(value);
// }, []);
// console.log(newArr);

console.log(oldArr.flat());
