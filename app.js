const express = require('express');
const app =express();
const port = 3000;

const server = app.listen(port,()=>console.log("Server listening on port " + port));


app.set("view engine","pug");
app.set("views","views");



app.get("/",(req,res,next)=>{
    res.status(200).render("home");
    //see here we are changing this from "send" to "render"
});
//handle get request from the server by default link

