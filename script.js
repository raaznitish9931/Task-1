// we are getting the output using post method.

const express = require('express')

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(express.json());




app.get("/", function(req, res){
    res.render("index")
})
app.post("/profile", function(req, res){
    res.render("index")
    console.log(req.body)
})


app.listen(4000);


// const express = require('express')

// const app = express();

// app.set("view engine", "ejs")

// app.get("/profile", function(req, res){  
//     res.render("index")
//     console.log(req.query)
// })

// app.get("/", function(req, res){
//     res.send("index123")
// })

// app.listen(3000);