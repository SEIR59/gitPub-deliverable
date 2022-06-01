const express = require('express')
const app = require("liquid-express-views")(express())
const port = 3000
const drinks = require('./models/drinks.js')
const food = require('./models/food.js')

app.listen(3000, () =>{
    console.log("listen to port 3000")
})

app.get('/',  (req,res) => {
    res.send('Welcome to the Gitpub App!')
})

app.get('/menu' , (req,res) =>{
    res.render ('index', 
    {alldrinks:drinks,
    allfood:food
    }
)
})

app.get('/drinks/:id' , (req,res) =>{
    res.render('show',
        {this: drinks[req.params.id]})
})

// app.get('/food' , (req,res) =>{
//     res.render ('index', 
//     {allfoods:food}
// )
// })

app.get('/food/:id' , (req,res) =>{
    res.render('show',
        {this: food[req.params.id]})
})