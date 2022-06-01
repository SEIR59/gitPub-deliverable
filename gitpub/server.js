const express = require('express')
const app = require("liquid-express-views")(express())

const port = 3000

app.get('/', (req, res) => {
    res.send('Welcome to the Gitpub App!')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})