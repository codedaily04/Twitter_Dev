import mongoose from 'mongoose';

const hashtagSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    tweets:[{
        //meaning that, there will be many tweets that belongs to a single hashtags
        type:mongoose.Schema.Types.ObjectId,
        ref:'Tweet'
    }]
},{timestamps:true});

const Hashtag=mongoose.model('Hashtag',hashtagSchema);
export default Hashtag;