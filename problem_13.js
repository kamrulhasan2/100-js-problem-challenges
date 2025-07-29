// 13: Write a function that takes a string as input and returns the count of vowels
//  in that string. Consider 'a', 'e', 'i', 'o', and 'u' as vowels (both 
// Lowercase and uppercase).

// Example usage:
// console.log(countVowels ("Helloo world")); // Output: 4 
// console.log(countVowels ("ThE quick brown fox")); // Output: 5 
// console.log(countVowels ("Brrrp")); // Output: 0

// Constraints:
// The input string may contain letters in both uppercase and lowercase. 
// The output should be a non-negative integer representing the count of vowels
//  in the input string.

//my solution: 

// const countVowels = (str)=>{
//     count = str.trim().toLowerCase().split("").reduce((acc,cur)=>{
//         if(cur === 'a' || cur ==='e' || cur === 'i' || cur === 'o' || cur === 'u'){
//             acc++;
//         }
//         return acc;
//     },0);

//     return count;
// }

// console.log(countVowels ("Brrrp"));
// console.log(countVowels ("Helloo world"));
// console.log(countVowels ("ThE quick brown fox"));


// solution: 1

// const countVowels = (str)=>{
//     const vowels = ['a' , 'e' , 'i' , 'o' , 'u'];

//     const arr = str.trim().toLowerCase().split("");

//     let count = 0;
//     for(let v of arr){
//         if(vowels.includes(v) ){
//             count ++;
//         }
//     }

//     return count;
// }

// console.log(countVowels ("Brrrp"));
// console.log(countVowels ("Helloo world"));
// console.log(countVowels ("ThE quick brown fox"));





