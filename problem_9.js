// Challenge: Calculate the Average

// Write a function called calculateAverage that takes an array of numbers as 
// input and returns the average of those numbers.
// Your function should:
// Accept an array of numbers as input.
// Calculate the sum of all the numbers in the array. 
// Divide the sum by the total number of elements in the array to find the average.
// Return the calculated average.

// my solution: 

// const calculateAverage = (arr)=>{
//     let sum =0;
//     arr.forEach((e)=>{
//         sum+= e;
//     });
//     let avg = (sum / arr.length);
//     return avg;
// }

// console.log(calculateAverage([1,2,3,4,5]));


// my solution : 2

// const calculateAverage = (arr)=>{
//     let sum = arr.reduce((acc,cur)=>{
//         acc = acc + cur;
//      return acc;
//     },0);

//     let avg = sum / arr.length;

//     return avg;
// }
// console.log(calculateAverage([1,2,3]));