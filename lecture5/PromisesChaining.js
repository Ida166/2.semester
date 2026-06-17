/* We have a sequence of asynchronous tasks that need to be done
- Loading script
- Fetching URL
- Fetching HTML body
- Closing connection*/

//Fetch returns a Promise by default, so we don’t need to create one manually 
fetch("https://jsonplaceholder.typicode.com/users") //API useful for testing and experimentation
.then(response => response.json())  // Converts response to JSON (returns a new Promise) (Output of current arrow function is input to the next one)
.then(users => users[0]) // // Gets the first user from the array
.then(user => user.name) // Extracts the user's name
.then(name => console.log("First name:", name)) //Print user name
.catch(error => console.log("Error:", error.message)); // Handles any errors
