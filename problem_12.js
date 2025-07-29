
// 12: Write a function that takes an array of integers as input and removes any duplicate
//  elements, returning a new array with only the unique elements.

// Example usage:
// console.log(removeDuplicates ([1, 2, 3, 2, 1, 4])); // Output: [1, 2, 3, 4] 
// console.log(removeDuplicates ([5, 6, 7, 7, 8, 8, 9])); // Output: [5, 6, 7, 8, 9]
// console.log(removeDuplicates ([1, 2, 3, 4])); // Output: [1, 2, 3, 4] 
// console.log(removeDuplicates ([])); // Output: []

// The new Set() method in JavaScript creates a new Set object. 
// A Set object is a collection of unique values. It can store any type of value,
//  whether primitive values or object references.

//my solution: wrong

// const removeDuplicates = (arr) =>{
//     const newArr = arr.reduce((acc,cur)=>{
//         if(cur != acc){
//             acc.push(cur);
//         }
//         console.log(cur, acc);
//         return acc;
//     },[])

//     return newArr;
// }

// console.log(removeDuplicates ([1, 2, 3, 2, 1, 4]));


// solution: 1

// const removeDuplicates = (arr)=>{
//     const newArr = [...new Set(arr)];

//     return newArr;
// }

// console.log(removeDuplicates ([1, 2, 3, 2, 1, 4]));


// solution : 2

// const removeDuplicates = (arr)=>{
//    const newArr = arr.filter((item, index, selfArr) => {
    
//     return selfArr.indexOf(item) === index;
// });

//    return newArr;
// }
// console.log(removeDuplicates ([1, 2, 3, 2, 1, 4]));


// solution : 3

// const removeDuplicates = (arr)=>{
//     const newArr = arr.reduce((acc, current) => {
//         if (!acc.includes(current)) {
//           acc.push(current);
//         }
//         return acc;
//       }, []);

//       return newArr;
// }

// console.log(removeDuplicates ([1, 2, 3, 2, 1, 4]));

