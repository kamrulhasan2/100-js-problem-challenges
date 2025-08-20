
//* Write a fonction called repeatstring that takes two parameters:
// str: A string that needs to be repeated.
// num: An integer representing the number of times the string should be repeated.
// The function should repeat the input string str the specified number of times now
//  and reture the resulting string.

// Example usage:
// console.log(repeatString("abc", 5)); // Output: "abcabcabcabcabc"

//* Constraints:
//? The input string str will contain only aiplammeric characters and punctuation marks.
//? The input number nun will to a non-negative integer.
//7 The output string length should not exceed the length of str multiplied by cum,

//my solution 1:

// const repeatString = (str,num) =>{
//     const arr = []

//     for(let i=0; i<num; i++){
//         arr.push(str);
//     }

//     if(num > 0){
//         return arr.join("");
//     }
//     else{
//         return str;
//     }
// }

// console.log(repeatString("abc", 0));  // abcabcabcabcabc



//solution 2:

// const repeatString = (str,num)=>{
//     return num > 0 ? str.repeat(num) : str;
// }

// console.log(repeatString("abc", 5)); //abcabcabcabcabc
