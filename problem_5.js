//? Write a function to sort an array of numbers in an ascending order.

//todo Requirements:

//? The function should take an array of numbers as input.
//? It should return a new array with the numbers sorted in ascending order. 9/? The original array should remain unchanged.
//? You are not allowed-to-use the built-in-sort() method.

// console.log(sortAscending([5, 3, 1, 8])); // Output: [1, 3, 5, 8] 
//console.log(sortAscending([5, 3, 10, 8])); // Output: [3, 5, 8,10]


//solution: using reduce method

// const sortAscending = (arr) => {
//     return arr.reduce((sortedArr, num) => {
//         let inserted = false;
//         for (let i = 0; i < sortedArr.length; i++) {
//             if (num < sortedArr[i]) {
//                 sortedArr.splice(i, 0, num); // Insert at the correct position
//                 inserted = true;
//                 break;
//             }
//         }
//         if (!inserted) {
//             sortedArr.push(num); // Add to the end if it's the largest
//         }
//         return sortedArr;
//     }, []);
// };

// console.log(sortAscending([5, 3, 10, 8]));  // Output: [3, 5, 8, 10]



// currect solution : 1

// const sortAscending = (arr) => {
//     const newArr = [...arr];
    
//     for(let i = 0; i < newArr.length; i++) {
//         for(let j = 0; j < newArr.length - i - 1; j++) {
//             if(newArr[j] > newArr[j + 1]) {
//                 // Swap elements
//                 let temp = newArr[j];
//                 newArr[j] = newArr[j + 1];
//                 newArr[j + 1] = temp;
//             }
//         }
//     }
    
//     return newArr;
// }



// solution 2: accoording to the condition this solution does not accept

// const sortAscending = (arr)=>{
//    return arr.sort((a,b)=> a - b);
// }

// myArr = [1,58,9,7,3,6,60];
// console.log(sortAscending(myArr));  // output : [1,  3,  6, 7,9, 58, 60]
// console.log(myArr);     // output : [1,  3,  6, 7,9, 58, 60]

  