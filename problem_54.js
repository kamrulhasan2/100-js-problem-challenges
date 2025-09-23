//? Q:54. Write a function to group anagrams together from an array of strings.

// what is anagram?
// An anagram is a word or phrase formed by rearranging the letters of a different word
//  or phrase,typically using all the original letters exactly once. For example,
//  "listen" and "silent" are anagrams of each other,as are "evil" and "vile".

//* Constraints:
//? All inputs will be in lowercase.

// const groupAnagrams = (strs) => {};
// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Output: [["eat","tea","ate"],["tan","nat"],["bat"]]


// My solution
const groupAnagrams = (strs) => {
    const anagramGroups = {};

    for (const str of strs) {
        const sortedStr = str.split('').sort().join('');
        if (anagramGroups[sortedStr]) {
            anagramGroups[sortedStr].push(str);
        } else {
            anagramGroups[sortedStr] = [str];
        }
    }

    return Object.values(anagramGroups);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); 
// Output: [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ] 