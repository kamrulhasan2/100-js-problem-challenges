// Coding Challenge
// 17: Write a function to convert a string to camelCase & snake_case.

// Example usage:
// console.log(toCamelCase("hello world thApa")); // Output: helloworld

// my solution: 1

// const snake_case = (str)=>{
//     let strArr = str.split("");

//     strArr = strArr.map((char,i)=>{
//         if(char === " "){
//            return char = "_";
//         }
//         else return char;
//     })

 
//     return strArr.join("");
// }

// console.log(snake_case("hello world thApa"));



//  solution: 2



// const toCamelCase = (str)=>{
//     let strArr = str.trim().split(" ");

//     strArr = strArr.map((word,i)=>{
//         if(i === 0 ) {
//             return word.toLowerCase();
//         }
//         else{
//            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//         }
//     })

//     return strArr.join("");
// }

// console.log(toCamelCase("Hello world thApa"));

