//? Q:50. Write a function to find the length of the longest substring without 
// repeating characters.

//* Constraints:
//? The input string can contain any characters.


// const lengthOfLongestSubstring = (s) => {};
// console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
// console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1
// console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3


// My solution (sliding window)
const lengthOfLongestSubstring = (s) => {
    let maxLength = 0;
    let start = 0;
    const charIndexMap = {};

    for (let end = 0; end < s.length; end++) {
        const char = s[end];
        if (charIndexMap[char] >= start) {
            start = charIndexMap[char] + 1;
        }
        charIndexMap[char] = end;
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3

 
// Explain output:
// 1. In the first example, "abcabcbb", the longest substring without repeating 
//   characters is "abc", which has a length of 3.
// 2. In the second example, "bbbbb", the longest substring without repeating 
//   characters is "b", which has a length of 1.
// 3. In the third example, "pwwkew", the longest substring without repeating 
//   characters is "wke", which has a length of 3.