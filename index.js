const express = require('express')

const app = require('liquid-express-views')(express())

const drinks = require('./models/drinks.js')
const foods = require('./models/food.js')


const port = 3000;

app.listen(port,() => {
    console.log("listening on port", port)
})

app.get('/', (req,res) =>{
    res.send('Welcome to the Gitpub App!')
})


// app.get('/drinks', (req,res) =>{
//     res.render('index', 
//     {
//         allDrinks: drinks
//     }
    
//     )
//     console.log(drinks)
// })


app.get('/menu', (req,res) =>{
    res.render('index', 
    {
        allDrinks: drinks,
        allFoods: foods
    }
    
    )
    
})

app.get('/menu/drink/:id', (req,res) =>{
    res.render('show',
    {
    this: drinks[req.params.id] 
    }
    )
})

app.get('/menu/food/:id', (req,res) =>{
    res.render('show',
    {
    this: foods[req.params.id] 
    }
    )
})
