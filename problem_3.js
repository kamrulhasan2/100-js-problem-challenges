// Count Occurrences of Character

/****
 * Write a function called "countChar" that takes two parameters: a string and a character
 * to count. The function should return the number of times the specified character 
 * appears in the string.
 */

// console.log(countChar("helloJavaScript","l"));

// todo constrainsts:
// The function should be case-sensitive.
// The function should handle both lowercase and uppercase characters.
// The character parameter can be any printable ASCII character( The function should 
//  accept any character that is part of the ASCII character set and is printable).


// my solution:

//  const countChar = (str , letter) =>{
//     let count = 0;
//     str = str.split("").map((e)=>{
//         if(e === letter){
//             count++;
//         }else{
//             return false;
//         }
//         return count;
//     });

//     return count;
//  }

//  console.log(countChar("heeelloolllll"," "));


// solution 2:

// const countChar = (str , letter) =>{

//     // str = str.toLowerCase();
//     // letter = letter.toLowerCase();
    
//     count = str.split("").reduce((acc,cur)=>{
//         if(letter === cur){
//             acc++;
//         }

//         return acc;
//     },0);

//     return count;
//  }

//  console.log(countChar("heeelloolllll","l"));
