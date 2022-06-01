const express = require("express");
const app = require("liquid-express-views")(express());
const port = 3000;
const drinks = require("./models/drinks.js");

app.get("/", (req, res) => {
  res.send("Welcome to the Gitpub App!");
});

app.get("/drinks", (req, res) => {
  res.render("index", { drinks });
});

app.get("/drinks/:id", (req, res) => {
  res.send(req.params.id);
});

app.listen(port, () => {
  console.log("listening to " + port);
});
