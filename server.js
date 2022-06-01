const express = require('express')

const app = require("liquid-express-views")(express())

const port = 3000

const drinks = require('./models/drinks.js')


app.listen(3000, () =>{
    console.log('listening to 3000')
})

app.get('/', (req, res) => {
    res.send('Welcome to the Gitpub')
})

app.get('/drinks', (req, res) => {
    res.render(
        'index',
    {
        allDrinks: drinks
    }
    )
})

app.get('/drinks/:id', (req, res) => {
    res.send(req.params.id)
})