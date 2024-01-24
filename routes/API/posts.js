const express = require('express');
const app =express();
const router= express.Router();
const bodyParser = require("body-parser");
const User = require('../schemas/UserSchema');



app.use(bodyParser.urlencoded({extended:false}));
router.get("/",(req,res,next)=>{
    
    //see here we are changing this from "send" to "render"
});
router.post("/",async(req,res,next)=>{
    res.status(200).send("it worked");
   });
 module.exports = router;
 // note that it is exports not export;