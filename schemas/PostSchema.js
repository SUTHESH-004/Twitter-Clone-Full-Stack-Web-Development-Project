 const mongoose = require('mongoose');

 const Schema = mongoose.Schema;

 const PostSchema = new Schema({
    content:{type:String,trim:true},
    postedBy:{type:Schema.Types.ObjectId,ref:'User'},
    pinned:Boolean,
    likes:[{type:Schema.Types.ObjectId,ref:'User'}]
 },{timestamps: true});
 // timestamps add created at and updated at in database so it is good have that


 var Post = mongoose.model( 'Post', PostSchema );
 module.exports = Post;
    