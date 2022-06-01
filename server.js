const express = require('express')
const app = require("liquid-express-views")(express())

app.get('/', (request, response) => {
    
    response.send('Welcome to the Gitpub App!')
})









app.listen(3000, () => {
    console.log("listening on port 3000!")
})