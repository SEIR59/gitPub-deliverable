const express = require('express');
const app = require('liquid-express-views')(express());
const port = 3000;
const drinks = require('./models/drinks.js');

app.get('/', (req,res) => {
    res.send(`Welcome to the Gitpub App!`);
})

app.get('/drinks', (req,res) => {
    res.render('index',
    {allDrinks: drinks});
});


app.get('/drinks/:id', (req,res) => {
    res.render('show',
    {drink: drinks[req.params.id]})
});




app.listen(port, () => {
    console.log(`app is running on port 3000`)
})