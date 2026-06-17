/* Asynchronous functions (like setTimeout) don’t block execution.
JavaScript continues running the rest of the code while waiting.

This is important for things like:
- Loading data from an API
- Waiting for user input
- Timers
- Preventing the UI from freezing */

console.log("Start");
setTimeout(() => {
    console.log("Inside timeout");
}, 1000);
console.log("End");

/* output:
Start
End
Inside timeout */