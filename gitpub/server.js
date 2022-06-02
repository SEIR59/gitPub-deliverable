const express = require("express");
const req = require("express/lib/request");
const app = require("liquid-express-views")(express());
const port = 3000;

const drinks = require("./models/drinks.js");

app.listen(port, () => {
  console.log("This port is working");
});

app.get("/", (req, res) => {
  res.send("Welcome to the Gitpub App!");
});

app.get("/drinks", (req, res) => {
  res.render("index", {
    allDrinks: drinks,
  });
});

app.get("/drinks/:id", (req, res) => {
  res.send(drinks[req.params.id]);
});
