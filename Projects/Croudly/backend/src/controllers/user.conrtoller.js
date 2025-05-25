import User from '../models/user.models.js';
import ApiError from '../utils/apiError.util.js';
import logger from '../utils/logger.util.js';

const signUp = async (request, response) => {};
const signIn = async (request, response) => {};
const signOut = async (request, response) => {};
const updateProfileDetails = async (request, response) => {};
const updateProfilePicture = async (request, response) => {};
const getUser = async (request, response) => {};
const getUserById = async (request, response) => {};
const getAllUser = async (request, response) => {};
const refreshToken = async (request, reponse) => {};
const changePassword = async (request, response) => {};
const forgotPassword = async (request, response) => {};
const resetPassword = async (request, response) => {};
const deleteAccount = async (request, response) => {};

export {
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
};
