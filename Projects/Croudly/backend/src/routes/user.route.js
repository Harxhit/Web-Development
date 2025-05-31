import { Router } from 'express';
import upload from '../middlewares/multer.middleware.js';
import asyncHandler from '../utils/asyncHandler.util.js';
import {
  signIn,
  signOut,
  signUp,
  updateProfileDetails,
  updateProfilePicture,
  getUserById,
  getUser,
  getAllUser,
  refreshToken,
  changePassword,
  forgotPassword,
  resetPassword,
  deleteAccount,
} from '../controllers/user.controller.js';

const userRouter = Router();

userRouter
  .route('/sign-up')
  .post(upload.single('profileImage'), asyncHandler(signUp));

export default userRouter;
