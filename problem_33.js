//? Write a function removeDuplicates that takes an array of elements 
// as input and returns a new array with duplicate elements removed.

//? Your task is to implement the removeDuplicates function using JavaScript 
// and ensure that the returned array contains only unique 
// elements from the input array. The order of elements in the output 
// array should be the same as the original array, with the first occurrence 
// of each unique element preserved.

//constrains
//? The input array may contain elements of any data type.
//? The function should return a new array with duplicate elements
//  removed, while preserving the order of elements from the original array.
 //? You should use the provided remove Duplicates function signature without 
 // any additional parameters.

//console.log(removeDuplicates ([1, 2, 3, 3, 4, 4, 5])); 
// // Output: [1, 2,3, 4, 5]
//console.log(remove Duplicates (["a", "b", "c", "b", "a"])); 
// Output: ['a', 'b', 'c']


// ===============solution 1 ===============================

// const removeDuplicates = (arr)=>{
//     const newArr = []
//     for(let i=0; i<arr.length; i++){
        
//        if(!(newArr.includes(arr[i]))){
//             newArr.push(arr[i]);
//        } 
//     }


//     return newArr;
    
// }


// ===============solution 2 ===============================

// const removeDuplicates = (arr) => {
//     return [...new Set(arr)];
// }


// ===============solution 3 ===============================

// const removeDuplicates = (arr) =>{
//     return arr.filter((item,index) => arr.indexOf(item) === index);
// }


// ===============solution 4 ===============================

// const removeDuplicates = (arr) =>{
//     return arr.reduce((unique,item) => {
//         return unique.includes(item) ? unique : [...unique,item];
//     },[]);
// }



// ===============solution 5 ===============================

// const removeDuplicates = (arr) =>{
//     const seen = new Map();
//     const result = [];

//     for(let i=0; i< arr.length; i++){
//         if(!seen.has(arr[i])){
//             result.push(arr[i]);
//             seen.set(arr[i], true);
//         }
//     }

//     return result;
// }




// ===============solution 6 ===============================
// const removeDuplicates = (arr) => {
//     const result = [];
    
//     arr.forEach(item => {
//         if(!result.includes(item)) {
//             result.push(item);
//         }
//     });
    
//     return result;
// }



// ===============solution 7 ===============================


// const removeDuplicates = (arr) => {
//     const result = [];
//     let i = 0;
    
//     while(i < arr.length) {
//         let isDuplicate = false;
        
//         // Check if current element already exists in result
//         for(let j = 0; j < result.length; j++) {
//             if(result[j] === arr[i]) {
//                 isDuplicate = true;
//                 break;
//             }
//         }
        
//         if(!isDuplicate) {
//             result.push(arr[i]);
//         }
        
//         i++;
//     }
    
//     return result;
// }





// ===============solution 7 ===============================


// const removeDuplicates = (arr) => {
//     const seen = {};
//     const result = [];
    
//     for(let i = 0; i < arr.length; i++) {
//         const key = typeof arr[i] + ':' + arr[i]; // Handle different types
//         if(!seen[key]) {
//             seen[key] = true;
//             result.push(arr[i]);
//         }
//     }
    
//     return result;
// }




// console.log(removeDuplicates (["a", "b", "c", "b", "a"])); 
// console.log(removeDuplicates ([1, 2, 3, 3, 4, 4, 5])); 






