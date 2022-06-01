const express = require('express')
const app = require("liquid-express-views")(express())
// const app = require(express())
const port = 3000

app.listen(port, (req, res) => {
    console.log('listening on port: ' + port)
})

app.get('/', (req, res) => {
    res.send('Welcome to the Gitpub App!')
})

