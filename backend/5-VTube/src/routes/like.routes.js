import { Router } from 'express';
import verifyJwt from '../middlewares/auth.middlewares.js';
import {
  toggleLike,
  getLikeCount,
  checkUserLiked,
  getLikeItemsByUser,
} from '../controllers/like.controllers.js';

const likeRouter = Router();

likeRouter.route('/toggle').post(verifyJwt, toggleLike);
likeRouter.route('/likecount').get(verifyJwt, getLikeCount);
likeRouter.route('/liked').get(verifyJwt, checkUserLiked);
likeRouter.route('/items').get(verifyJwt, getLikeItemsByUser);

export default likeRouter;
