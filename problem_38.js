//? Q:38. Write a function to rotate an array to the right by a given number of steps.

//* Constraints:
//? The number of steps will be a non-negative integer.


// const rotateArray = (arr, steps) => {};
// console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]
// console.log(rotateArray([1, 2, 3], 5)); // Output: [3, 1, 2]
// console.log(rotateArray([], 3)); // Output: []


// My solution
const rotateArray = (arr, steps) => {
    if (arr.length === 0) {
        return [];
    }
    const effectiveSteps = steps % arr.length;
    const rotatedPart = arr.slice(-effectiveSteps);
    const remainingPart = arr.slice(0, arr.length - effectiveSteps);
    return rotatedPart.concat(remainingPart);
};

console.log(rotateArray([1, 2, 3, 4, 5], 2));
console.log(rotateArray([1, 2, 3], 5));
console.log(rotateArray([1, 2, 3, 4, 5, 6], 3));
console.log(rotateArray([], 3));
