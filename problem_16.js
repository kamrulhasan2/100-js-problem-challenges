// Coding Challenge: Find the Minimum Value in an Array

//? 16: Write a function findMin that takes an array of numbers as input and returns 
// the minimum value found in the array.

//* Constraints:
//? The input array may contain both positive and negative integers.
//? The input array may be empty.
//? The input array may contain duplicate values.

// HH-Example-usager
// console.log(findMin([5, 10, 2, 8])); // Output: 2
// console.log(findMin([5, -3, 0, 12, -7])); // Output: -7
// console.log(findMin([])); // Output: undefined (or any suitable message for empty array)

// my solution:1

// const findMin = (arr)=>{
//     const newArr = arr.sort((a,b)=> a-b);

//     if(newArr.length === 0)  return'empty array';
//     else return newArr[0];
// }

// console.log(findMin([5, 10, 2, 8])); 
// console.log(findMin([5, -3, 0, 12, -7]));
// console.log(findMin([]));

// my solution : 2

// const findMin = (arr)=>{
//     let min = arr[0];
//     arr.forEach(element => {
//         if(element < min){
//             min = element;
//         }
//     });
    
//     if(arr.length === 0) return 'empty array';
//     else return min;
// }

// console.log(findMin([5, 10, 2, 8])); 
// console.log(findMin([5, -3, 0, 12, -7]));
// console.log(findMin([]));


// solution : 3

// const findMin = (arr)=>{
//     if(arr.length === 0) return 'empty array';
//     else return Math.min(...arr);
// }

// console.log(findMin([5, 10, 2, 8])); 
// console.log(findMin([5, -3, 0, 12, -7]));
// console.log(findMin([]));