const express = require('express')
const app = require('liquid-express-views')(express())
const port = 3000
const drinks = require('./models/drinks')

app.listen(port, (req, res) => {
    console.log('listening on port: ' + port)
})

app.get('/', (req, res) => {
    res.send('Welcome to the Gitpub App!')
})

app.get('/drinks', (req, res) => {
    res.render('index', 
    {
        allDrinks: drinks
    })
})

app.get('/drinks/:id', (req, res) => {
    // res.send(req.params.id)
    res.render('show', 
    {
        drink: drinks[req.params.id]
    })
})