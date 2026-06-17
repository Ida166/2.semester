const express = require("express");

const app = express();
const port = 3000;

app.use(express.static(__dirname));

// Adding a link to the about page from the main page
app.get("/", (req, res) => {
  res.send(`
    <head>
      <link rel="stylesheet" href="/style.css">
    </head>
    <body>
      <header id="site-header">
        My Website
      </header>

      <main id="main-content">
        <h1>Hello World!</h1>
        <div class="link-container">
          <a class="id" href="/about">Go to about page</a><br>
          <a class="id" href="/user/charlie/post/1">Go to Charlies user page</a><br>
        </div>
      </main>

      <footer id="site-footer">
      </footer>

    </body>
  `);
});

// Adding a static route
app.get("/about", (req, res) => {
  res.send("This is the about page.");
})

// Adding a dynamic route (when user visits: http://localhost:3000/hello/Charlie, it returns "Hello Charlie")
app.get("/hello/:name", (req, res) => {
  res.send("Hello " + req.params.name);
});

// Adding query parameters so that when user visits http://localhost:3000/greet?name=Alice, it returns Hello Alice.
app.get("/greet", (req, res) => {
  const name = req.query.name || "stranger";
  res.send("Hello " + name);
});

//Adding a dynamic route ( when user visets: /user/:name/post/:id, it returns User <name>, Post <id>" ) http://localhost:3000/user/Alice/post/5, shows "User Alice, Post 5" in the browser.
app.get("/user/:name/post/:id", (req, res) => {
    const name = req.params.name;
    const id = req.params.id;
    res.send("User " + name + ", " + "Post " + id);
})

//Create a route at /search, taking two parameter term and limit Adding query parameter so that when user visits http://localhost:3000/search?term=books&limit=3, it shows "Searching for books, showing 3 results" in the browser.
app.get("/search", (req, res) => {
  const term = req.query.term;
  const limit = req.query.limit;

  if(term === undefined || limit === undefined){
    res.status(404).send("Please provide search parameters");
  }else{ 
    res.send("Searching for " + term + ", showing " + limit + " results");
  }
})


// Adding a "catch-all" 404 route.
app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});