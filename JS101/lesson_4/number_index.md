## Problem
Input : Array of numbers
Output : Array of numbers with the numbers of odd indices multiplied by 2

Explicit: Return even indices numbers the same and multiply odd indices by 2
Implicit: Assume only arrays of numbers can be entered. Numbers must remain in the same position as when they started. Mutate the original array
## Examples
[1, 2, 3] // [1, 4, 3]
## Data structure
Array
## Algorithm
1. Check if indice of number is odd or even
2. If even return unchanged, else if odd multiply by 2 and return the result.
3. Repeat until all numbers in array are checked
4. Reassign array to new values
## Code