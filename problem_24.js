//Q:24 Write a function called findMode that takes an array of numbers as input and returns
//  the mode of  the array (the number that appears most frequently).

// Example usage:
// console.log(findMode([1, 2, 2, 3, 1, 4, 2])); // Output: 2

// Constraints:
//? The input array will always contain at least one element.
//? The mode will always be unique (i.e., there won't be multiple numbers with the same 
// highest frequency).


//my solution:

// const findMode = (arr) => {
//     const obj = {};
//     arr.forEach(element => {
//         obj[element] = (obj[element] || 0 ) + 1;
//     });
//     let max = Object.keys(obj).reduce((acc,cur)=>{
//          if(obj[cur] > acc){
//             acc = obj[cur];
//          } 
//          return acc;
//     },0);
    
//     const result = Object.keys(obj).reduce((acc,cur) =>{
//         if(obj[cur] === max){
//             acc = cur;
//         }
//         return acc;
//     },0);

//     return result;
// }
// // findMode([1, 2, 2, 3, 1, 4, 2]);

// console.log(findMode([1, 2, 2, 3, 1,1, 4, 2]));



//solution:

// const findMode = (arr)=>{
//     const obj={}
//     let max = 0;
//     let mode;

//     arr.forEach(element => {
//         obj[element] = (obj[element] || 0) + 1;

//         if(obj[element] > max){
//             max = obj[element];
//             mode = element;
//         }
//     });
//     console.log(obj)
//     return mode;
// }


// console.log(findMode([1, 2, 2, 3, 1,1, 4, 2,2]));
