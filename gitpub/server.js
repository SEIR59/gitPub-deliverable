const express = require('express')
const app = require("liquid-express-views")(express())
const drinks = require('./models/drinks.js')

const port = 3000

app.get('/', (req, res) => {
    res.send('Welcome to the Gitpub App!')
})

app.get('/drinks', (req, res) => {
    res.render('index.liquid', {allDrinks: drinks})
})

app.get('/drinks/:id', (req, res) => {
    //res.send(req.params.id)
    res.render('show.liquid', {
        drink: drinks[req.params.id]
    })
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})