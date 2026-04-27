const Tweet = require('../models/tweet');

class TweetRepository{

    async create(data){
        try {
            const tweet=await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async get(id){
        try {
            const tweet=await Tweet.findById(id);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async destroy(id){
        try {
            const tweet=await Tweet.findByIdAndDelete(id);
            console.log("Removed Tweet with id ",id);
        } catch (error) {
            console.log(error);
        }
    }

    async getWithComments(id){
        try {
            const tweet=await Tweet.findById(id).populate({path:'comments'});
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async getAll(offset,limit){
        try {
            const tweets=await Tweet.find().limit(limit).skip(offset);
            return tweets;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports=TweetRepository;