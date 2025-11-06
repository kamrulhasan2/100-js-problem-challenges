//? Q:65. Write a function to find the longest common subsequence of two strings.

//? A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters.

//* Constraints:
//? Both strings will contain only lowercase letters.


// const longestCommonSubsequence = (text1, text2) => {};
// console.log(longestCommonSubsequence("abcde", "ace")); // Output: 3
// console.log(longestCommonSubsequence("abc", "abc")); // Output: 3
// console.log(longestCommonSubsequence("abc", "def")); // Output: 0


// My solution (Dynamic Programming)
const longestCommonSubsequence = (text1, text2) => {
    const m = text1.length;
    const n = text2.length;
    const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[m][n];
};

console.log(longestCommonSubsequence("abcde", "ace")); // Output: 3
console.log(longestCommonSubsequence("abc", "abc")); // Output: 3
console.log(longestCommonSubsequence("abc", "def")); // Output: 0
