import express from 'express';
const router = express.Router();
import { postsController, getAllPostsController } from '../controllers';

router.post('/posts', postsController.postsFunction);
router.get('/getAllPosts', getAllPostsController.getAllPosts);

export default router;