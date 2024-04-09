import express from 'express';
import postController from '../../controllers/post/post.controller';

const router = express.Router();

router.get(
  '/getPost',
  postController.getPost,
);

export default router;
