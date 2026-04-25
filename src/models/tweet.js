const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    Email:{
        type:String
    },
    comments:[
        {
            //Use when using the
            type:mongoose.Schema.Types.ObjectId,
            ref:'Comment'
        }
    ]
},{timestamps:true});

tweetSchema.virtual('contentWithEmail').get(function(){
    return `${this.content} - ${this.Email}`;
});

tweetSchema.virtual('save').get(function(next){
    console.log('Inside a Hook');
    this.content=this.content+" Yo Bhai..Aap Hook mein hain";
    next();
})

const Tweet=mongoose.model('Tweet',tweetSchema);
module.exports=Tweet;