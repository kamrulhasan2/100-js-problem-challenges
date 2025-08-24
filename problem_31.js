
//? The password must contain at least one lowercase letter, one uppercase 
// letter, and one digit.
//? The length of the password must be at least 8 characters.
//? The function should return true if the password meets all the criteria,
//  otherwise, it should return false.

//* Input:
//? password: A non-empty string representing the password to be validated.

//* Output:
//? true if the password meets all the criteria.
//? false otherwise.

//* Constraints:
//? The input string password will contain only alphanumeric characters and 
// punctuation marks. Q

// console.log(simplePasswordValidator("afkdsfadsf")); // Output: false 
// console.log(simplePasswordValidator("afkdsfadsf1")); // Output: false 
// console.log(simplePasswordValidator("afkds fadsf1A")); // Output: true 
// console.log(simplePasswordValidator("afkdsfadsf1a")); // Output: true

//my solution:

// const simplePasswordValidator = (str) =>{

//     let hasUpperCase = false;
//     let hasLowerCase = false;
//     let hasNumber = false;

//     if(str.length < 8){
//         return false;
//     }

//    for(let char of str){
//      if(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90){
//         hasUpperCase = true;
//      }
//      else if(char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122){
//         hasLowerCase = true;
//      }
//      else if(!isNaN(Number(char))){
//         hasNumber = true;
//      }
//    }
   
//     return hasUpperCase && hasLowerCase && hasNumber;
// }


// console.log(simplePasswordValidator("afkdsfadsf")); // Output: false 
// console.log(simplePasswordValidator("afkdsfadsf1")); // Output: false 
// console.log(simplePasswordValidator("afkds fadsf1A")); // Output: true 
// console.log(simplePasswordValidator("afkdsfadsf1A")); // Output: true