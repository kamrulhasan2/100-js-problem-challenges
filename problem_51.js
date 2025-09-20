//? Q:51. Write a function to check if a string is a valid palindrome, 
// considering only alphanumeric characters and ignoring cases.

//* Constraints:
//? The function should return true if the string is a valid palindrome, 
// and false otherwise.


// const isPalindrome = (s) => {};
// console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
// console.log(isPalindrome("race a car")); // Output: false


// My solution
const isPalindrome = (s) => {
    const cleanedString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0;
    let right = cleanedString.length - 1;

    while (left < right) {
        if (cleanedString[left] !== cleanedString[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log(isPalindrome("race a car")); // Output: false

// Explanation:
// A palindrome is a word, phrase,number, or other sequence of characters that
// reads the same forward and backward, ignoring spaces, punctuation, and capitalization.

// Explain code step by step:
// 1. The function isPalindrome takes a string s as input.
// 2. It first cleans the string by converting it to lowercase and removing
//    all non-alphanumeric characters using a regular expression.
// 3. It initializes two pointers, left and right, to the start and end of
//    the cleaned string.
// 4. It then enters a while loop that continues as long as left is less than right.
// 5. Inside the loop, it compares the characters at the left and right pointers.
//    If they are not equal, it returns false, indicating that the string is not a 
//    palindrome.
// 6. If they are equal, it increments the left pointer and decrements the right
//     pointer to move towards the center of the string.
// 7. If the loop completes without finding any mismatches, it returns true, 
//      indicating that the string is a valid palindrome.

