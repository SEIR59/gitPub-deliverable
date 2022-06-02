const express = require('express')
const app = require("liquid-express-views")(express())
const drinks = require('./models/drinks.js')
const port = 3000

app.listen(port, () => {
	console.log(`Listening on port ${port}!!`)
})

app.get('/', (req, res) => {
	res.send('Welcome to the Gitpub App!')
})

app.get('/drinks/', (req, res) => {
	res.send(drinks)
	
})
