const express = require('express');
const app =express();
const port = 3000;
const middleware = require('./middleware')
const path = require('path');
const bodyparser = require("body-parser");
const mongoose = require("./database");
const session = require("express-session");


const server = app.listen(port,()=>console.log("Server listening on port " + port));

app.set("view engine","pug");
app.set("views","views");
app.use(bodyparser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,"public")));
//public file static so anyone can use that 
app.use(session({
    secret:"suthesh",
    resave:true,
    saveUninitialized:false
    // secret is used to hash the session 
    //save the session
    // did get initialized
}));
//
//Routes
const loginRoute= require('./routes/loginRoutes')
const RegisterRoute= require('./routes/registerRoutes')
app.use("/login",loginRoute);
app.use("/register",RegisterRoute);

app.get("/",middleware.requireLogin,(req,res,next)=>{

    var payload = { 
        pageTitle: "Welcome friends"
    }
    
    res.status(200).render("home",payload);
    //see here we are changing this from "send" to "render"
    // rendering the home pug file and passing payload object to change data dynamically
});
//handle get request from the server by default link

