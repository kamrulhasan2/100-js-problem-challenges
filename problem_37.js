//? Q:37. Write a function to flatten a nested array.

//? A nested array is an array that contains other arrays as its elements.

//* Constraints:
//? The function should be able to handle any level of nesting.


// const flattenArray = (arr) => {};
// console.log(flattenArray([1, [2, 3], [4, [5]]])); // Output: [1, 2, 3, 4, 5]
// console.log(flattenArray([1, 2, 3])); // Output: [1, 2, 3]
// console.log(flattenArray([])); // Output: []


// My solution (using flat)
// const flattenArray = (arr) => {
//     return arr.flat(Infinity);
// };

// My solution 2 (recursive)
const flattenArray = (arr) => {
    let flattened = [];
    for (const item of arr) {
        if (Array.isArray(item)) {
            flattened = flattened.concat(flattenArray(item));
        } else {
            flattened.push(item);
        }
    }
    return flattened;
};

console.log(flattenArray([1, [2, 3], [4, [5]]]));
console.log(flattenArray([1, 2, 3]));
console.log(flattenArray([]));
