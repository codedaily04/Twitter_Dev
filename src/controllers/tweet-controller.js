import TweetService from '../services/tweet-service.js';

const tweetService=new TweetService();

export const createTweet = async (req,res)=>{
    try {
        const tweet=await tweetService.create(req.body);
        return res.status(201).json({
            message:'Tweet created successfully',
            success:true,
            data:tweet,
            error:null
        });
        
    } catch (error) {
        return res.status(500).json({
            message:'Error creating tweet',
            success:false,
            data:null,
            error:error
        });
    }
}
