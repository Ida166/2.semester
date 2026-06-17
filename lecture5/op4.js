/*Exercise 4:
In this exercise, we want to inspect the HTTP headers returned by a server. 
Note that the Promise returned by fetch() resolves when the headers are ready.

Write an async function, inspectHeaders(url), that takes an url as input, and prints the HTTP status code.

The URL you should use is: https://jsonplaceholder.typicode.com/users 

Expected output:
Status: 200

*/

async function inspectHeaders(url)
{
    let response = await fetch(url);
    console.log("Status:", response.status);
}
// Example usage:
inspectHeaders("https://jsonplaceholder.typicode.com/users")
    .catch(error => console.log("Error:", error.message));
    
