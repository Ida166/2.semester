/* This exercise is a continuation of the live coding, where 
we fetched user data from https://jsonplaceholder.typicode.com/users 
using fetch and printed the username and email.

(a): Have your program print the phone number of the third user.

(b): Add code so that the website of the third user is also printed.*/

async function fetchUserPhonenumber(URL){
    let result = await fetch(URL); //error if the network fails
    let parsed = await result.json(); // error if parsing fails
    return parsed[2];
}

fetchUserPhonenumber("https://jsonplaceholder.typicode.com/users")
    .then(user => printUserInfo(user))
    .catch(error => console.log("Error: ", error.message));

function printUserInfo(user){
    console.log(`Phonenumber: ${user.phone}`)
    console.log(`Website: ${user.website}`)
}