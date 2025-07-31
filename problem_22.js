// Write a JavaScript function findMedian(arr) that takes an array of numbers as input 
// and returns the median value. If the array has an even number of elements, return 
// the average of the two middle values.

// For example, the median of 3, 3, 5, 9, 15 is 5. If there is an even number of 
// observations, then there is no single middle value; the median is then usually 
// defined to be the mean of the two middle values: 
// so the median of 3, 5, 7, 9 is (5+7)/2 = 6.

//tode Tips
// Sert the array in ascending order.
// If the array has an odd number of elements, the median is the middle element.
// If the array has an even number of elements, the median is the average of the two 
// middle elements.

//my solution:

// const findMedian = (arr)=>{
//     arr = arr.sort((a,b)=> a - b);
    
//     const arrHalfLen = arr.length/2;

//     const evenFormula = (arr[Math.floor(arrHalfLen) -1] + arr[Math.ceil(arrHalfLen)])/2;

//     if((arr.length%2) === 0){
//         return evenFormula;
//     }
//     else{
//         return arr[Math.floor(arrHalfLen)];
//     }
// }
// console.log(findMedian([3, 5, 7, 9,15]));