let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

// let newArr = str1.split(' ').pop();
// let newArr2 = newArr[newArr.length - 1];
// debugger;
// if ((newArr2 === '!')) {
//   console.log('Ends with !');
// } else { console.log('does not end with !') };

function lastLetter(str) {
  let newArr = str.split(' ').pop();
  let newArr2 = newArr[newArr.length - 1];
  if ((newArr2 === '!')) {
    console.log('Ends with !');
  } else { console.log('does not end with !') };
}
lastLetter(str1);
lastLetter(str2);