const express = require('express')
const app = require("liquid-express-views")(express())
const drinks = require('./models/drinks')


app.get('/', (req, res)=> {
    res.send('Welcome to the Gitpub App!')
})

app.listen(3000, ()=> {
  console.log("I am listening for requests!!!");

});