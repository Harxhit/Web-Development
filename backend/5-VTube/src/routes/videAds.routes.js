import {
  createAdd,
  updateAdd,
  deleteAdd,
  allVideoAd,
  getVideoAdById,
} from '../controllers/videoAds.conrtrollers.js';

import { Router } from 'express';
import isAdmin from '../middlewares/isAdmin.middlewares.js';
import verifyJwt from '../middlewares/auth.middlewares.js';
import upload from '../middlewares/multer.middlewares.js';

const videoadRouter = Router();

videoadRouter
  .route('/create')
  .post(verifyJwt, isAdmin, upload.single('videoFile'), createAdd);

videoadRouter.route('/:videoadId/update').patch(verifyJwt, isAdmin, updateAdd);
videoadRouter.route('/:videoadId/delete').delete(verifyJwt, isAdmin, deleteAdd);
videoadRouter.route('/all').get(verifyJwt, isAdmin, allVideoAd);
videoadRouter.route('/:videoadId').get(verifyJwt, isAdmin, getVideoAdById);

export default videoadRouter;
