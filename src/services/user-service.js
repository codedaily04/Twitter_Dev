import {UserRepository} from '../repository/index.js';

class UserService{
    constructor(){
        this.userRepository=new UserRepository();
    }
    async signup(data){
        try{
        const user=await this.userRepository.create(data);
        return user;
    }
        catch(error){
            console.log(error);
            throw error;
        }
    }

    async getUserByEmail(email){
        try{
            const user=await this.userRepository.findBy({email});
            return user;
        }
        catch(error){
            console.log(error);
            throw error;
        }
    }

    async signin(data){
        try{
            const user = await this.getUserByEmail(data.email);
    
            if(!user){
                throw new Error('User not found');
            }
    
            const isPasswordValid = await user.comparePassword(data.password);
    
            if(!isPasswordValid){
                throw new Error('Invalid password');
            }
    
            const token = user.genJWT();
            return token;
        }
        catch(error){
            console.log(error);
            throw error;
        }
    }
}
export default UserService;