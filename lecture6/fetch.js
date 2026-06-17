//Fetch(primise) VS Fetch(Async)
// %læsevenligt     Er læsevenligt 
// kæde struktur    Linær struktur 
//Fetch – Using Promise Chaining 

/*et baseURL = "https://jsonplaceholder.typicode.com";
let usersEndpoint = "users";
let postsEndpoint = "posts";
let userID = 1;
fetch(baseURL + "/" + usersEndpoint + "/" + userID) //returnerer en Promise
    .then(response => response.json()) //ruges til at håndtere resultatet
    .then(user => {
        console.log("User: " + user.name);
        return fetch(baseURL + "/" + postsEndpoint + "?userId=" + user.id);
})
.then(response => response.json())
.then(posts => {
    console.log("First post: " + posts[0].title);
})
.catch(error => console.error("Error: " + error)); //samler fejl ét sted */

//Fetch – Using async/await syntax (funktionen automatisk returnerer en Promise)
let baseURL = "https://jsonplaceholder.typicode.com";
let usersEndpoint = "users";
let postsEndpoint = "posts";
let userID = 1;
async function fetchUserAndPost(){
    // Fetch user
    const userResponse = await fetch(baseURL + "/" + usersEndpoint + "/" + userID);
    const user = await userResponse.json();
    console.log("User: " + user.name);

    // Fetch the user's first post
    const postsResponse = await fetch(baseURL + "/" + postsEndpoint + "?userId=" + user.id);
    const posts = await postsResponse.json();
    console.log("First post: " + posts[0].title);
}
fetchUserAndPost();