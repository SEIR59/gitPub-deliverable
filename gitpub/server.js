const express = require('express')
const app = require("liquid-express-views")(express())
const port = 3000
const drinks = require('./models/drinks.js')

app.get('/', (req, res) => {
    res.send("Welcome to the GitPub App!")
})

app.get('/drinks', (req, res) => {
    res.render('index', 
    {
    allDrinks: drinks
    })
})

app.get('/drinks/:id', (req, res) => {
    res.render('show', 
    {
    drink: drinks[req.params.id]
    })
})

app.listen(port, (req, res) =>{
    console.log("Listening to port 3000 :)")
})