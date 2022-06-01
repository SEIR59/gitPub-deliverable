const express = require('express')
const app = require("liquid-express-views")(express())
const drinks = require('./models/drinks')


app.get('/drinks', (req, res)=> {
    res.render('index')
})

app.listen(3000, ()=> {
  console.log("I am listening for requests!!!");

});