// Write a JavaScript function to count the occurrences of each element in an array
//  and store the counts in an object. The keys of the object should represent the
//  elements of the array, and the values should represent the number of times each
//  element appears in the array.

// Here's what the function should do:
// Accept an array of numbers as input.
// Create an empty object called counts to store the counts of each element.
// Iterate through each number in the array.

// For each number, increment the count in the counts object.
// If the count for a number does not exist yet,
// initialize it to 1.

// Return the counts object containing the counts of each element.

// const numbers = [1, 2, 2, 3, 1, 4, 2];
// Output
//{ '1': 2, '2': 3, '3': 1, '4': 1 }
//  Constraints:
// The input array may contain positive integers only.

//solution:========================================================================

// const occurrencesNum = (arr) => {
//     const obj = {};
    
//     arr.forEach(element => {
//         // If element exists, increment it, otherwise initialize to 1
//         obj[element] = (obj[element] || 0) + 1;
//     });

//     return obj;
// }


// const numbers = [1, 2, 2, 3, 1, 4, 2];

// console.log(occurrencesNum(numbers));

//=========================================================================================
/*****
 * Let's break down how obj[element] = (obj[element] || 0) + 1 works 
 * step by step:

obj[element] accesses the value for the current number in our object
The || operator checks if the left side exists, if not it uses the 
right side (0)
Then we add 1 to whichever value was selected
Let's see it in action with the array [1, 2, 2, 3, 1, 4, 2]:

First iteration (element = 1):
obj[1] doesn't exist yet
So (undefined || 0) evaluates to 0
0 + 1 = 1
Result: { '1': 1 }

Second iteration (element = 2):
obj[2] doesn't exist yet
(undefined || 0) evaluates to 0
0 + 1 = 1
Result: { '1': 1, '2': 1 }

When we hit 2 again:
obj[2] exists and is 1
(1 || 0) evaluates to 1
1 + 1 = 2
Result: { '1': 1, '2': 2 }

This pattern continues until we've counted all numbers in the array.
 It's an elegant way to handle both initialization and increment in 
 a single line of code.
 * 
 */
