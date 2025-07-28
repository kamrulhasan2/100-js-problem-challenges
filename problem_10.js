// Write a function arraysAreEqual that takes two arrays arr1 and arr2 
// as input and returns true if the arrays are 
// equal (i.e., contain the same elements in the same order),
//  and false otherwise.

// Example usage:
// console.log(arraysAreEqual([1, 2, 3], [1, 2, 3])); //Output: true
// console.log(arraysAreEqual([1, 2, 3], [1, 2, 4])); // Output: false
// console.log(arraysAreEqual([], [])); // Output: true

// My solution: 

// const arraysAreEqual = (arr1,arr2)=>{
//     for(let i=0;i<arr1.length;i++){
//         if(arr1[i] != arr2[i]){
//             return false;
//         }
//         if(arr1[arr1.length-1] === arr2[arr1.length - 1]){
//             return true;
//         }
       
//     }
//     if(Array.isArray(arr1) && Array.isArray(arr2)){
//         return true;
//     }else return false;

// }

// console.log(arraysAreEqual([1, 2, 3, 4], [1, 2, 3, 4]));
// console.log(arraysAreEqual([1, 2, 3], [1, 2, 4]));
// console.log(arraysAreEqual([], []));
// console.log(arraysAreEqual(0, []));


// solution 2:

const arraysAreEqual = (arr1,arr2)=>{
    if(arr1.length  != arr2.length){
        return false;
    }
   return arr1.every((elm,index)=> elm === arr2[index] );
}

console.log(arraysAreEqual([1, 2, 3, 4], [1, 2, 3, 4]));
console.log(arraysAreEqual([1, 2, 3], [1, 2, 4]));
console.log(arraysAreEqual([], []));
console.log(arraysAreEqual(0, []));


