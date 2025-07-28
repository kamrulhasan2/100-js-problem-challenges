//? Write a function called checkTriangle Type that takes three parameters representing
//  the lengths of the sides of a triangle. The function should return a string
//  indicating the type of triangle: "equilateral", "isosceles", or "scalene".


// console.log(checkTriangleType(3, 3, 3)); // Output: "equilateral" 
// console.log(checkTriangleType(3, 4, 3)); // Output: "isosceles"
// console.log(checkTriangleType(5, 8, 6)); // Output: "scalene"



//todo The function should adhere to the following rules:
//? If all three sides are of equal length, return "equilateral".
//? If only two sides are of equal length, return "isosceles".
//? If all three sides have different lengths, return "scalene".

// My solution: 

// const checkTriangleType = (a,b,c)=>{
//     if(a === b && a === c){
//         return 'equilateral';
//     }else if ( a === b || a === c || b === c){
//         return 'isosceles';
//     }else{
//         return 'scalene';
//     }
// }

// console.log(checkTriangleType(4,4,4));
// console.log(checkTriangleType(0,0,4));
// console.log(checkTriangleType(4,2,0));