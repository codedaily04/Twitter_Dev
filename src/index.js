const express=require('express');
const connect = require('./config/database');
const app=express();
const Comment=require('./models/comments');
// const Tweet=require('./models/tweet');

const TweetRepository=require('./repository/tweet-repository');
const HashtagRepository=require('./repository/hashtag-repository');
const TweetService=require('./services/tweet-service');

app.listen(3000,async ()=>{
    console.log("Server is running on port 3000");
    await connect();
    console.log("Database connected successfully");
    // let repo= new HashtagRepository();
    // let response = await repo.findByName(['Trend','Career']);// make let variable when you want to change the variable after initialization
    // console.log(response);
    // response=response.map(tag=>tag.title);
    // console.log(response);
    let service=new TweetService();
    let response=await service.create({
        content:'Been to mountains , Enjoyed #New Life , Felt #good #Testing'
    });
    console.log(response);
});