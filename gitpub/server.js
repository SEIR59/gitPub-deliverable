const express = require('express');
const app = require("liquid-express-views")(express())
const drinks = require('./models/drinks')

let port = 3000;

app.listen(port, (req, res) =>  {
    console.log('Welcome to the Gitpub App!');
});

app.get('/', (req, res) =>  {
    res.send('Welcome to the Gitpub App!');
});

app.get('/drinks', (req, res) =>  {
    res.send(drinks);
});