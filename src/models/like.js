import mongoose from 'mongoose';
//extendable LikeSchema
const LikeSchema = new mongoose.Schema({
    onModel:{
        type:String,
        required:true,
        enum:['Tweet','Comment']
        //here we are deciding that on which model we are showing likes
    },
    likable:{
        //and based on that enum, we can store the tweet id or comment id
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        refPath:'onModel'
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    }
},{timestamps:true});

const Like=mongoose.model('Like',LikeSchema);
export default Like;