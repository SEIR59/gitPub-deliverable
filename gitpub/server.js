// Setup for express/liquid and drinks export file
const express = require('express')
const app = require("liquid-express-views")(express())
const drinks = require("./models/drinks.js")

app.listen(3000, () => {
    console.log('listening on port 3000!')
})

// Initial testing of server setup
app.get('/', (req, res) => {
    res.send('Welcome to the Gitpub App!');
})

// drinks route as json
app.get('/drinks', (req, res) => {
        res.render(
            'index',
            {
                allDrinks:drinks
            }
            );
});

app.get('/drinks/:id', (req, res) => {
    res.render('show', {
        drink: drinks[req.params.id]
    });
});

