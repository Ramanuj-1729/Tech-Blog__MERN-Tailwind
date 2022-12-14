import express from 'express';
const router = express.Router();
import { categoryController, postsController } from '../controllers';

router.post('/posts', postsController.createPost);
router.put('/posts/:id', postsController.updatePost);
router.delete('/posts/:id', postsController.deletePost);
router.get('/posts/:id', postsController.getOnePost);
router.get('/posts', postsController.getAllPost);
router.post('/categories', categoryController.createCategory);
router.get('/categories', categoryController.getCategory);

export default router;