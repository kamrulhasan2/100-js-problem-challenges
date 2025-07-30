//* Coding Challenge
//Q:19 Write a function to check if a given string starts with a specific substring.

//Input:
// str: A string (e.g., "Hello world").
//7 substr: A substring to check if it starts the given string (e.g., "Hello").
//? Output: true if the given string starts with the specified substring, otherwise false.

// Example usage:
// console.log(startsWith("Hello world", "hello")); // Output: true
// console.log(startsWith("Hello world", "World")); // Output: false

//my solution: 

// const startsWith = (str,word)=>{

//     str = str.trim().toLowerCase();
//     word = word.trim().toLowerCase();

//     const strArr = str.split(" ");

//     if(strArr[0] === word) return true;
//     else return false;
// }

// console.log(startsWith("Hello world", "hello")); // Output: true
// console.log(startsWith("Hello world", "World")); // Output: false


//solution : 1

// const startsWith = (str,word)=>{
//      str = str.trim().toLowerCase();
    // word = word.trim().toLowerCase();

//     return str.startsWith(word);
// }

// console.log(startsWith("Hello world", "hello")); // Output: true
// console.log(startsWith("Hello world", "World")); // Output: false



//solution : 2

// const startsWith = (str,word)=>{
//     str = str.trim().toLowerCase();
//     word = word.trim().toLowerCase();

//     return str.slice(0, word.length) === word;
// }

// console.log(startsWith("Hello world", " hello")); // Output: true
// console.log(startsWith("Hello world", " World")); // Output: false