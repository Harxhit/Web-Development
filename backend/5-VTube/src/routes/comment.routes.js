import { Router } from 'express';
import verifyJwt from '../middlewares/auth.middlewares.js';
import {
  createComment,
  updateComment,
  deleteComment,
  getCommentsByVideo,
} from '../controllers/comment.controllers.js';
const commentRouter = Router();

commentRouter.route('/videos/:id/comments').post(verifyJwt, createComment);
commentRouter.route('/videos/:id/comments').get(verifyJwt, getCommentsByVideo);
commentRouter.route('/comments/:commentId').patch(verifyJwt, updateComment);
commentRouter.route('/comments/:commentId').delete(verifyJwt, deleteComment);

export default commentRouter;
