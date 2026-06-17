

//Network requests are asynchronous and handled with Promises, so they don’t block the rest of the program.

console.log("Before the request");

fetch("http://example.com")  // Starts an HTTP request (asynchronous, does NOT block)
    .then(response => response.text())  // When the response arrives → convert it to text (still async, returns a Promise)
    .then(data => {    // When the text is ready → run this function with the data
        console.log("Request finished.");  // Runs after the request is fully completed
        console.log("Page size", data.length);  // Prints the size of the page content
        console.log("Page content", data)  // Prints the actual HTML/content of the page
    })
    .catch(error => console.log("Error", error.message)); // If anything fails (network error, etc.) → handle it here

console.log("After the request"); // Runs immediately after fetch is started (does NOT wait)