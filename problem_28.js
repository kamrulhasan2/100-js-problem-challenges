// Write a function called truncateString that takes two parameters:

//? str: A string that needs to be truncated.
//7 maxLength: An integer representing the maximum length of the string allowed.
//? The function should truncate the input string str if its length exceeds the 
// specified maxlength. If truncation occurs, the function should add to the end 
// of the truncated string.

// Example usage:
// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
// Output: "A-fisket..."

//* Constraints:
// The input string str will contain only alphanumeric characters and punctuation
//  marks.
//? The maximum length maxLength will be a positive integer.
// The output string length should not exceed maxlength 3 characters due to the 
// addition of ....

//my solution:

// const truncateString = (str,maxLen)=>{
//    return maxLen <= 0 ? str : `${str.slice(0,maxLen)}...` ;
// }
// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 0));


//solution: 

// const truncateString = (str,maxLen)=>{
//     return maxLen <= 0 ? str : str.slice(0,maxLen).concat('...') ;
//  }
// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 0));
