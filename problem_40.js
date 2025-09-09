//? Q:40. Write a function to find the k-th largest element in an array.

//* Constraints:
//? k is a positive integer and is always valid (1 <= k <= array's length).


// const findKthLargest = (arr, k) => {};
// console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // Output: 5
// console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); // Output: 4


// My solution
const findKthLargest = (arr, k) => {
    const sortedArr = arr.sort((a, b) => b - a);
    return sortedArr[k - 1];
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
