const express = require('express')
const app = require('liquid-express-views')(express())
const port = 3000

app.get('/', (req, res) => {
    res.send('Welcome to the GitPub App')
})


app.listen(port, () => {
    console.log("Pub has opened")
})