const express = require('express')
const drinks = require ('./models/drinks.js')
const app = require("liquid-express-views")(express())

app.get('/',(req,res)=>{
    res.send("Welcome to the Gitpub App!")
})

app.get('/drinks',(req,res)=>{
    res.render('index.liquid',
    {
        drinksList:drinks
    })
})

app.get('/drinks/:id', (req,res)=>{

    res.render('show',
    {
        drinkList:drinks[req.params.id]
    })
})


app.listen(3000, () => {
    console.log("Hello World")
})