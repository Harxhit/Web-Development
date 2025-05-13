import asyncHandler from '../utils/asyncHandler.js';
import registerUserValidator from '../validators/user.validators.js';
import { loginUserValidator } from '../validators/login.validators.js';
import ApiError from '../utils/apiError.js';
import ApiResponse from '../utils/apiResponse.js';
import User from '../models/user.models.js';
import { uploadToCloudinary } from '../utils/cloudinary.js';
import { deleteFromCloudinary } from '../utils/cloudinary.js';

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
      console.log('Cover Image uploaded', coverImage);
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
  console.log('Request', request.body);

  //Validation
  const { error, value } = loginUserValidator.validate(request.body, {
    abortEarly: false,
  });

  console.log('Validation error', error);
  console.log('Valid value', value);

  if (error) {
    const errors = error.details.map((err) => ({
      field: err.path.join('.'),
      message: err.message,
    }));
    throw new ApiError(errors, 400, 'Username,email,password not found');
  }
  const { username, email, password } = value;

  const user = await User.findOne({
    $or: [{ username }, { email }],
  });
  if (!user) throw new ApiError(400, 'Did not find user');

  const isPasswordValid = await user.isPasswordCorrect(password);
  if (!isPasswordValid) throw new ApiError(400, 'User credtials are wrong');
  const { refreshToken, accessToken } = await generateRefreshAndAccessToken(
    user._id,
  );

  const loggedUser = await User.findById(user._id).select(
    '-password -refreshToken',
  );
  if (!loggedUser) throw new ApiError(400, 'Something went wrong logging user');

  const options = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    expires: new Date(Date.now() + process.env.REFRESHTOKEN_EXPIRE * 1000),
  };

  return response
    .status(200)
    .cookie('refreshToken', refreshToken, options)
    .json(
      new ApiResponse(
        200,
        { user: loggedUser, accessToken, loggedUser },
        'User logged in successfully',
      ),
    );
});

export { registerUser, loginUser, generateRefreshAndAccessToken };
