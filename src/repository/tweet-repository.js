import Tweet from '../models/tweet.js';
import CrudRepository from './crud-repository.js';


class TweetRepository extends CrudRepository{
    constructor(){
        super(Tweet);
    }
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

export default TweetRepository;