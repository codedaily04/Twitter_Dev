import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    //basically tweet pr bhi comment ho sakta hai aur comment pr bhi comment ho sakta hai
    onModel:{
        type:String,
        required:true,
        enum:['Tweet','Comment']
    },
    commentable:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        refPath:'onModel'
    },
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comment'   
}]
    //as we know that each comment can have multiple likes also we can add likes array in comment schema, but it would incrase the complexity, so if we want to fetcht the no.of likes on the commetn we can simply fetch it from like repo/like schema
},{timestamps:true});

const Comment=mongoose.model('Comment',CommentSchema);
export default Comment;