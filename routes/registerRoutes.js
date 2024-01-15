const express = require('express');
const app =express();
const router= express.Router();
const bodyparser = require("body-parser");
//body parser is useded to get the req.body;
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
    }
    else{
        payload.errorMessage = "Make sure each field has a valid email.";
        res.status(200).render("register",payload);
    }

    
    //see here we are changing this from "send" to "render"
});

 module.exports = router;
 // note that it is exports not export;