import jwt from 'jsonwebtoken';
import ApiError from '../utils/apiError.util.js';
import logger from '../utils/logger.util.js';
import dotenv from 'dotenv';
import User from '../models/user.models.js';

dotenv.config();

const verifyJwt = async (request, _, next) => {
  const authHeader = request.header('Authorization');

  const token =
    request.cookies?.access_token ||
    request.body?.access_token ||
    (authHeader?.startsWith('Bearer ') ? authHeader.split(' ')[1] : null);

  if (!token) {
    logger.error('Token not found');
    throw new ApiError(404, 'Token not found');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded._id).select('-refreshToken');

    if (!user) {
      logger.error(`User not found decoded id : ${decode._id}`);
      throw new ApiError(
        404,
        'User not found with decoded token id',
        decoded._id,
      );
    }

    request.user = user;
    next();
  } catch (error) {
    logger.info('Authentication error:', error);
    logger.error('Authentication failed', {
      message: error.message,
      stack: error.stack,
    });
    throw new ApiError(404, 'Authetication failed');
  }
};

export default verifyJwt;
