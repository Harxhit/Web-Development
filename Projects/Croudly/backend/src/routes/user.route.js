import { Router } from 'express';
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
} from '../controllers/user.conrtoller.js';



