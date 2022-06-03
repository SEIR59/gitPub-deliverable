const express = require('express')
const res = require('express/lib/response')
const app = require('liquid-express-views')(express())
const drinks = require('./models/drinks.js')
const port = 3100

app.listen(port, () => {
	console.log(`Listening on port ${port}!!`)
})

app.get('/', (req, res) => {
	res.send('Welcome to the Gitpub App!')
})

app.get('/drinks/', (req, res) => {
	res.render('index.liquid', { 
		allOfTheDrinks: drinks,
	})
})

app.get('/drinks/:id', (req,res) => {
	res.render('show.liquid', {
		drink:drinks[req.params.id]
	}) 
})