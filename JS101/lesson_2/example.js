
let p = 30000;
let j = 0.12;
let n = 5;
let m = p * (j / (1 - Math.pow((1 + j), (-n))));
console.log(`${m}`);