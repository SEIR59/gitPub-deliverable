const express = require('express')
const app = require("liquid-express-views")(express())
const port = 3000
const drinks = require('./models/drinks.js')
app.listen(3000, () =>{
    console.log("listen to port 3000")
})

app.get('/',  (req,res) => {
    res.send('Welcome to the Gitpub App!')
})

app.get('/drinks' , (req,res) =>{
    res.send (drinks)
})