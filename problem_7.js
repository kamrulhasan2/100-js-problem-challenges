// Write a function findMax that takes an array of numbers as input and 
// returns the maximum number in the array.
// Example usage:
// console.log(findMax ( [1, 5, 3, 9, 21])); // Output: 21 
// console.log(findMax ( [-10, -5, -3, -9, -2])); // Output: -2 
// console.log(findMax( [5])); // Output: 5

// my solution:

// const findMax = (arr)=>{
//     return Math.max(...arr);
// }

// console.log(findMax([1, 35, 3, 9, 21,5]));
// console.log(findMax ( [-10, -5, -3, -9, -2]));

// solution 2:

// const findMax = (arr)=>{
//     arr = arr.sort((a,b)=> b - a);

//     return arr[0];
// }


// console.log(findMax([1, 35, 3, 9, 21,5]));
// console.log(findMax ( [-10, -5, -3, -9, -2]));

// solution: 3 (imperative way)

// const findMax = (arr)=>{
//     let max = arr[0];
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]> max ){
//             max = arr[i];
//         }
//     }
//     return max;
// }

// console.log(findMax([1, 35, 3, 9, 21,5]));
// console.log(findMax ( [-10, -5, -3, -9,-1, -2]));
