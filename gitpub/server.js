const express = require("express")
const app = require("liquid-express-views")(express())
const port = 3000

const drinks = require("./models/drinks.js")

// main route for server.
app.get("/", (req, res) => {
    res.send("Welcome to the Gitpub App!")
})

// route will display all drinks and info
app.get("/drinks", (req, res) => {
    // res.send(drinks)
    let arrDrinks = drinks
    // change array to capitalize the first letter of each name
    for (let i = 0; i < drinks.length; i++) {
        let currentDrink = arrDrinks[i].name
        arrDrinks[i].name = currentDrink.charAt(0).toUpperCase() + currentDrink.slice(1)
    }
    res.render("index",{allDrinks: arrDrinks})
})

// make sure the server is up and listening
app.listen(port,() => {
    console.log(`Listening on port: ${port}!`)
})