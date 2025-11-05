//? Q:64. Write a function to find the edit distance between two strings.

//? The edit distance between two strings is the minimum number of single-character edits (insertions, deletions or substitutions) required to change one string into the other.

//* Constraints:
//? Both strings will contain only lowercase letters.


// const minDistance = (word1, word2) => {};
// console.log(minDistance("horse", "ros")); // Output: 3
// console.log(minDistance("intention", "execution")); // Output: 5


// My solution (Dynamic Programming - Levenshtein Distance)
const minDistance = (word1, word2) => {
    const m = word1.length;
    const n = word2.length;
    const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(null));

    for (let i = 0; i <= m; i++) {
        dp[i][0] = i;
    }

    for (let j = 0; j <= n; j++) {
        dp[0][j] = j;
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            const cost = word1[i - 1] === word2[j - 1] ? 0 : 1;
            dp[i][j] = Math.min(
                dp[i - 1][j] + 1,      // Deletion
                dp[i][j - 1] + 1,      // Insertion
                dp[i - 1][j - 1] + cost // Substitution
            );
        }
    }

    return dp[m][n];
};

console.log(minDistance("horse", "ros")); // Output: 3
console.log(minDistance("intention", "execution")); // Output: 5
