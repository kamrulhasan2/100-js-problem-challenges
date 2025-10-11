//? Q:59. Write a function to find the product of all other elements in an array.

//* Constraints:
//? You must not use the division operation.


// const productExceptSelf = (nums) => {};
// console.log(productExceptSelf([1, 2, 3, 4])); // Output: [24, 12, 8, 6]


// My solution
const productExceptSelf = (nums) => {
    const n = nums.length;
    const result = new Array(n);

    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        result[i] = leftProduct;
        leftProduct *= nums[i];
    }

    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= rightProduct;
        rightProduct *= nums[i];
    }

    return result;
};

console.log(productExceptSelf([1, 2, 3, 4])); // Output: [24, 12, 8, 6]
console.log(productExceptSelf([0, 1, 2, 3])); // Output: [6, 0, 0, 0]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // Output: [0, 0, 9, 0, 0]

//explain of example 1
// For the input array [1, 2, 3, 4]:
// - The product of all elements except the first element (1) is 2 * 3 * 4 = 24.
// - The product of all elements except the second element (2) is 1 * 3 * 4 = 12.
// - The product of all elements except the third element (3) is 1 * 2 * 4 = 8.
// - The product of all elements except the fourth element (4) is 1 * 2 * 3 = 6.
// Thus, the output array is [24, 12, 8, 6].