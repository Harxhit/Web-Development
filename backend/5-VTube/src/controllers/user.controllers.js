import jwt from 'jsonwebtoken';
import cloudinary from 'cloudinary';
import fs from 'fs/promises';
import dotenv from 'dotenv';
import asyncHandler from '../utils/asyncHandler.js';
import registerUserValidator from '../validators/user.validators.js';
import { loginUserValidator } from '../validators/login.validators.js';
import ApiError from '../utils/apiError.js';
import ApiResponse from '../utils/apiResponse.js';
import User from '../models/user.models.js';
import { uploadToCloudinary } from '../utils/cloudinary.js';
import { deleteFromCloudinary } from '../utils/cloudinary.js';
import { updateUserValidator } from '../validators/updateUser.validators.js';

dotenv.config();

const registerUser = asyncHandler(async (request, response) => {
  // 1. Logging entire request
  console.log('Request Body:', request.body);

  // 2. Validation
  const { error, value } = registerUserValidator.validate(request.body, {
    abortEarly: false,
  });

  // 3. Logging the error and value
  console.log('Validation Error:', error);
  console.log('Validation Value:', value);

  if (error) {
    const errors = error.details.map((err) => ({
      field: err.path.join('.'),
      message: err.message,
    }));
    throw new ApiError(errors, 400, 'Validation Failed');
  }

  const { fullName, email, username, password } = value;

  // 4. Handling avatar and cover image uploads
  const avatarLocalPath = request.files?.avatar?.[0]?.path;
  let avatar = null;

  if (!avatarLocalPath) {
    throw new ApiError(400, 'Avatar file path not found');
  }

  try {
    avatar = await uploadToCloudinary(avatarLocalPath);
    console.log('Avatar uploaded:', avatar);
  } catch (error) {
    console.error('Avatar upload failed:', error);
    throw new ApiError(500, 'Avatar upload failed');
  }
  const coverImageLocalPath = request.files?.coverimage?.[0]?.path;
  let coverimage = null;
  if (coverImageLocalPath) {
    try {
      coverimage = await uploadToCloudinary(coverImageLocalPath);
      console.log('Cover Image uploaded', coverimage);
    } catch (error) {
      console.error('Cover Image upload failed', error);
      throw new ApiError(500, 'Cover Image upload failed');
    }
  }

  // 5. Created new user
  try {
    const user = await User.create({
      fullName,
      username: username.toLowerCase(),
      email,
      password,
      avatar: avatar?.url,
      coverimage: coverimage?.url || '',
    });

    // 6. Logging the created user object
    console.log('Created User:', user);

    // 7. Return sanitized user
    const createdUser = await User.findById(user._id).select(
      '-password -refreshToken',
    );

    // 8.  Log the result of the findById query
    console.log('Found User:', createdUser);

    if (!createdUser) {
      throw new ApiError(500, 'Failed to retrieve created user');
    }

    return response
      .status(201)
      .json(new ApiResponse(201, 'User created successfully', createdUser));
  } catch (error) {
    console.log('Something went wrong while creating user', error);
    if (avatar) {
      await deleteFromCloudinary(avatar.public_id);
    }
    if (coverimage) {
      await deleteFromCloudinary(coverimage.public_id);
    }

    throw new ApiError(
      500,
      'Something went wrong while registering user and images were deleted',
    );
  }
});

const generateRefreshAndAccessToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      //Validation did we find the user
      throw new ApiError(401, 'Error finding user ');
    }

    //Generation of access token and refresh token from user
    const refreshToken = user.generateRefreshToken();
    const accessToken = user.generateAccessToken();
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(500, 'Fail generating access token and refresh token');
    console.log('Error', error);
  }
};

const loginUser = asyncHandler(async (request, response) => {
  console.log('Request body:', request.body);

  // Validation
  const { error, value } = loginUserValidator.validate(request.body, {
    abortEarly: false,
  });

  console.log('Validation error:', error);
  console.log('Valid value:', value);

  if (error) {
    const errors = error.details.map((err) => ({
      field: err.path.join('.'),
      message: err.message,
    }));
    throw new ApiError(400, errors, 'Invalid username, email, or password');
  }
  const { username, email, password } = value;

  const user = await User.findOne({
    $or: [{ username }, { email }],
  });
  if (!user) {
    throw new ApiError(404, 'User not found'); // Changed status code to 404 for "not found"
  }

  const isPasswordValid = await user.isPasswordCorrect(password);
  if (!isPasswordValid) {
    throw new ApiError(401, 'Invalid credentials'); // Changed status code to 401 for "unauthorized"
  }

  const { refreshToken, accessToken } = await generateRefreshAndAccessToken(
    user._id,
  );

  // Update user's refreshToken in the database
  user.refreshToken = refreshToken;
  await user.save({ validateBeforeSave: false }); // Prevent validation errors during update

  const loggedUser = await User.findById(user._id).select(
    '-password -refreshToken',
  );
  if (!loggedUser) {
    console.error('Error fetching logged-in user after login');
    throw new ApiError(500, 'Something went wrong during login'); // More specific error message and status
  }

  const options = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  };

  return response
    .status(200)
    .cookie('refreshToken', refreshToken, options)
    .json(
      new ApiResponse(
        200,
        { user: loggedUser, accessToken },
        'User logged in successfully',
      ),
    );
});

