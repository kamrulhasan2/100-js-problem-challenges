/***
 * Q: write a function findLongestWord that takes a string as input and returns 
 * the longest word in the string. If there are multiple longest words, return the 
 * one encountered. 
 */

// constrainst:
/***
 *  The input string may contain alphabetic characters,digits, spaces and punctuation.
 *  The input string is non-empty.
 *  The input string may contain multiple words separated by spaces.
 */

//notes:
/**
 *  If the input is empty or contains only whitespace, the function should return an false.
 *  The function should ignore leading and trailing whitespace when determining
 *  the longest word.
 * 
 */

// console.log(findLongestWord("I love javascript"));


//Solution :

const findLongestWord = (str)=>{
    if(str.trim().length === 0) return false;

    let word = str.trim().split(" ");

    //sol 1:===========

    // word = word.sort((a,b)=> a.length - b.length);
    // word = word.at(-1);  //   // Javascript

    // return word;

    //sol 2:===========

    // word = word.sort((a,b)=> b.length - a.length);
    // word = word[0];     // // javaScript
    
    // return word;

    // sol 3:==========

    // let reduced = word.reduce((acc,cur)=> {
    //     return cur.length > acc.length? cur: acc;

    // },"");            // // javaScript
    
    // return reduced;

}

console.log(findLongestWord("  I love javaScript Javascript and I love react  "));