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
});