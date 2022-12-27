import express from 'express';
const router = express.Router();
import { categoryController, commentsAndRatingsController, postsController, queryController } from '../controllers';

router.post('/posts', postsController.createPost);
router.put('/posts/:id', postsController.updatePost);
router.delete('/posts/:id', postsController.deletePost);
router.get('/posts/:id', postsController.getOnePost);
router.get('/posts', postsController.getAllPost);
router.post('/categories', categoryController.createCategory);
router.get('/categories', categoryController.getCategory);
router.post('/comments', commentsAndRatingsController.createComment);
router.get('/comments/:id', commentsAndRatingsController.getAllComments);
router.post('/queries', queryController.createQuery);
router.get('/queries', queryController.getAllQuery);

export default router;