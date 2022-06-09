const express = require('express')
const app = require("liquid-express-views")(express())
const port = 3000
const drinks = require('./models/drinks')



app.get('/', (req, res) => {
    res.send('Welcome to the Gitpub App!')
})

app.get('/drinks/', (req, res) => {
    res.render('index', {
        allDrinks: drinks
    })
})

app.get('/drinks/:index/', (req, res) => {
    res.render('show', {
        drink: drinks[req.params.index]
    })
})
// app.get('/drinks/:index', function(req, res){
//     res.render('show', { //second param must be an object
//         drink: drinks[req.params.index] //there will be a variable available inside the Liquid file called fruit, its value is fruits[req.params.indexOfFruitsArray]
//     });
// });    

app.listen(port, () => {
    console.log('running on 3000 ya ass')
}) 