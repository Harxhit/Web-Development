import asyncHandler from '../utils/asyncHandler.js';
import registerUserValidator from '../validators/user.validators.js';
import ApiError from '../utils/apiError.js';
import ApiResponse from '../utils/apiResponse.js';
import User from '../models/user.models.js';
import uploadToCloudinary from '../utils/cloudinary.js';

const registerUser = asyncHandler(async (request, response) => {
  // 1. Log the entire request body
  console.log('Request Body:', request.body);

  // 2. Validation
  const { error, value } = registerUserValidator.validate(request.body, {
    abortEarly: false, // Important: Get all errors
  });

  // 3. Log the error and value
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

  // 4. Handle avatar and cover image uploads
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
  let coverImage = null;
  if (coverImageLocalPath) {
    try {
      coverImage = await uploadToCloudinary(coverImageLocalPath);
      console.log('Cover Image uploaded', coverImage);
    } catch (error) {
      console.error('Cover Image upload failed', error);
      throw new ApiError(500, 'Cover Image upload failed');
    }
  }

  // 5. Create new user
  const user = await User.create({
    fullName,
    username: username.toLowerCase(),
    email,
    password,
    avatar: avatar?.url, 
    coverImage: coverImage?.url || '',
  });

  // 6. Log the created user object
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
});

export default registerUser;
