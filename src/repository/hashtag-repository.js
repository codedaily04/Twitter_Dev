const hashtag = require('../models/hashtags');

class HashtagRepository {

    // Create a new hashtag
    async create(data) {
        try {
            const tag = await hashtag.create(data);
            return tag;
        } catch (error) {
            console.error('Error creating hashtag:', error);
            throw error;
        }
    }

    async bulkCreate(data){
        try {
            const tags = await hashtag.insertMany(data);
            return tags;
        } catch (error) {
            console.log(error);
        }
    }

    async get(id) {
        try {
            const tag=await hashtag.findById(id);
            return tag;
        } catch (error) {
            console.error(`Error fetching hashtag with ID ${id}:`, error);
            throw error;
        }
    }

    async destroy(id) {
        try {
            const response = await hashtag.findByIdAndDelete(id);
            return response;
        } catch (error) {
            console.error(`Error deleting hashtag with ID ${id}:`, error);
            throw error;
        }
    }

    async findByName(TitleList){//giving array as TitleList 
        try {
            const tags = await hashtag.find({
                title:TitleList
             }); //.select('title -_id'); //selecting only title field from the document and "-_id" will eliminate the id field
            return tags;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = HashtagRepository;