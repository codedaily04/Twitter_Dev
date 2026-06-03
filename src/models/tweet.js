import mongoose from 'mongoose';

const tweetSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true,
        max:[250,'Post cannot be more than 250 characters']
    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Like'
    }],
    //here we are keeping the comment array in tweet schema, so that we can render the top comment or comment count under tweets if we want to
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comment'   
}]
},{timestamps:true});


const Tweet=mongoose.model('Tweet',tweetSchema);
export default Tweet;