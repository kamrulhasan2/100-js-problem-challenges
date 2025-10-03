//? Q:58. Write a function to find the majority element in an array.

//* Constraints:
//? You may assume that the array is non-empty and the majority element always exist in the array.


// const majorityElement = (nums) => {};
// console.log(majorityElement([3, 2, 3])); // Output: 3
// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2


// My solution (Boyer-Moore Voting Algorithm)
const majorityElement = (nums) => {
    let count = 0;
    let candidate = null;

    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    return candidate;
};

console.log(majorityElement([3, 2, 3])); // Output: 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2
