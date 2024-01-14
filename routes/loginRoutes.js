const express = require('express');
const app =express();
const router= express.Router();

app.set("view engine","pug");
app.set("views","views");

router.get("/",(req,res,next)=>{
    res.status(200).render("login");
    //see here we are changing this from "send" to "render"
});

 module.exports = router;
 // note that it is exports not export;