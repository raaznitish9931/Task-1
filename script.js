
const express = require('express')

const app = express();

app.set("view engine", "ejs")

app.get("/", function(req, res){  
    res.render("index")
    console.log(req.query)
})

app.get("/profile", function(req, res){
    res.render("index")
})

app.listen(3000);