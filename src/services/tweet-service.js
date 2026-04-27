const {TweetRepository} = require('../repository/index');
const {HashtagRepository} = require('../repository/index');

class TweetService{
    constructor(){
        this.tweetRepository=new TweetRepository();
        this.hashtagRepository=new HashtagRepository();
    }

    //create tweet with hashtag Logic
    async create(data){
        const content=data.content;
        let tags=content.match(/#[a-zA-Z0-9_]+/g); //this regex extracts hashtags
        tags=tags.map(tag=>tag.substring(1)); //removing the # from the tags
        // console.log(tags);
        const tweet=await this.tweetRepository.create(data);
        // Here, now we will try to eliminate the already present hashtags
        let alreadyPresentTags=await this.hashtagRepository.findByName(tags);// We are getting the array of hashtags titles


        let TitleofalreadyPresentTags=alreadyPresentTags.map(tag=>tag.title);//getting the title of the hashtags
        let newTags=tags.filter(tag=>!TitleofalreadyPresentTags.includes(tag));//filtering the already present tags
        newTags=newTags.map(tag=>({title:tag, tweets:[tweet._id]}));//creating the new hashtags with tweet id

        //putting them in BulkCreate Function
        const response=await this.hashtagRepository.bulkCreate(newTags);
        // We can improve it by putting them into set or map... and Overall Complexity will be less then using filter function

        alreadyPresentTags.forEach((tag)=>{
            tag.tweets.push(tweet._id);
            tag.save();
        })

        /***
         * 1. Bulcreate in mongoose
         * 2. Filter title of hashing based on multiple tags
         * 3. How to add tweet id in the hashtag model
         */
        return tweet;
    }

}

module.exports=TweetService;