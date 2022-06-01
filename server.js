const express = require('express')
const app = require("liquid-express-views")(express());
const port = 3000;


app.listen(3000,()=>{
    console.log("Welcome to the Gitpub App!")
})


