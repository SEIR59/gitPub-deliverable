const express = require("express");
const app = require("liquid-express-views")(express());
const port = 3000;
const drinks = require("./models/drinks.js");
const food = require("./models/food.js");

app.get("/", (req, res) => {
  res.send("Welcome to the Gitpub App!");
});

app.get("/drinks", (req, res) => {
  res.render("index", { drinks, food });
});

app.get("/drinks/:id", (req, res) => {
  res.render("show", {
    render: drinks[req.params.id],
  });
});

app.get("/food/:id", (req, res) => {
  res.render("show", {
    render: food[req.params.id],
  });
});

app.listen(port, () => {
  console.log("listening to " + port);
});