const logoutUser = asyncHandler(async (request, response) => {
  await User.findByIdAndUpdate(
    request.user._id,
    {
      $set: { refreshToken: undefined },
    },
    { new: true },
  );

  const options = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  };
  return response
    .status(200)
    .clearCookie('refreshToken', options)
    .json(new ApiResponse(200, null, 'User logged out successfully'));
});

const refreshToken = asyncHandler(async (request, response) => {
  const incomingRefreshToken =
    request.cookies.incomingRefreshToken || request.body.incomingRefreshToken;
  if (!incomingRefreshToken) throw new ApiError(404, 'Refresh token not found');

  try {
    const decodedToken = jwt.verify(
      incomingRefreshToken,
      process.env.SECRET_TEXT_REFRESHTOKEN,
    );
    const user = await User.findById(decodedToken?._id);
    if (!user) throw new ApiError(401, 'Invalid refresh token');

    if (incomingRefreshToken !== user?.refreshToken) {
      throw new ApiError(401, 'Invalid refresh token');
    }

    const options = {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      expires: new Date(Date.now() + process.env.REFRESHTOKEN_EXPIRE * 1000),
    };

    const { accessToken, refreshToken: newRefreshToken } =
      await generateRefreshAndAccessToken(user._id);
    return response
      .status(200)
      .cookie('refreshToken', newRefreshToken, options)
      .json(
        new ApiResponse(
          200,
          { accessToken, refreshToken: newRefreshToken },
          'Refresh token generated successfully',
        ),
      );
  } catch (error) {
    console.error('Error verifying refresh token:', error);
    throw new ApiError(
      500,
      'Something went wrong while generation of access token or refresh token',
    );
  }
});

const changePassword = asyncHandler(async (request, response) => {
  const { oldPassword, newPassword, confirmNewPassword } = request.body;

  const user = await User.findById(request.user._id).select('+password');
  if (!user) {
    throw new ApiError(404, 'User not found');
  }

  const isPasswordValid = await user.isPasswordCorrect(oldPassword);

  if (!isPasswordValid) {
    throw new ApiError(401, 'Invalid old password');
  }

  if (newPassword !== confirmNewPassword) {
    throw new ApiError(400, 'New passwords do not match');
  }

  user.password = newPassword;
  await user.save({ validateBeforeSave: false });

  return response
    .status(200)
    .json(new ApiResponse(200, null, 'Password changed successfully'));
});

const updateUserInformation = asyncHandler(async (request, response) => {
  const { username, email, fullName } = request.body;
  const userId = request.user._id;

  // Validation
  const { error, value } = updateUserValidator.validate(request.body, {
    abortEarly: false,
  });

  if (error) {
    const errors = error.details.map((err) => ({
      field: err.path.join('.'),
      message: err.message,
    }));
    throw new ApiError(400, errors, 'Not correct data provided');
  }

  const updatedUser = await User.findByIdAndUpdate(
    userId,
    {
      $set: {
        username: username,
        email: email,
        fullName: fullName,
      },
    },
    { new: true, runValidators: true },
  ).select('-password -refreshToken');

  if (!updatedUser) {
    throw new ApiError(404, 'User not found');
  }

  return response
    .status(200)
    .json(
      new ApiResponse(
        200,
        updatedUser,
        'User information updated successfully',
      ),
    );
});

const currentUser = asyncHandler(async (request, response) => {
  const currentUser = {
    _id: request.user._id,
    username: request.user.username,
    email: request.user.email,
    fullName: request.user.fullName,
    avatar: request.user.avatar,
    createdAt: request.user.createdAt,
    updatedAt: request.user.updatedAt,
  };
  return response
    .status(200)
    .json(new ApiResponse(200, currentUser, 'User retrieved successfully'));
});

const changeAvatar = asyncHandler(async (request, response) => {
  const avatarLocalPath = request.file?.path;
  console.log(avatarLocalPath);
  if (!avatarLocalPath) {
    throw new ApiError(400, 'Avatar file is required');
  }

  const uploadResponse = await cloudinary.uploader.upload(avatarLocalPath, {
    resource_type: 'image',
  });
  console.log('Uploading response', uploadResponse);

  if (!uploadResponse.url) {
    await fs.unlink(avatarLocalPath); // Remove local file if upload fails
    throw new ApiError(500, 'Failed to upload avatar to Cloudinary');
  }

  const user = await User.findByIdAndUpdate(
    request.user?._id,
    {
      $set: {
        avatar: uploadResponse.url,
      },
    },
    { new: true },
  );

  await fs.unlink(avatarLocalPath); // Remove local file after successful upload

  if (!user) {
    throw new ApiError(404, 'User not found');
  }
  return response
    .status(200)
    .json(
      new ApiResponse(
        200,
        { avatarUrl: user.avatar },
        'Avatar updated successfully',
      ),
    );
});

export {
  registerUser,
  loginUser,
  generateRefreshAndAccessToken,
  refreshToken,
  logoutUser,
  changePassword,
  updateUserInformation,
  currentUser,
  changeAvatar,
};
