const express = require('express')
const res = require('express/lib/response')
const app = require("liquid-express-views")(express())
const drinks = require('./models/drinks')

app.get('/', (req, res) => {
    
    res.send('Welcome to the Gitpub App!')
})

 app.get('/drinks', (req, res) => {
    res.render(
        'index',
        {
            allDrinks: drinks
        }
    )
})

app.get(`/drinks/:id`,(req, res) => {
    res.render(
        'show',
        {
           drink: drinks[req.params.id]
        }
    )
})




app.listen(3000, () => {
    console.log("listening on port 3000!")
})