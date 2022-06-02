const express = require("express");
const app = require("liquid-express-views")(express());
const port = 3000;

app.listen(port, () => {
  console.log("This port is working");
});

app.get("/", (req, res) => {
  res.send("Welcome to the Gitpub App!");
});
