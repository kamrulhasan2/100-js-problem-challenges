// Challenge: Factorial Finder:
// Write a function factorial that takes a non-negative integer num as input 
// and returns its factorial. Thefactorial of a non-negative integer n, denoted as n!,
//  is the product of all positive integers less than or equal to n. The factorial
//   of 0 is defined as 1.

// Here are some examples of factorial calculations:
// factorial(0) => 1
 // factorial(1) => 1
  // factorial(2) => 2
   // factorial(3) => 6

//    my solution:

// const factorial = (num) =>{
//     if(num<0){
//         num = -(num);
//     }
//     let fac = 1;
//     for(let i=1 ; i<=num; i++){
//         fac = fac * i;
//     }
//     return fac;

// }

// console.log(factorial(0));
// console.log(factorial(2));
// console.log(factorial(3));
// console.log(factorial(4));
// console.log(factorial(5));

// my solution : 2 (using recursion function)

// const factorial = (num) =>{
//     if(num <0){
//         return `${num} is negative number, pleace provide a positive number.`;
//     }
//     if(num === 0){
//         return 1;
//     }else{
//         return num * factorial(num - 1);
//     }
    
// }

// console.log(factorial(0));
// console.log(factorial(2));
// console.log(factorial(3));
// console.log(factorial(4));
// console.log(factorial(5));
// console.log(factorial(-5));
