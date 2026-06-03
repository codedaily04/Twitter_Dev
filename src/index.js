import express from 'express';
import {connect} from './config/database.js';
import bodyParser from 'body-parser';

import {UserRepository, TweetRepository} from './repository/index.js';
import LikeService from './services/like-service.js';
import apiRoutes from './routes/index.js';

const app= express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api',apiRoutes);




app.listen(3000,async ()=>{
    console.log("Server is running on port 3000");
    await connect();
    console.log("Database connected successfully");
   
    const userRepo = new UserRepository();//creating user
   
});


 // const user=await userRepo.create({
    //     email:'neha@gmail.com',
    //     password:'123456',
    //     name:'Neha'
    // });
    // console.log(user);

    // const tweetRepo = new TweetRepository();
    // const tweet=await tweetRepo.getall();
    // const user= await userRepo.getall();
    // const likeService=new LikeService();
    // await likeService.toggleLike(tweet[0]._id,'Tweet',user[0].id);
