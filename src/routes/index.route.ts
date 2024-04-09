import * as express from 'express';

import authRouter from './auth/auth.route';
import postRouter from './post/post.route';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/post', postRouter);

export default router;
