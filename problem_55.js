//? Q:55. Write a function to find the two numbers in an array that add up to a 
// specific target.

//* Constraints:
//? Each input would have exactly one solution, and you may not use the same element twice.


// const twoSum = (nums, target) => {};
// console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]


// My solution
const twoSum = (nums, target) => {
    const numMap = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numMap[complement] !== undefined) {
            return [numMap[complement], i];
        }
        numMap[nums[i]] = i;
    }
};

console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6));  // Output: [1, 2]


// Explain example details:
/*
* Example 1: twoSum([2, 7, 11, 15], 9)
*
* 1. Initialize numMap = {}.
* 2. i = 0, nums[0] = 2, complement = 7. 7 is not in numMap. Add 2 to numMap: numMap = {2: 0}.
* 3. i = 1, nums[1] = 7, complement = 2. 2 is in numMap. Return [numMap[2], 1] which is [0, 1].
*
* Example 2: twoSum([3, 2, 4], 6)
*
* 1. Initialize numMap = {}.
* 2. i = 0, nums[0] = 3, complement = 3. 3 is not in numMap. Add 3 to numMap: numMap = {3: 0}.
* 3. i = 1, nums[1] = 2, complement = 4. 4 is not in numMap. Add 2 to numMap: numMap = {3: 0, 2: 1}.
* 4. i = 2, nums[2] = 4, complement = 2. 2 is in numMap. Return [numMap[2], 2] which is [1, 2].
*/