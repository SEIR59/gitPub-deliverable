const express = require("express");
const drinks = require("./models/drinks.js");
const food = require("./models/food.js");
const app = require("liquid-express-views")(express());

app.get("/", (req, res) => {
  res.send("Welcome to the Gitpub App!");
});

app.get("/drinks", (req, res) => {
  res.render("index", {
    drinks,
    food,
  });
});

app.get("/drinks/:id", (req, res) => {
  res.render("show", {
    drink: drinks[req.params.id],
  });
});

app.get("/food/:id", (req, res) => {
  res.render("food", {
    food: food[req.params.id],
  });
});

app.listen(3000, () => {
  console.log("listening");
});
