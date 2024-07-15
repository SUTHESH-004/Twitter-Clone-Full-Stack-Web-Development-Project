const express = require('express');
const app =express();
const router= express.Router();
const bodyParser = require("body-parser");
const User = require('../schemas/UserSchema');
app.set("view engine","pug");
app.set("views","views");
const bcrypt = require("bcrypt");


app.use(bodyParser.urlencoded({extended:false}));
router.get("/",(req,res,next)=>{
    res.status(200).render("login");
    //see here we are changing this from "send" to "render"
});
router.post("/",async(req,res,next)=>{
    var payload = req.body;
    if(req.body.logUserName&&req.body.logPassword){

        var user= await User.findOne({
            $or:[
               {userName:req.body.logUserName},
               {email: req.body.logUserName}]
               //just  or operator in mango db
               //these pink brackets are like where clause
               })
               .catch((error)=>{
                   console.log(error);
                   payload.errorMessage = "Something went wrong";
                   res.status(200).render("login",payload);
               });
               if(user!=null)
               {
                  var result=await bcrypt.compare(req.body.logPassword,user.password)
                  if(result===true)
                  {
                    req.session.user = user;
                    return res.redirect("/");
                   
                  }
                }
                payload.errorMessage = "Login credentials incorrect";
                res.status(200).render("login",payload);

                // res.status(200).render("home");
            }
            payload.errorMessage = "Make sure each field has a valid value";
            res.status(200).render("login",payload);
    // res.status(200).render("login");
});
 module.exports = router;
 // note that it is exports not export;