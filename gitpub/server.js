const express = require('express')

const app = require("liquid-express-views")(express())

app.get('/',(req,res)=>{
    res.send("Welcome to the Gitpub App!")
})

app.listen(3000, () => {
    console.log("Hello World")
})