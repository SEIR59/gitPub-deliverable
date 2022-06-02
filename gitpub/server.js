const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Welcome to the Gitpub App!")
})

app.listen(port, (req, res) =>{
    console.log("Listening to port 3000 :)")
})