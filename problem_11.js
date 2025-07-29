//11: Write a function that takes a number as input and returns the sum of its digits.
// Example usage:
// console.log(sumofDigits (1234)); // Output: 10 
// console.log(sumofDigits (4321)); // Output: 10 
// console.log(sumofDigits (123456)); // Output: 21
// Constraints:
// The input number will always be a positive integer.
// The input number can have multiple digits.
// The output should be the sum of all the digits in the input number.

//my solution:

// const sumofDigits = (num) =>{

//     if(num< 0) return false;

//     let sum = num.toString().split('').reduce((acc,cur)=>{
//         acc = Number(cur) + acc ;

//         return acc;
//     },0);
    
    
//     return sum;
// }

// console.log(sumofDigits(1211)); // 5
// console.log(sumofDigits(1234)); // 10
// console.log(sumofDigits (123456)); // 21
// console.log(sumofDigits (-1236)); // false


// solution : 2

// const sumofDigits = (num)=>{
//     if (num < 0 ) return false;

//     let sum = Array.from(String(num),Number).reduce((acc,cur)=>{
//         return acc += cur;
//     },0);

//     return sum;
// }

// console.log(sumofDigits(1211)); // 5
// console.log(sumofDigits(1234)); // 10
// console.log(sumofDigits (123456)); // 21
// console.log(sumofDigits (-1236)); // false

