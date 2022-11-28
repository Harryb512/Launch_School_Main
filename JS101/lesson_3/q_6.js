let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };
let newAges = Object.assign(ages, additionalAges);

console.log(newAges);