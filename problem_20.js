//Q:20. Write a function to reverse a string without using any built-in methods or 
// libraries. The function should take a string as input and return the reversed string.

// Example usage:
// console.log(reverseString("hello")); // Output: olleh


// my solution: 1 // not acceptable according to condition
// const reverseString =(str)=>{
//     return str.split("").reverse().join("");
// }

// console.log(reverseString("hello")); // Output: olleh


// my solution: 2

// const reverseString =(str)=>{
//     const newArr =[];
//     const strArr = str.trim().split("").map((char)=>{
//         newArr.unshift(char);
//     })
    
//     return newArr.join("");
// }

// console.log(reverseString("hello")); 


// solution:

// const reverseString =(str)=>{
//     let newStr = "";
//     for(let i= str.length -1; i >= 0; i--){
//         newStr += str[i];
//     }
//     return newStr;
// }

// console.log(reverseString("hello")); 




