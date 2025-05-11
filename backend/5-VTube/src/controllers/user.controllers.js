import asyncHandler from '../utils/asyncHandler.js';
import userValidator from '../validators/user.validators.js';
import ApiError from '../utils/apiError.js';
import ApiResponse from '../utils/apiResponse.js';
import User from '../models/user.models.js';
import uploadToCloudinary from '../utils/cloudinary.js';

const registerUser = asyncHandler(async (request, response) => {
  // Validation
  const { error, value } = userValidator.validate(request.body, {
    abortEarly: false,
  });

  if (error) {
    const errors = error.details.map((err) => ({
      field: err.path.join('.'),
      message: err.message,
    }));
    throw new ApiError(errors, 400, 'Validation Failed');
  }

  const { fullName, email, username, password } = value; 

  //  Check if user already exists
  const exisitingUser = await User.findOne({
    $or: [{ username }, { email }],
  });
  if (exisitingUser) {
    throw new ApiError(
      409,
      `User with username: ${username} or email: ${email} already exists`,
    );
  }

  //  Handle avatar and cover image
  const avatarLocalPath = request.files?.avatar?.[0]?.path;
  const coverImageLocalPath = request.files?.coverimage?.[0]?.path;

  if (!avatarLocalPath) {
    throw new ApiError(409, 'Avatar file path not found');
  }

  const avatar = await uploadToCloudinary(avatarLocalPath);
  let coverImage = '';
  if (coverImageLocalPath) {
    coverImage = await uploadToCloudinary(coverImageLocalPath);
  }

  //  Create new user
  const user = await User.create({
    fullName,
    username: username.toLowerCase(),
    email,
    password,
    avatar: avatar.url,
    coverImage: coverImage?.url || '',
  });

  //  Return sanitized user
  const createdUser = await User.findById(user._id).select(
    '-password -refreshToken',
  );
  if (!createdUser) throw new ApiError(500, 'Something went wrong');

  return response
    .status(201)
    .json(new ApiResponse(201, 'User created successfully', createdUser));
});
export default registerUser;
