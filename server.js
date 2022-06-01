const express = require("express");
const drinks = require("./models/drinks.js");
const app = require("liquid-express-views")(express());

app.get("/", (req, res) => {
  res.send("Welcome to the Gitpub App!");
});

app.get("/drinks", (req, res) => {
  res.render("index", {
    drinks,
  });
});

app.get("/drinks/:id", (req, res) => {
  res.send(req.params.id);
});

app.listen(3000, () => {
  console.log("listening");
});
