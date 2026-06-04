import User from '../models/user.js';
import CrudRepository from './crud-repository.js';

class UserRepository extends CrudRepository{
    constructor(){
        super(User);
    }

    async findBy(data){
        try {
            const result=await User.findOne(data);
            return result;
        } catch (error) {
            console.log("Something went wrong in User Repo{findBy)");
            throw error;  
        }
    }
    
}

export default UserRepository;