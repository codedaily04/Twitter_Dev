import express from 'express';
import {connect} from './config/database.js';
const app= express();

import TweetService from './services/tweet-service.js';

app.listen(3000,async ()=>{
    console.log("Server is running on port 3000");
    await connect();
    console.log("Database connected successfully");
    // let repo= new HashtagRepository();
    // let response = await repo.findByName(['Trend','Career']);// make let variable when you want to change the variable after initialization
    // console.log(response);
    // response=response.map(tag=>tag.title);
    // console.log(response);
    // let service=new TweetService();
    // let response=await service.create({
    //     content:'Been to mountains , Enjoyed #New Life , Felt #good #Testing'
    // });
    // console.log(response);
    let service=new TweetService();
    let tweet= await service.create({
        content : '#GOOD fellas?'
     });
     console.log(tweet);
});
