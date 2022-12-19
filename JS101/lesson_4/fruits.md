## Problem
input: object (key value pair)
output: object (key value pair)

Explicit requirements : return key-value pairs that have the value of Fruit
Implicit requirements : case does not matter, must be an object
## Examples
let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

selectFruit(produce); // => { apple:'Fruit', pear: 'Fruit' }
## Data Structure
object with key value pairs
## Algorihm
1. check if value of first key is 'Fruit'
2. if it is, return key value pair
3. repeat until we've checked all key value pairs
## Code