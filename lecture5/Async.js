/* async makes a function automatically return a Promise, 
and the result must be handled asynchronously.*/

// Normal function → returns a value directly
function fun(){
    return "My function"; // returns string immediately
}

// Async function → always returns a Promise
async function afun(){
    return "My function"; // automatically wrapped in a resolved Promise
}


console.log(fun()); // Calls normal function → prints the actual value

let promise = afun(); // Calls async function → returns a Promise object (not the value directly)
console.log(promise); // Output: Promise { 'My function' }

promise.then( result => console.log(result) ); // Use .then() to get the resolved value from the Promise

/*
> My function
> Promise { 'My function' }
> My function
*/ 