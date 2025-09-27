//? Q:57. Write a function to merge two sorted arrays.

//* Constraints:
//? The two input arrays are sorted in ascending order.


// const mergeSortedArrays = (arr1, arr2) => {};
// console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]


// My solution
const mergeSortedArrays = (arr1, arr2) => {
    const mergedArray = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
};

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]
console.log(mergeSortedArrays([], [1, 2, 3])); // Output: [1, 2, 3]
console.log(mergeSortedArrays([1, 2, 3], [])); // Output: [1, 2, 3]
