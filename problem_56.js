//? Q:56. Write a function to find the maximum subarray sum.

//* Constraints:
//? The input array will contain at least one number.


// const maxSubArray = (nums) => {};
// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6


// My solution (Kadane's Algorithm)
const maxSubArray = (nums) => {
    let maxSoFar = nums[0];
    let maxEndingHere = nums[0];

    for (let i = 1; i < nums.length; i++) {
        maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    return maxSoFar;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6
console.log(maxSubArray([1])); // Output: 1
console.log(maxSubArray([5, 4, -1, 7, 8])); // Output: 23

// Kadane's Algorithm Explanation:
// 1. Initialize two variables, maxSoFar and maxEndingHere, to the first element 
// of the array.
// 2. Iterate through the array starting from the second element.
// 3. For each element, update maxEndingHere to be the maximum of the current 
// element and the sum of maxEndingHere and the current element.
// 4. Update maxSoFar to be the maximum of maxSoFar and maxEndingHere.
// 5. Return maxSoFar as the result.
// This algorithm runs in O(n) time complexity, making it efficient for large arrays.

