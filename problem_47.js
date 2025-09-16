//? Q:47. Write a function to implement the throttle function.

//? Throttling is a technique in which, no matter how many times the user fires the event,
//  the attached function will be executed only once in a given time interval.

//* Constraints:
//? The throttle function should take a function and a delay as arguments.
//? It should return a new function that, when called, will execute the original
//  function at most once per every specified delay.


// const throttle = (func, delay) => {};
// const throttledFunction = throttle(() => console.log("Function executed!"), 1000);
// throttledFunction();
// throttledFunction();
// throttledFunction();
// // "Function executed!" will be logged to the console immediately, and then not again
//  for at least 1 second, no matter how many times the function is called.


// My solution
const throttle = (func, delay) => {
    let throttled = false;

    return function(...args) {
        if (!throttled) {
            func.apply(this, args);
            throttled = true;
            setTimeout(() => {
                throttled = false;
            }, delay);
        }
    };
};

const throttledFunction = throttle(() => console.log("Function executed!"), 1000);

throttledFunction();
throttledFunction();
throttledFunction();

// We can't really test this in a simple script, but you can use this in a browser
//  environment to see the effect.
// For example, attach it to a window resize or scroll event.


//? Explanation code step by step:
// 1. The `throttle` function takes two arguments: `func` (the function to be throttled)
//  and `delay` (the time interval in milliseconds).
// 2. Inside the `throttle` function, a variable `throttled` is initialized to `false`.
//  This variable will be used to track whether the function is currently throttled.
// 3. The `throttle` function returns a new function that takes any number of
//  arguments (`...args`).
// 4. Inside the returned function, it checks if `throttled` is `false`. If it is, 
// it means the function can be executed.
// 5. The original function `func` is called with the provided arguments using 
// `func.apply(this, args)`.
// 6. The `throttled` variable is set to `true`, indicating that the function is 
// now throttled.
// 7. A `setTimeout` is set up to reset the `throttled` variable back to `false` 
// after the specified `delay`.
// 8. If the returned function is called again while `throttled` is `true`,
// it will not execute the original function until the delay has passed.