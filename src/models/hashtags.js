const mongoose=require('mongoose');

const hashtagSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    tweets:[{
        //meaning that, there will be many tweets that bwlongs to a single hashtags
        type:mongoose.Schema.Types.ObjectId,
        ref:'Tweet'
    }]
},{timestamps:true});

const Hashtag=mongoose.model('Hashtag',hashtagSchema);
module.exports=Hashtag; 