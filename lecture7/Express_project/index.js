const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send('<a href="/about">Go to about page</a>');
});

app.get("/about", (req, res) => {
  res.send("This is the about page");
});

app.get("/hello/:name", (req, res) => {
  res.send(`Hello ${req.params.name}`);
});

app.get("/greet", (req, res) => {
  res.send(`Hello ${req.query.name}`);
});

app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});