//? Write a function isEmptyObject that takes an object as input and determines whether 
// it is empty or not. An empty object is defined as an object with no own properties.

//? Your task is to implement the isEmptyObject function using
// JavaScript and return a message indicating whether the object is empty or not.


//* Constraints:
//? The input object may have any number of properties, including zero. 
//? The function should return a message indicating whether the object is empty or not.
//? You should use the provided isEmptyObject function signature without any 
// additional parameters.


// const isEmptyObject (obj) = {};
// console.log(isEmptyObject({ name: "vinod" })); // Output: "it's notempty"
// console.log(isEmptyObject({})); // Output: "it's empty"
// console.log(isEmptyObject({ keyWithNull: null })); // Output: "it's empty"
// console.log(isEmptyObject({ keyWithUndefined: undefined })); // Output: "it's empty"


// My solution
// const isEmptyObject = (obj) => {
//     if(!(typeof(obj) === 'object')){
//         return 'It is not an object';
//     }

//     const objKeys = Object.keys(obj);

//     if(objKeys.length === 0){
//         return "it's empty"
//     }
    
//     const result = objKeys.map((key)=>{
//         if(obj[key] === null){
//             return "it's empty" 
//         }
//         else if(obj[key] === undefined){
//             return "it's empty"
//         }

//        return "it's notempty"
//     })
    
//     return result[0]
// };

// // My solution2
// const isEmptyObject = (obj) => {
//     if(!(typeof(obj) === 'object')){
//         return 'It is not an object';
//     }
    
//     const objKeys = Object.keys(obj);

//     if(objKeys.length === 0){
//         return "it's empty"
//     }

//    for (const key of objKeys) {
//     if(obj[key] === null || undefined){
//         return "it's empty"
//     }

//     else{
//        return "it's not empty"
//     }
//    }
// };






console.log(isEmptyObject({ name: "vinod" }));
console.log(isEmptyObject({})); 
console.log(isEmptyObject({ keyWithNull: null }));
console.log(isEmptyObject({ keyWithUndefiend: undefined }));
console.log(isEmptyObject("vinod"));