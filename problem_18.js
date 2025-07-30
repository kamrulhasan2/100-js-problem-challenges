// Coding Challenge
//Q:18 Write a function to check if a character is uppercase or lowercase.

//* Constraints:
//? The input char will be a single character.
//? The character can be any printable ASCII character.
//? You can assume that the input will always be a string of length 1.

// Example usage:
// console.log(isUpperCase("s")); // Output: true 
// console.log(isLowerCase("b")); // Output: true

// Notes:
//? Ensure that the function correctly identifies uppercase characters 



// my solution:

// const isUpperOrLowerCase = (char)=>{
//     const lowercaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//     const uppercaseArr = lowercaseArr.join("").toUpperCase().split("");

//     if(lowercaseArr.includes(char)){
//         return 'lowercase';
//     }
//     if(uppercaseArr.includes(char)){
//         return 'UPPERCASE';
//     }
//     else return 'false';
// }

// console.log(isUpperOrLowerCase('A')); //UPPERCASE
// console.log(isUpperOrLowerCase('b')); //lowercase
// console.log(isUpperOrLowerCase('z')); //lowercase
// console.log(isUpperOrLowerCase('Abc')); //false



// // solution: 1

// const isUpperOrLowerCase = (char)=>{
//     if(char.length > 1) return false;

//     if(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90){
//         return 'UPPERCASE';
//     }
//     if(char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122){
//         return 'lowercase';
//     }
   
// }

// console.log(isUpperOrLowerCase('A')); //UPPERCASE
// console.log(isUpperOrLowerCase('b')); //lowercase
// console.log(isUpperOrLowerCase('z')); //lowercase
// console.log(isUpperOrLowerCase('Abc')); //false



// solution: 2

// const isUpperOrLowerCase = (char)=>{
//     if(char.length > 1) return false;

//    if(char === char.toUpperCase()){
//     return 'UPPERCASE';
//    }
//    else if(char != char.toUpperCase()){
//     return 'lowercase';
//    }
//    else false;
// }

// console.log(isUpperOrLowerCase('A')); //UPPERCASE
// console.log(isUpperOrLowerCase('b')); //lowercase
// console.log(isUpperOrLowerCase('z')); //lowercase
// console.log(isUpperOrLowerCase('Abc')); //false
