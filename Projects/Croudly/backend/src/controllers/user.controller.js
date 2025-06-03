import User from '../models/user.models.js';
import ApiError from '../utils/apiError.util.js';
import logger from '../utils/logger.util.js';
import { uploadToImageKit, deleteLocalFile } from '../utils/imageKit.util.js';
import registerUserValidation from '../validation/sign-up.validation.js';
import updatedUser from '../validation/update.validation.js';

const generateAccessTokenAndRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId);

    if (!user) {
      logger.error('User not found', {
        message: error.message,
        stack: error.stack,
      });
      throw new ApiError(404, 'Authentication failed');
    }

    const accessToken = await user.generateAccessToken();
    const refreshToken = await user.generateRefreshToken();
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (error) {
    logger.log('Access token error', {
      message: error.message,
      stack: error.stack,
    });
    logger.error('Access token generation error');
    throw new ApiError(404, 'Access token generation error');
  }
};

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
  //Tokens
  const { accessToken, refreshToken } =
    await generateAccessTokenAndRefreshToken(user._id);

  if (!user) {
    logger.error('User creation failed');
    throw new ApiError(500, 'Failed to create user. Please try again later.');
  }

  logger.info('User successfully created', { userId: user._id });

  return response.status(201).json({
    success: true,
    data: {
      user: user,
      refreshToken: refreshToken,
      accessToken: accessToken,
    },
    message: 'User registration successful.',
  });
};

const signIn = async (request, response) => {
  console.log(request.body);
  const { username, email, password } = request.body;

  if (!username && !email) {
    logger.error('Username or email is required');
    throw new ApiError(400, 'Username or email is required');
  }

  if (!password) {
    logger.error('Password is required');
    throw new ApiError(400, 'Password is required');
  }

  const user = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (!user) {
    logger.error('User not found');
    throw new ApiError(401, 'User not found');
  }

  //Check password
  const isPasswordValid = await user.isPasswordCorrect(password);
  if (!isPasswordValid) {
    logger.error('Incorrect password');
    throw new ApiError(401, 'Incorrect password');
  }

  //  Mark user as active
  if (!user.isActive) {
    user.isActive = true;
    await user.save({ validateBeforeSave: false });
  }

  const { accessToken, refreshToken } =
    await generateAccessTokenAndRefreshToken(user._id);

  response.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: false,
    sameSite: 'Lax',
    maxAge: 7 * 24 * 60 * 60 * 1000,
    path: '/',
  });

  return response.status(200).json({
    success: true,
    data: {
      accessToken: accessToken,
      refreshToken: refreshToken,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        isActive: user.isActive,
      },
    },
    message: 'User logged in successfully',
  });
};

const signOut = async (request, response) => {
  const userId = request.user._id;

  await User.findByIdAndUpdate(
    userId,
    { refreshToken: null, isActive: false },
    { new: true },
  );

  response.clearCookie('refreshToken', {
    httpOnly: true,
    secure: false,
    sameSite: 'Lax',
    path: '/',
  });
  console.log('Cookies after clearing:', request.cookies);
  response.status(200).json({
    success: true,
    message: 'User logged out successfully',
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
