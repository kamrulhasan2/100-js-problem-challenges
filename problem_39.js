//? Q:39. Write a function to find the missing number in an array of numbers from 1 to N.

//* Constraints:
//? The input array will contain numbers from 1 to N, with one number missing.
//? The array will not be sorted.


// const findMissingNumber = (arr, n) => {};
// console.log(findMissingNumber([1, 2, 4, 5], 5)); // Output: 3
// console.log(findMissingNumber([1, 3], 3)); // Output: 2
// console.log(findMissingNumber([1, 2, 3, 4, 5, 6, 8, 9, 10], 10)); // Output: 7


// My solution
const findMissingNumber = (arr, n) => {
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
};

console.log(findMissingNumber([1, 2, 4, 5], 5));
console.log(findMissingNumber([1, 3], 3));
console.log(findMissingNumber([1, 2, 3, 4, 5, 6, 8, 9, 10], 10));
