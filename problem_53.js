//? Q:53. Write a function to find the longest palindromic substring in a string.

//* Constraints:
//? The input string's maximum length is 1000.

// what is a palindromic substring?
// A palindromic substring is a sequence of characters within a string that reads the
//  same forwards and backwards. 
// For example, in the string "babad", the substrings "bab" and "aba" are palindromic
//  because they read the same in both directions.

// const longestPalindrome = (s) => {};
// console.log(longestPalindrome("babad")); // Output: "bab" (or "aba")
// console.log(longestPalindrome("cbbd")); // Output: "bb"


// My solution (expand from center)
const longestPalindrome = (s) => {
    if (s.length < 1) {
        return "";
    }

    let start = 0;
    let end = 0;

    for (let i = 0; i < s.length; i++) {
        const len1 = expandAroundCenter(s, i, i);
        const len2 = expandAroundCenter(s, i, i + 1);
        const len = Math.max(len1, len2);
        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }

    return s.substring(start, end + 1);
};

const expandAroundCenter = (s, left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return right - left - 1;
};

console.log(longestPalindrome("babad")); // Output: "bab" (or "aba")
console.log(longestPalindrome("cbbd")); // Output: "bb"


