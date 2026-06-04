import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true,
    }
},{timestamps:true});

//writing a hook to hash the password before saving
userSchema.pre('save', async function (next) {
    const user = this;
    const SALT=bcrypt.genSaltSync(9);
    const encryptedPassword=await bcrypt.hash(user.password,SALT);
    user.password=encryptedPassword;
});

userSchema.methods.comparePassword=async function(password){
    return bcrypt.compareSync(password,this.password);
}

userSchema.methods.genJWT=function generate(){
    return jwt.sign({id:this._id,email:this.email},'Twitter_secret',{
        expiresIn:'1h'
    });
}

const User=mongoose.model('User',userSchema);
export default User;