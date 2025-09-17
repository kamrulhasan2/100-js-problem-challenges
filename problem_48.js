//? Q:48. Write a function to perform a deep comparison of two objects.

//? A deep comparison of two objects is a comparison of their properties,
//  and the properties of their properties, and so on.

//* Constraints:
//? The function should return true if the objects are deeply equal, and false otherwise.


// const deepEqual = (obj1, obj2) => {};
// console.log(deepEqual({a: 1, b: {c: 2}}, {a: 1, b: {c: 2}})); // Output: true
// console.log(deepEqual({a: 1, b: {c: 3}}, {a: 1, b: {c: 2}})); // Output: false


// My solution
const deepEqual = (obj1, obj2) => {
    if (obj1 === obj2) {
        return true;
    }

    if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
        return false;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (const key of keys1) {
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }

    return true;
};

console.log(deepEqual({a: 1, b: {c: 2}}, {a: 1, b: {c: 2}})); // Output: true
console.log(deepEqual({a: 1, b: {c: 3}}, {a: 1, b: {c: 2}})); // Output: false
console.log(deepEqual({a: 1, b: 2}, {a: 1, b: 2, c: 3})); // Output: false

// Explanation of the code step by step:
// 1. The function first checks if the two objects are strictly equal 
//     using the === operator. If they are, it returns true.
// 2. If the objects are not strictly equal, the function checks if either of them 
//     is not an object or is null. If so, it returns false.
// 3. The function then retrieves the keys of both objects using Object.keys()
//     and compares their lengths. If the lengths are different, it returns false.
// 4. The function iterates through the keys of the first object and checks if each key
//    exists in the second object and if their values are deeply equal.
//    If any key is missing or the values are not deeply equal, it returns false.
// 5. If all keys and their values are deeply equal, the function returns true.
// Example usage:
// console.log(deepEqual({a: 1, b: {c: 2}}, {a: 1, b: {c: 2}})); // Output: true
// console.log(deepEqual({a: 1, b: {c: 3}}, {a: 1, b: {c: 2}})); // Output: false
// console.log(deepEqual({a: 1, b: 2}, {a: 1, b: 2, c: 3})); // Output: false