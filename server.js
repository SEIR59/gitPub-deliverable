const express = require('express')
const app = require("liquid-express-views")(express())
const drinks = require("./models/drinks")



app.get('/', (req, res) => {
    res.send('Welcome to the Gitpub App!');
})

app.get('/drinks', (req, res) => {
    
    res.render("index", {
        drinks: drinks
    })
})


app.listen('3000', () => {
    console.log('port 3000 is active')
})
