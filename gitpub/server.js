const express = require("express")
const app = require("liquid-express-views")(express())
const port = 3000

const drinks = require("./models/drinks.js")

// main route for server.
app.get("/", (req, res) => {
    res.send("Welcome to the Gitpub App!")
})

app.get("/drinks", (req, res) => {
    res.send(drinks)
})

// make sure the server is up and listening
app.listen(port,() => {
    console.log(`Listening on port: ${port}!`)
})