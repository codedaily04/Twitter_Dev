import express from 'express';

import {createTweet} from '../../controllers/tweet-controller.js';
import {ToggleLike} from '../../controllers/like-controller.js';
import {createComment} from '../../controllers/comment-controller.js';

const router=express.Router();

router.post('/tweets',createTweet);

router.post('/likes/toggle',ToggleLike);

router.post('/comments',createComment);

export default router;

