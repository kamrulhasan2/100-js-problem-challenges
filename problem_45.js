//? Q:45. Write a function to check if a given number is a happy number.

//? A happy number is a number which ends in 1 when you repeatedly replace it with the sum of the square of each digit.

//* Constraints:
//? The input will be a positive integer.


// const isHappy = (num) => {};
// console.log(isHappy(19)); // Output: true
// console.log(isHappy(4)); // Output: false


// My solution
const isHappy = (num) => {
    const seen = new Set();

    while (num !== 1 && !seen.has(num)) {
        seen.add(num);
        let sum = 0;
        let numStr = num.toString();
        for (let i = 0; i < numStr.length; i++) {
            sum += Math.pow(parseInt(numStr[i]), 2);
        }
        num = sum;
    }

    return num === 1;
};

console.log(isHappy(19)); // Output: true
console.log(isHappy(4)); // Output: false
console.log(isHappy(7)); // Output: true


// Explanation of Happy Number Logic:
// A happy number is defined by the following process: starting with any positive integer,
// replace the number by the sum of the squares of its digits, and repeat the process until
//  the number equals 1 (where it will stay), or it loops endlessly in a cycle that does
//  not include 1. If it ends in 1, then the number is happy.

// For example, 19 is a happy number:
// 1. 1^2 + 9^2 = 82
// 2. 8^2 + 2^2 = 68
// 3. 6^2 + 8^2 = 100
// 4. 1^2 + 0^2 + 0^2 = 1

// The function works by using a Set to track numbers we've seen before to detect cycles.
// If we reach 1, we return true; if we see a number we've seen before, we return false.

// For example, 7 is also a happy number:
// 1. 7^2 = 49
// 2. 4^2 + 9^2 = 16 + 81 = 97
// 3. 9^2 + 7^2 = 81 + 49 = 130
// 4. 1^2 + 3^2 + 0^2 = 1 + 9 + 0 = 10
// 5. 1^2 + 0^2 = 1
// Thus, 7 is a happy number as well.

// For example, 4 is not a happy number:
// 1. 4^2 = 16
// 2. 1^2 + 6^2 = 1 + 36 = 37
// 3. 3^2 + 7^2 = 9 + 49 = 58
// 4. 5^2 + 8^2 = 25 + 64 = 89
// 5. 8^2 + 9^2 = 64 + 81 = 145
// 6. 1^2 + 4^2 + 5^2 = 1 + 16 + 25 = 42
// 7. 4^2 + 2^2 = 16 + 4 = 20
// 8. 2^2 + 0^2 = 4 + 0 = 4
// Thus, 4 is not a happy number.


//==============================================================

// Explanation of code step by step:
// 1. We define a function `isHappy` that takes a positive integer `num` as input.
// 2. We create a Set called `seen` to keep track of numbers we've encountered during 
// the process.
// 3. We enter a while loop that continues as long as `num` is not 1 and we haven't seen
//  `num` before.
// 4. Inside the loop, we add the current `num` to the `seen` Set.
// 5. We initialize a variable `sum` to 0, which will hold the sum of the squares of the
//  digits of `num`.
// 6. We convert `num` to a string to easily access each digit.
// 7. We iterate over each character in the string representation of `num`, convert it
//  back to an integer, square it, and add it to `sum`.
// 8. After processing all digits, we update `num` to be the computed `sum`.
// 9. The loop continues until `num` becomes 1 (indicating it's a happy number) or we 
// encounter a number we've seen before (indicating it's not a happy number).
// 10. Finally, we return true if `num` is 1, and false otherwise.
//==============================================================