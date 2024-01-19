const express = require('express');
const app =express();
const router= express.Router();
const bodyParser = require("body-parser");
const User = require('../schemas/UserSchema');
const bcrypt = require("bcrypt");


app.use(bodyParser.urlencoded({extended:false}));
router.get("/",(req,res,next)=>{

    if(req.session){
        req.session.destroy(()=>{
            res.redirect("/login");
        }
        )
    }
    //see here we are changing this from "send" to "render"
});

 module.exports = router;
 // note that it is exports not export;