const express = require('express');
const app =express();
const router= express.Router();
const bodyParser = require("body-parser");
const User = require('../../schemas/UserSchema');
const Post = require('../../schemas/PostSchema');

app.use(bodyParser.urlencoded({extended:false}));
router.get("/",(req,res,next)=>{
    Post.find()
    .populate("postedBy")
    .sort({"createdAt":-1})
    .then((results)=>{
       res.status(200).send(results);
    })
    .catch(error=>{
        console.log(error);
        res.sendStatus(400);
    })
    
});
router.post("/",async( req,res,next)=>{

    if(!req.body.content)
    {
        console.log("Content is not valid");
        return res.sendStatus(400);
    }
    var postsdata ={

        content:req.body.content,
        postedBy:req.session.user
    };
    Post.create(postsdata)
    .then(async (newPost)=>{
        newPost = await User.populate(newPost,{path:"postedBy"})
          res.status(201).send(newPost);


          //201 means is created


    })

    .catch((error)=>{
        console.log(error);
        res.sendStatus(400);

    })


    // res.status(200).send("it worked");
   });
router.put("/",async( req,res,next)=>{
    res.status(200).send("yahoo");
   });
 module.exports = router;
 // note that it is exports not export;