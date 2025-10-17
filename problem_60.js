//? Q:60. Write a function to find the first and last position of an element in a sorted array.

//* Constraints:
//? If the target is not found in the array, return [-1, -1].


// const searchRange = (nums, target) => {};
// console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // Output: [3, 4]
// console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // Output: [-1, -1]


// My solution
const searchRange = (nums, target) => {
    const findFirst = (nums, target) => {
        let left = 0;
        let right = nums.length - 1;
        let first = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] >= target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
            if (nums[mid] === target) {
                first = mid;
            }
        }
        return first;
    };

    const findLast = (nums, target) => {
        let left = 0;
        let right = nums.length - 1;
        let last = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] <= target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
            if (nums[mid] === target) {
                last = mid;
            }
        }
        return last;
    };

    const first = findFirst(nums, target);
    const last = findLast(nums, target);

    return [first, last];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // Output: [3, 4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // Output: [-1, -1]
console.log(searchRange([2,3,4,5,6,7,9,11,12,14,15,17,18,22],15)); // Output: [10, 10]

// explanation of example no 1:
// In the first example, the target value is 8. The function uses binary search to find 
// the first and last positions of 8 in the sorted array [5, 7, 7, 8, 8, 10].
// The first occurrence of 8 is at index 3, and the last occurrence is at index 4. 
// Therefore, the output is [3, 4].
