//? Q:52. Write a function to implement atoi (string to integer).

//what is atoi?
//? atoi is a function that converts a string to an integer. 
// The function first discards as many whitespace characters as necessary 
// until the first non-whitespace character is found. Then, starting from this
//  character, takes an optional initial plus or minus sign followed by as many 
// numerical digits as possible, and interprets them as a numerical value.
//? The string can contain additional characters after those that form the integral
// number, which are ignored and have no effect on the behavior of this function.

//* Constraints:
//? The function should handle optional leading whitespace.
//? The function should handle an optional sign (+ or -).
//? The function should parse as many numerical digits as possible, and ignore
//  the rest of the string.
//? If the first non-whitespace character sequence is not a valid integral number,
//  or if no such sequence exists because either the string is empty or it contains
//  only whitespace characters, no conversion is performed.
//? If no valid conversion could be performed, a zero value is returned.


// const myAtoi = (s) => {};
// console.log(myAtoi("42")); // Output: 42
// console.log(myAtoi("   -42")); // Output: -42
// console.log(myAtoi("4193 with words")); // Output: 4193
// console.log(myAtoi("words and 987")); // Output: 0


// My solution
const myAtoi = (s) => {
    const num = parseInt(s, 10);
    if (isNaN(num)) {
        return 0;
    }
    return num;
};

console.log(myAtoi("42")); // Output: 42
console.log(myAtoi("   -42")); // Output: -42
console.log(myAtoi("4193 with words")); // Output: 4193
console.log(myAtoi("words and 987")); // Output: 0
console.log(myAtoi("-91283472332")); // Note: This will be handled by parseInt within its limits

// Explain the code
// The function myAtoi takes a string s as input and uses the built-in parseInt function
//  to convert it to an integer. The second argument, 10, specifies that the number 
// is in base 10.
// If parseInt cannot convert the string to a number, it returns NaN (Not a Number).
// The function checks if the result is NaN using isNaN(). If it is, the function
// returns 0.
// Otherwise, it returns the converted integer.