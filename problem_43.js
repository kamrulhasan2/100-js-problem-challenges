//? Q:43. Write a function to perform a binary search on a sorted array.

//? Binary search is an efficient algorithm for finding an item from a sorted list of items.

//* Constraints:
//? The input array will be sorted in ascending order.
//? If the element is found, return its index; otherwise, return -1.


// const binarySearch = (arr, target) => {};
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 4)); // Output: 3
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 7)); // Output: -1


// My solution 1: (iterative)

const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
};

// my solution 2: (recursive)
// const binarySearch = (arr, target, left = 0, right = arr.length - 1) => {
//     if (left > right) {
//         return -1;
//     }

//     const mid = Math.floor((left + right) / 2);
//     if (arr[mid] === target) {
//         return mid;
//     } else if (arr[mid] < target) {
//         return binarySearch(arr, target, mid + 1, right);
//     } else {
//         return binarySearch(arr, target, left, mid - 1);
//     }
// };

console.log(binarySearch([1, 2, 3, 4, 5, 6], 4)); // Output: 3
console.log(binarySearch([1, 2, 3, 4, 5, 6], 7)); // Output: -1
console.log(binarySearch([], 1)); // Output: -1
