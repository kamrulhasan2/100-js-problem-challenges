//* Coding Challenge: Random Hex Color Generator

//? Write a function randomHexColor that generates a random hexadecimal
//  color code each time it is called. The function should return a string
//  representing the random color code in the format #RRGGBB', where RR, GG,
//  and BB are two-digit hexadecimal numbers representing the red, green, and blue 
// components of the color, respectively.
//? Your challenge is to implement the randoniexColor function using JavaScript and ensure
//  that it produces a valid hexadecimal color code with a length of 7 characters (including the asyabol).

//* Constraints:

//? The output color code should always start with followed
//  by six hexadecimal characters (RRGGBB). //? 
// The function should not take any parameters.
//? The generated color codes should be unique and 
// evenly distributed across the entire range of possible hexadecimal color codes.

//* Hint
// converts the randon number into a hexadecimal string representation.


// My solution (woking but not actual solution)

// const randomNumberGen=()=>{
//     return Math.floor(Math.random() * 10);
// }

// const randomHexColor =()=>{
    
//     const red = `${randomNumberGen()}${randomNumberGen()}`;
//     const green = `${randomNumberGen()}${randomNumberGen()}`;
//     const blue = `${randomNumberGen()}${randomNumberGen()}`;

//     return `#${red}${green}${blue}`;
    
// }


// console.log(randomHexColor());




//  Solution 2

// const randomHexColor = () =>{
  
//     return`#${Math.random().toString(16).slice(2,8).padEnd(6,0)}`
// }

// console.log(randomHexColor());
