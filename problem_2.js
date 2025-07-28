// Hastag generator

/*****
 * Q: you are required to implement a function generateHashTag
 *  that generates a hash tag from a given input string
 */
// The hash tag should be constructed as follows:

// The input string should be converted to a hash tag format, where each word is capitalized
  // and concatenated together without spaces.

// If the length of the input string is greater than 280 characters or if the input string is 
 // empty or contains only whitespace, the function should return false.

 // Otherwise, the function should return the genetated hash tag prefixed with #


// console.log(generateHashTag("i love javaScript"));
    // #ILoveJavaScript


 // my solution:

    // const generateHashTag = (str)=>{

            // if(str.length > 280 || str.length === 0) return false;

    //     str = str.trim().split(" ").map((word)=> {
    //        word =  word.split("");

    //        return  word[0].toUpperCase() + word.slice(1).join("");
    //     }).join("");

    //     return `#${str}`;
    // }


    // console.log(generateHashTag("i love javaScript react"));

    // solution 2:

    // const  generateHashTag = (str)=>{
    //     if(str.length > 280 || str.trim().length === 0) return false;

    //     str = str.trim().split(" ").map((word)=>{
    //       return  word.charAt(0).toUpperCase() + word.slice(1);
    //     }).join("")

    //     return `#${str}`;

    // }

    // console.log(generateHashTag(" hello gi kesi hoo app"));

    
    // solution 3: 

    // const  generateHashTag = (str)=>{
    //         if(str.length > 280 || str.trim().length === 0) return false;
    
    //         str = str.trim().split(" ").map((word)=>{
    //           return word.replace(word[0], word[0].toUpperCase());
    //         }).join("")
    
    //         return `#${str}`;
    
    //     }
    
    //     console.log(generateHashTag(" yee vi cal rehi hae"));