//? Q:36. Write a function to find the first non-repeated character in a string.

//? Your task is to implement the findNonRepeatedChar function using
// JavaScript and return the first character that is not repeated in the string.


//* Constraints:
//? The input string may contain any printable ASCII characters.
//? The function should be case-sensitive.
//? If all characters in the string are repeated, the function should return null.
//? If the string is empty, the function should return null.


// const findNonRepeatedChar = (str) => {};
// console.log(findNonRepeatedChar("aabccdeff")); // Output: "b"
// console.log(findNonRepeatedChar("aabbcc")); // Output: null
// console.log(findNonRepeatedChar("")); // Output: null


// My solution
const findNonRepeatedChar = (str) => {
    const charCount = {};

    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (const char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null;
};

// // My solution 2 (using Map)
// const findNonRepeatedChar = (str) => {
//     const charCount = new Map();

//     for (const char of str) {
//         charCount.set(char, (charCount.get(char) || 0) + 1);
//     }

//     for (const char of str) {
//         if (charCount.get(char) === 1) {
//             return char;
//         }
//     }

//     return null;
// };


console.log(findNonRepeatedChar("aabccdeff"));
console.log(findNonRepeatedChar("aabbcc"));
console.log(findNonRepeatedChar(""));
console.log(findNonRepeatedChar("heelloo"));
