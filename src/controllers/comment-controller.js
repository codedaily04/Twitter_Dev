import CommentService from '../services/comment-service.js';

const commentService=new CommentService();

export const createComment = async (req,res)=>{
    try {
        const comment=await commentService.CreateComment(
            req.query.modelId,
            req.query.modelType,
            req.body.userId,
            req.body.content);
        return res.status(201).json({
            message:'Comment created successfully',
            success:true,
            data:comment,
            error:null
        });
        
    } catch (error) {
        return res.status(500).json({
            message:'Error creating comment',
            success:false,
            data:null,
            error:error
        });
    }
}