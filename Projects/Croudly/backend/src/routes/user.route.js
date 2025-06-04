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
  changePassword,
  forgetPassword,
  resetPassword,
  deleteAccount,
} from '../controllers/user.controller.js';
import verifyJwt from '../middlewares/authentication.middleware.js';
import isAdmin from '../middlewares/isAdmin.middleware.js';

const userRouter = Router();

//Register user
userRouter
  .route('/sign-up')
  .post(upload.single('profileImage'), asyncHandler(signUp));

//Sign in users
userRouter.route('/sign-in').post(asyncHandler(signIn));

//Sign out user
userRouter.route('/sign-out').post(verifyJwt, asyncHandler(signOut));

//Update profile details
userRouter
  .route('/update')
  .patch(verifyJwt, asyncHandler(updateProfileDetails));

//Change profile picture
userRouter
  .route('/update/profile-picture')
  .patch(
    verifyJwt,
    upload.single('profileImage'),
    asyncHandler(updateProfilePicture),
  );

//Get user
userRouter.route('/user').get(verifyJwt, asyncHandler(getUser));

//Get user by id
userRouter
  .route('/user/:id')
  .get(verifyJwt, isAdmin, asyncHandler(getUserById));

//Get all user
userRouter.route('/all-user').get(verifyJwt, isAdmin, asyncHandler(getAllUser));

//Change password
userRouter
  .route('/password/change-password')
  .patch(verifyJwt, asyncHandler(changePassword));




export default userRouter;
