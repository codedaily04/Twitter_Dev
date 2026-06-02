import LikeService from '../services/like-service.js'

const likeService=new LikeService();

export const ToggleLike = async (req,res)=>{
    try {
        const like=await likeService.like(req.params.modelId,req.params.modelType,req.bocy.userId);
        return res.status(201).json({
            message:'Toggled Like created successfully',
            success:true,
            data:like,
            error:null
        });
    } catch (error) {
        return res.status(500).json({
            message:'Error creating like',
            success:false,
            data:null,
            error:error
        });
    }
}

