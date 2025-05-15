import ApiError from '../utils/apiError.js';
import ApiResponse from '../utils/apiResponse.js';
import asycnHandler from '../utils/asyncHandler.js';
import Video from '../models/video.models.js';
import Comment from '../models/comment.models.js';
import Like from '../models/like.models.js';

const toggleLike = asycnHandler(async (request, response) => {
  const userId = request.user._id;
  const { targetId, targetType } = request.body;

  if (!['video', 'comment'].includes(targetType)) {
    return response
      .status(400)
      .json(new ApiResponse(400, null, 'Invalid target type'));
  }

  // Check if the like already exists
  const existingLike = await Like.findOne({ userId, targetId, targetType });

  let action = '';

  if (existingLike) {
    await Like.findByIdAndDelete(existingLike._id);
    action = 'unliked';

    // Decrement like count
    if (targetType === 'video') {
      await Video.findByIdAndUpdate(targetId, { $inc: { likeCount: -1 } });
    } else if (targetType === 'comment') {
      await Comment.findByIdAndUpdate(targetId, { $inc: { likeCount: -1 } });
    }
  } else {
    await Like.create({ userId, targetId, targetType });
    action = 'liked';

    // Optionally increment like count
    if (targetType === 'video') {
      await Video.findByIdAndUpdate(targetId, { $inc: { likeCount: 1 } });
    } else if (targetType === 'comment') {
      await Comment.findByIdAndUpdate(targetId, { $inc: { likeCount: 1 } });
    }
  }

  return response
    .status(200)
    .json(new ApiResponse(200, { action }, `Successfully ${action}`));
});

const getLikeCount = asycnHandler(async (request, response) => {
  const { targetId, targetType } = request.body;

  if (!['video', 'comment'].includes(targetType)) {
    throw new ApiError(400, 'Invalid targetType');
  }

  const likeCount = await Like.countDocuments({ targetId, targetType });

  return response
    .status(200)
    .json(
      new ApiResponse(200, { likeCount }, 'Like count retrieved successfully'),
    );
});

const checkUserLiked = asycnHandler(async (request, response) => {
  const userId = request.user._id;
  const { targetId, targetType } = request.body;

  if (!['video', 'comment'].includes(targetType)) {
    throw new ApiError(400, 'Invalid targetType');
  }

  const liked = await Like.exists({ userId, targetId, targetType });

  return response
    .status(200)
    .json(
      new ApiResponse(200, { liked }, 'Like status retrieved successfully'),
    );
});

const getLikeItemsByUser = asycnHandler(async (request, response) => {
  const userId = request.user._id;
  const { targetType } = request.body;

  if (!['video', 'comment'].includes(targetType)) {
    throw new ApiError(400, 'Invalid targetType');
  }

  const likes = await Like.find({ userId, targetType });

  return response
    .status(200)
    .json(new ApiResponse(200, likes, 'Like items retrieved successfully'));
});

export { toggleLike, getLikeCount, checkUserLiked, getLikeItemsByUser };
