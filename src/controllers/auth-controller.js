import UserService from '../services/user-service.js';

const userService=new UserService();

export const signup = async (req,res)=>{
   try {
    const response=await userService.signup({
        email:req.body.email,
        password:req.body.password,
        name:req.body.name
    });
    return res.status(201).json({
        message:'User created successfully',
        success:true,
        data:response,
        error:null
    });
   } catch (error) {
    return res.status(500).json({
        message:'Error creating user',
        success:false,
        data:null,
        error:error
    });
   }
}   

export const login = async (req,res)=>{
    try {
        const token=await userService.signin(req.body);
        return res.status(200).json({
            message:'User logged in successfully',
            success:true,
            data:token,
            error:null
        });
    } catch (error) {
        return res.status(500).json({
            message:'Error logging in user',
            success:false,
            data:null,
            error:error
        });
    }
}
