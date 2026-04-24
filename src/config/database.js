const mongoose=require('mongoose');

const connnect=async ()=>{
    await mongoose.connect('mongodb://localhost/twitter_Dev');
}

module.exports=connnect;