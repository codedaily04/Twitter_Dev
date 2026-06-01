import Like from '../models/like.js';
import CrudRepository from './crud-repository.js';

class LikeRepository extends CrudRepository{
    constructor(){
        super(Like);
    }

    async findByUserAndLikable(data){
        try {
            const likes=await Like.findOne(data);
            return likes;
        } catch (error) {
            console.log(error);
        }
    }
}
export default LikeRepository;