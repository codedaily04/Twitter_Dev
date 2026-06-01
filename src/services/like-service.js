import {LikeRepository, TweetRepository} from '../repository/index.js';

class LikeService{
    constructor(){
        this.likeRepository=new LikeRepository();
        this.tweetRepository=new TweetRepository();
    }
    async toggleLike(modelid,modelType,userId){// /api/v1/likes/toggle?if=modelid&type=Tweet
        if(modelType==='Tweet'){
            var likeable = await (await this.tweetRepository.get(modelid)).populate('likes');
            //here, we had to wrap it around await because this part this.tweetRepository.get(modelid) will return a promise and in promise, we don't have populate function to work with
        }else if(modelType==='Comment'){
            //TODO
        }else {
            throw new Error('Invalid model type');
        }   
        //we will check if user's like is appeared or counted or not
        const exists=await this.likeRepository.findByUserAndLikable({
            user:userId,
            likeable:modelid,
            onModel:modelType
        });
        //if exist or if not exist
        if(exists){
            //if exist--> then remove the like
            likeable.likes.pull(exists.id);
            await likeable.save();
            await exists.deleteOne();
            var isAdded=false;

        }else{
            //if not exist-> then create one like with ids and all
            const newLike=await this.likeRepository.create({
                user:userId,
                likeable:modelid,
                onModel:modelType
            });
            likeable.likes.push(newLike.id);    
            await likeable.save();
            var isAdded=true;
        }
        return isAdded;
        
    }
   
}
export default LikeService;