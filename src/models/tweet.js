import mongoose from 'mongoose';

const tweetSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true,
        max:[250,'Post cannot be more than 250 characters']
    },
    hastages:[{
        //there will be multiple hastags for a single tweets
        type:mongoose.Schema.Types.ObjectId,
        ref:'Hashtag'
    }]
},{timestamps:true});


const Tweet=mongoose.model('Tweet',tweetSchema);
export default Tweet;