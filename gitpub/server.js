const express = require("express")
const app = require("liquid-express-views")(express())
const port = 3000

const drinks = require("./models/drinks.js")
const foods = require("./models/food.js")
// function to capitalize the first letter of each drink name. returns NEW array.
const capArrNames = (arrayObjs) => {
    // change array to capitalize the first letter of each name
    let arrDrinks = arrayObjs
    for (let i = 0; i < drinks.length; i++) {
        let currentDrink = arrDrinks[i].name
        arrDrinks[i].name = currentDrink.charAt(0).toUpperCase() + currentDrink.slice(1)
    }
    return arrDrinks
}

const arrCapDrinks = capArrNames(drinks)

// main route for server.
app.get("/", (req, res) => {
    res.send("Welcome to the Gitpub App!")
})

// route will display all drinks and info
app.get("/drinks", (req, res) => {
    res.render("index",{
        allDrinks: arrCapDrinks,
        allFoods: foods,
    })
})

// route for individual drinks
app.get("/drinks/:id", (req, res) => {
    let drinkIndex = req.params.id
    res.render("show",{item: arrCapDrinks[drinkIndex]})
})
// route for individual foods
app.get("/foods/:id", (req, res) => {
    let foodIndex = req.params.id
    res.render("show",{item: foods[foodIndex]})
})

// make sure the server is up and listening
app.listen(port,() => {
    console.log(`Listening on port: ${port}!`)
})