/*
Write a Promise that fetches the following data from the https://jsonplaceholder.typicode.com/users API.
Username of the first user
Email of the first user
Also add code that runs independently of the asynchronous code.
*/

// JavaScript does not wait for fetch().
// Synchronous code continues running while the request happens in the background.
console.log("Starting request...")

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json()) // Parse JSON
    .then(users => users[0]) // Extract first user
    .then(user => {
        console.log("Username: ", user.username)
        console.log("Email: ", user.email)
    })
    ; 

console.log("Program continues while waiting...")


/* Now we use the async/await syntax
    - Recall that fetch automatically returns a Promise object 
    - .json() also returns a Promise object */

async function fetchUserMail(URL){ //Declares an async function (automatically returns a Promise)
    let result = await fetch(URL); //Waits for the HTTP request to complete
    let parsed = await result.json(); //Waits for JSON parsing
    let user = parsed[0];
    let mail = user.email;
    return mail; //Returns it (wrapped in a Promise automatically)
}
fetchUserMail("https://jsonplaceholder.typicode.com/users")
    .then(mail => console.log("Email:", mail)) //Receives the resolved value
    .catch(error => console.log("Error: ", error.message));

//Output: Email: Sincere@april.biz


/* Both versions:
    - Use Promises
    - Are non-blocking
    - Handle asynchronous network requests
async/await is just a cleaner way to write Promise-based code.*/