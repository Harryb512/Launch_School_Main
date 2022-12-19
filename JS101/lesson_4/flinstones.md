## Problem
Input : Array of names
Output : Object filled with names of names wiht their index numbers

Explicit : The names are the keys and the values are the positions in the array

Implicit : There are no undefined positions in the array

## Examples
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

return { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

## Data structure
Object

## Algorithm
1. Create empty object
2. Loop through the array
3. Set keys of object equal to names in the array
4. set values of object equal to the corresponding index of the name
5. return object
 

## Code

let newObj = {};
