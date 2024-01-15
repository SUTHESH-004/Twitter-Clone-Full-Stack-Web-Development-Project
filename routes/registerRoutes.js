const express = require('express');
const app =express();
const router= express.Router();
const bodyparser = require("body-parser");
//body parser is useded to get the req.body;
const User = require("../schemas/UserSchema");



app.set("view engine","pug");
app.set("views","views");
app.use(bodyparser.urlencoded({extended: false}));//by this we can get the req.body
//important
router.get("/",(req,res,next)=>{
    res.status(200).render("register");
    //see here we are changing this from "send" to "render" m s, a,kmlfkemfklew
});
router.post("/",(req,res,next)=>{
     
    var firstname = req.body.firstName.trim();
    var lastname = req.body.lastName.trim();
    var username = req.body.userName.trim();
    var email = req.body.email.trim();
    var password = req.body.password;
    // console.log(firstname);
    var payload = req.body;

    if(firstname&&lastname&&username&&email&&password)
    {
         User.findOne({
             $or:[
                {userName:username},
                {email: email}]
                //just  or operator in mango db
                //these pink brackets are like where clause
                })
                .then((user)=>{
                  console.log(user);
                })
         // its going to find a one row where userName in schema = username in register.js;
        
    }
    else{
        payload.errorMessage = "Make sure each field has a valid email.";
        res.status(200).render("register",payload);
    }

    
    //see here we are changing this from "send" to "render"
});

 module.exports = router;
 // note that it is exports not export;