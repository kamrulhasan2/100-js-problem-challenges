
// 14: Write a function called isPowerOf Two that takes an integer num as input and returns
//  true if num is a power of two, and false otherwise.

// Example usage:
// console.log(isPowerOfTwo (8)); // Output: true 
// console.log(isPowerOfTwo (7)); // Output: false

// Notes:
// The input num will be a positive integer.
// Zero (0) and negative integers are not considered powers of two.
// The function should return true if the given number is a power of 2, 
// and false otherwise.

//Homework
// we can solve it using bitwise operator too but its your chance to do it and let
//  me know in the comment section


// my solution: 

// const isPowerOfTwo = (num)=>{
//     if(num % 2 === 0){
//         for(let i=2; i<=num; i = i*2){
//             if( i === num) return true;
//         }
//         return false;
//     }
//     else return false;
// }

// console.log(isPowerOfTwo (2)); // true
// console.log(isPowerOfTwo (8)); // true 
// console.log(isPowerOfTwo (7)); // false
// console.log(isPowerOfTwo (6)); //false
// console.log(isPowerOfTwo (10)); //false
// console.log(isPowerOfTwo (-10)); //false
// console.log(isPowerOfTwo (-8)); //false


// // solution: 1

// const isPowerOfTwo = (num)=>{
//     let op = false;

//     for(let i=1; i<num ; i++){
//         if(2**i === num){
//             op = true;
//         }
//     }
//     return op;
// }


// console.log(isPowerOfTwo (2)); // true
// console.log(isPowerOfTwo (8)); // true 
// console.log(isPowerOfTwo (7)); // false
// console.log(isPowerOfTwo (6)); //false
// console.log(isPowerOfTwo (10)); //false
// console.log(isPowerOfTwo (-10)); //false
// console.log(isPowerOfTwo (-8)); //false





