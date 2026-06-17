/* Producing and Consuming code

The producer: code that take time to run
The Consumer: Part of code that need the result of the producing code.
JavaScript Promise: objekt -> connects produsing and consuming code.

*/
/*  Promise object that contains
    - A function with two arguments resolve and reject
    - The executor (actual code which may take time to complete)
    
    The resolve and reject arguments are callback functions
    - If the producing code finished successfully, call the resolve function
    - Otherwise (there was an error) call reject.
    - The resolve and reject functions are predefined by the JavaScript engine (node/browser)
    The promise object contains has two internal properties
    - state: The state of the producing code
    - result: The actual value of the execution of the functio 
    */

// Prints done after 1000 ms   
// - When a Promise succeeds, it calls resolve(), and .then() handles the result.  
//Producer
let promise = new Promise(function(resolve, reject) { //Promise is created.
    setTimeout(() => resolve("done!"), 1000); // executor (the producing code). After 1 second → resolve() runs.
});

//Consuming part (use .then to use the result)( result is a member of the promise object)
promise.then( //.then() receives "done!"
    result => console.log(result)
);

//Finally handler -> cleans up/ is executed nomatter the outcome of the prommise
promise.finally(
    () => console.log("Cleaning up")
);

//Cenario unsuccessful code
// - When a Promise fails, it calls reject(), and .catch() handles the error.
// Producer
let promise1 = new Promise(function(resolve, reject) { //Promise is created.
    setTimeout(() => reject(new Error("failed!")), //After 1 second, it calls reject(new Error("failed!"))     
    1000);   //  Error is an error object here
});

// Consumer
promise1.catch( //uses .catch() to handle the error.
    error => console.log(error)
);

//Finally handler -> cleans up/ is executed nomatter the outcome of the prommise
promise1.finally(
    () => console.log("Cleaning up")
);