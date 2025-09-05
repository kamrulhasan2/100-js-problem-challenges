//? Q:36. Write a function to check if two strings are anagrams.

//? Anagrams are words or phrases formed by rearranging the letters of a 
// different word or phrase, typically using all the original letters exactly once.

//* Constraints:
//? The function should be case-insensitive.
//? The function should ignore whitespace.


// const areAnagrams = (str1, str2) => {};
// console.log(areAnagrams("listen", "silent")); // Output: true
// console.log(areAnagrams("hello", "world")); // Output: false
// console.log(areAnagrams("Dormitory", "dirty room")); // Output: true


// My solution
const areAnagrams = (str1, str2) => {
    const cleanStr1 = str1.toLowerCase().replace(/\s/g, '');
    const cleanStr2 = str2.toLowerCase().replace(/\s/g, '');

    if (cleanStr1.length !== cleanStr2.length) {
        return false;
    }

    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
};

console.log(areAnagrams("listen", "silent"));
console.log(areAnagrams("hello", "world"));
console.log(areAnagrams("Dormitory", "dirty room"));
