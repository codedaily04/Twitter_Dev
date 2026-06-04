import passport from 'passport';

export const authenticate=(req,res,next) =>{
    passport.authenticate('jwt',{session:false},(err,user)=>{
        if(err){
            next(err);
        }
        if(!user){
            return res.status(401).json({
                message:'Unauthorized',
                success:false,
                data:null,
                error:info
            });
        }
        req.user=user;//feeding all the data this object req.user about user.
        next();
    })(req,res,next);
}