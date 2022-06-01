// pulling express
const express = require('express')
const app = require("liquid-express-views")(express())

// bringing in data
const drinks = require("./models/drinks.js")

// using the port
let port = 3000
app.listen(port, ()=>{
    console.log("Using port: ", port)
})

// welcome message
app.get('/', (request, response) => {
    response.send("Welcome to the Gitpub App!")
})

// displaying drinks
app.get('/drinks', (request, response) => {
    response.send(drinks)
})