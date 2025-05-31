import path from 'path';
import User from '../models/user.models.js';
import ApiError from '../utils/apiError.util.js';
import logger from '../utils/logger.util.js';
import { uploadToImageKit, deleteLocalFile } from '../utils/imageKit.util.js';
import registerUserValidation from '../validation/sign-up.validation.js';
import updatedUser from '../validation/update.validation.js';

const signUp = async (request, response) => {
  logger.info('Sign-up request received', { body: request.body });

  const { error, value } = registerUserValidation.validate(request.body);
  if (error) {
    logger.error('Validation failed', {
      message: error.message,
      stack: error.stack,
    });
    throw new ApiError(400, error.message);
  }

  const { username, email, password, firstName, lastName, phoneNumber, age } =
    value;

  // Check if user already exists
  const existingUser = await User.findOne({
    $or: [{ email }, { username }],
  });

  if (existingUser) {
    logger.warn('User already exists with this email or username');
    throw new ApiError(409, 'User already exists with this email or username');
  }

  //Image handling

  let profileImageUrl;

  if (request.file) {
    try {
      const imageKitResponse = await uploadToImageKit(
        request.file.path,
        request.file.originalname,
      );
      profileImageUrl = imageKitResponse?.url;
      await deleteLocalFile(request.file.path);
      logger.info('Profile image uploaded and deleted successfully');
    } catch (error) {
      logger.error('Upload error', {
        message: error.message,
        stack: error.stack,
      });
      throw new ApiError(500, 'Failed to upload profile image');
    }
  }

  // Create user
  const user = await User.create({
    username,
    email,
    password,
    firstName,
    lastName,
    phoneNumber,
    age,
    profileImage: profileImageUrl || null,
  });

  if (!user) {
    logger.error('User creation failed');
    throw new ApiError(500, 'Failed to create user. Please try again later.');
  }

  logger.info('User successfully created', { userId: user._id });

  return response.status(201).json({
    success: true,
    data: user,
    message: 'User registration successful.',
  });
};

const updateProfileDetails = async (request, response) => {
  logger.info('Request body', JSON.stringify(request.body));

  const { error, value } = updatedUser.validate(request.body);
  if (error) {
    logger.error('Validation error', {
      message: error.message,
      stack: error.stack,
    });
    throw new ApiError(404, error.message);
  }
  const { username, firstName, lastName, age, email, phoneNumber } = value;
};

const updateProfilePicture = async (request, response) => {};

const signIn = async (request, response) => {};
const signOut = async (request, response) => {};

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
