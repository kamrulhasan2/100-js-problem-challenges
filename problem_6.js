/* Write a function to determine whether a given string is a palindrome or not.
   A palindrome is a word, phrase,number, or other sequence of characters that 
   reads the same forward and backward, ignoring spaces, punctuation, and capitalization.
*/
// console.log(isPalindrome ("A man, a plan, a canal, Panama")); // Output: true
// console.log(isPalindrome ("racecar")); // Output: true 
// console.log(isPalindrome ("hello")); // Output: false

// My solution:

// const isPalindrome = (str) =>{
//     str = str.trim().toLowerCase().split("").reduce((acc,curChar)=>{
//         if(curChar != "," && curChar != " "){
//             acc.push(curChar);
//         }
//         return acc;
//     },[]).join("");

//     revStr = str.split("").reverse().join("");
    

//     if(str === revStr){
//         return true;
//     }else{
//         return false;
//     }

  
   
// }

// console.log(isPalindrome("aa,bb,aa"));
// console.log(isPalindrome("hello"));
// console.log(isPalindrome ("A man, a plan, a canal, Panama"));
// console.log(isPalindrome("iloveyou"));
// console.log(isPalindrome("ili"));


// solution :

// const isPalindrome = (str)=>{
//     str = str.trim().toLowerCase().replace(/\W/g,"");      // (/\W/g) means (A-Z,a-z,0-9) char
//     const strRev = str.split("").reverse().join("");

//     return str === strRev ? true : false ;
// }

// console.log(isPalindrome("aa,bb,aa"));  //true
// console.log(isPalindrome("hello"));  //false
// console.log(isPalindrome ("A man, a plan, a canal, Panama"));   //true
// console.log(isPalindrome("iloveyou"));  //false
// console.log(isPalindrome("ili"));   //true