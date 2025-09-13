//? Q:44. Write a function to generate all permutations of a string.

//? A permutation is an arrangement of all or part of a set of objects, with regard to the order of the arrangement.

//* Constraints:
//? The input will be a string.
//? The output should be an array of all possible permutations.


// const permutations = (str) => {};
// console.log(permutations("abc")); // Output: ["abc", "acb", "bac", "bca", "cab", "cba"]
// console.log(permutations("a")); // Output: ["a"]


// My solution (recursive)
const permutations = (str) => {
    if (str.length <= 1) {
        return [str];
    }

    const result = [];
    const firstChar = str[0];
    const remainingChars = str.slice(1);
    const permsOfRemaining = permutations(remainingChars);

    for (let i = 0; i < permsOfRemaining.length; i++) {
        const perm = permsOfRemaining[i];
        for (let j = 0; j <= perm.length; j++) {
            const newPerm = perm.slice(0, j) + firstChar + perm.slice(j);
            result.push(newPerm);
        }
    }

    return result;
};

console.log(permutations("abc")); // Output: ["abc", "acb", "bac", "bca", "cab", "cba"]
console.log(permutations("a")); // Output: ["a"]
console.log(permutations("ab")); // Output: ["ab", "ba"]




//? Explanation step by step for "abc":
// 1. The function is called with "abc". The first character 'a' is separated, and the function is called recursively with "bc".
// 2. In the recursive call with "bc", 'b' is separated, and the function is called recursively with "c".
// 3. In the recursive call with "c", the base case is reached, and the function returns ["c"].
// 4. Back in the call with "bc", the function now has the permutations of "c", which is ["c"].
// 5. The function then inserts 'b' into all positions of each permutation of "c":
//    - Inserting 'b' into "c" gives "bc" and "cb".
// 6. The function returns ["bc", "cb"] to the call with "abc".
// 7. Back in the call with "abc", the function now has the permutations of "bc", which is ["bc", "cb"].
// 8. The function then inserts 'a' into all positions of each permutation of "bc":
//    - Inserting 'a' into "bc" gives "abc", "bac", and "cba".
// 9. The function returns ["abc", "acb", "bac", "bca", "cab", "cba"] as the final result.