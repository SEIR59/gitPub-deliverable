const express = require('express')
const app = require("liquid-express-views")(express())
const port = 4000

const drinks = require('./models/drinks.js')

app.get('/', (req, res) => {
    res.send('Weclome to the Gitpub App!')
})

app.get('/drinks', (req, res) => {
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



app.listen(port, () => {
	console.log('listening', port)
});