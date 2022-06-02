const express = require('express')
const app = require("liquid-express-views")(express())
const drinks = require('./models/drinks.js')
const foods = require('./models/food.js')

const port = 3000

app.get('/', (req, res) => {
    res.send('Welcome to the Gitpub App!')
})

app.get('/resturant', (req, res) => {
    res.render('index.liquid', {allDrinks: drinks, allFoods: foods})
})

app.get('/drinks/:id', (req, res) => {
    //res.send(req.params.id)
    res.render('show.liquid', {
        element: drinks[req.params.id]
    })
})

app.get('/foods/:id', (req, res) => {
    //res.send(req.params.id)
    res.render('show.liquid', {
        element: foods[req.params.id]
    })
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})