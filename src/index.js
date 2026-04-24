const express=require('express');
const connect = require('./config/database');
const app=express();
const Comment=require('./models/comments');
// const Tweet=require('./models/tweet');

const TweetRepository=require('./repository/tweet-repository');

app.listen(3000,async ()=>{
    console.log("Server is running on port 3000");
    await connect();
    console.log("Database connected successfully");
    // const tweet= await Tweet.create({
    //     content:"Tweet With TimeStamps",
    //     Email:"2424@asdfs.com"
    // });
    // const tweets=await Tweet.find({Email:'2424@asdfs.com'});
    // const tweets=await Tweet.findById('69eb1ca92ab1ecfb79442131');
    // tweets.Email='YoYo@ok.com';
    // await tweets.save();
    // console.log(tweets);
    // const tweet=await tweetRepo.update('69eb5f11aaa6874df681bdab',{content:'new Item Sir '});

    
    
    // const comment= await Comment.create({content:'This is a comment'});
    // tweet.comments.push(comment);
    // await tweet.save();
    const tweetRepo=new TweetRepository();
    const tweet = await tweetRepo.getWithComments('69eb74ac66c77e6008190d1d');
    console.log(tweet);

});