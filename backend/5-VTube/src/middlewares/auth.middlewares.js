import jwt from 'jsonwebtoken';
import ApiError from '../utils/apiError.js';
import User from '../models/user.models.js';
import asyncHandler from '../utils/asyncHandler.js';

const verifyJwt = asyncHandler(async (request, _, next) => {
  const authHeader = request.header('Authorization');

  const token =
    request.cookies?.access_token ||
    request.body?.access_token ||
    (authHeader?.startsWith('Bearer ') ? authHeader.split(' ')[1] : null);

  console.log('-------------------- Verifying JWT --------------------');
  console.log('Raw Authorization Header:', authHeader);
  console.log('Extracted Token:', token);

  if (!token) {
    console.log('Error: Access token not found');
    throw new ApiError(401, 'Access token not found');
  }

  try {
    console.log('Attempting to verify token...');
    const decodedToken = jwt.verify(token, process.env.SECRET_TEXT_ACCESSTOKEN);
    console.log('Token Decoded Successfully:', decodedToken);

    const user = await User.findById(decodedToken._id).select(
      '-password -refreshToken',
    );
    if (!user) {
      console.log(
        'Error: User not found with decoded token ID:',
        decodedToken._id,
      );
      throw new ApiError(401, 'User not found');
    }

    request.user = user; // ✅ attach user to request
    console.log(
      'User attached to request:',
      request.user.username,
      request.user._id,
    );
    console.log(
      '-------------------- JWT Verification Successful --------------------',
    );
    next();
  } catch (error) {
    console.error(
      '-------------------- JWT Verification Failed --------------------',
    );
    console.error('JWT Verification Error:', error.message); // Log the error message for more details
    console.error('Full Error Object:', error);
    throw new ApiError(401, 'Invalid or expired token');
  }
});

export default verifyJwt;
