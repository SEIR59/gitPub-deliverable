const express = require("express")

const app = require("liquid-express-views")(express())

const port = 3000

const drinks = require("./models/drinks.js")

app.listen(port, () => {
  console.log("server is running")
})

app.get("/", (req, res) => {
  res.send("Welcome to the Gitpub App!")
})

app.get("/drinks", (req, res) => {
  res.render('index')
})
