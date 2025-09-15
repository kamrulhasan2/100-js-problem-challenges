//? Q:46. Write a function to implement the debounce function.

//? Debounce is a programming practice used to ensure that time-consuming tasks do not
//  fire so often that it stalls the performance of the web page. In other words,
//  it limits the rate at which a function gets invoked.

//* Constraints:
//? The debounce function should take a function and a delay as arguments.
//? It should return a new function that, when called, will only execute the original
//  function after the specified delay has passed without any new calls.


// const debounce = (func, delay) => {};
// const debouncedFunction = debounce(() => console.log("Function executed!"), 1000);
// debouncedFunction();
// debouncedFunction();
// debouncedFunction();
// // After 1 second, "Function executed!" will be logged to the console only once.


// My solution
const debounce = (func, delay) => {
    let timeoutId;

    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
};

const debouncedFunction = debounce(() => console.log("Function executed!"), 1000);

debouncedFunction();
debouncedFunction();
debouncedFunction();

// We can't really test this in a simple script, but you can use this in a browser
//  environment to see the effect.
// For example, attach it to a window resize or scroll event.

/*******
 * Code Explanation step by step:
 * 1. We define a function called debounce that takes two parameters: 
    * func (the function to be debounced) and delay 
    * (the time in milliseconds to wait before executing func).
 * 2. Inside debounce, we declare a variable timeoutId to keep track of the timeout.
 * 3. We return a new function that takes any number of arguments (...args).
 * 4. When the returned function is called, it first clears any existing timeout 
    * using clearTimeout(timeoutId). This prevents the previously scheduled execution
    *  of func.
 * 5. It then sets a new timeout using setTimeout, which will call func after the 
    * specified delay. The func is called with the correct context (this) and the 
    * arguments (...args) passed to the returned function.
 * 6. We create a debounced version of a simple function that logs "Function executed!"
    * to the console, with a delay of 1000 milliseconds (1 second).
 * 7. We call the debounced function multiple times in quick succession.
    *  Due to the debounce logic, "Function executed!" will only be logged once,
    *  1 second after the last call to debouncedFunction.
 */