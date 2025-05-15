import Comment from '../models/comment.models.js';
import asycnHandler from '../utils/asyncHandler.js';
import ApiResponse from '../utils/apiResponse.js';
import ApiError from '../utils/apiResponse.js';
import User from '../models/user.models.js';
import Video from '../models/video.models.js';

const createComment = asycnHandler(async (request, response) => {
  console.log('Request body', request.body);

  const { content, parentCommentId } = request.body;

  const videoId = request.params.id;
  const userId = request.user._id;
  const user = User.findById(userId).select('username');

  if (!user) throw new ApiError(400, 'User not found');

  const comment = await Comment.create({
    videoId,
    userId,
    content: content,
    parentCommentId: parentCommentId || null,
    username: user.username,
  });

  return response
    .status(200)
    .json(new ApiResponse(201, { comment }, 'Comment created succesfully'));
});

const getCommentsByVideo = asycnHandler(async (request, response) => {
  const videoId = request.params.id;

  const comments = await Comment.find({ videoId })
    .populate('userId', 'username')
    .sort({ createdAt: -1 });

  return response
    .status(200)
    .json(new ApiResponse(200, { comments }, 'Comments fetched successfully'));
});


const deleteComment = asycnHandler(async (request, response) => {
  const commentId = request.params.commentId;

  const deletedComment = await Comment.findByIdAndDelete(commentId);

  if (!deletedComment) {
    return response
      .status(404)
      .json(new ApiResponse(404, null, 'Comment not found'));
  }

  return response
    .status(200)
    .json(
      new ApiResponse(
        200,
        { comment: deletedComment },
        'Comment deleted successfully',
      ),
    );
});

const updateComment = asycnHandler(async (request, response) => {
  const { content, parentCommentId } = request.body;
  const commentId = request.params.commentId;

  const updatedComment = await Comment.findByIdAndUpdate(
    commentId,
    {
      $set: {
        content,
        parentCommentId: parentCommentId || null,
      },
    },
    { new: true },
  );

  if (!updatedComment) {
    return response
      .status(404)
      .json(new ApiResponse(404, null, 'Comment not found'));
  }

  return response
    .status(200)
    .json(
      new ApiResponse(
        200,
        { comment: updatedComment },
        'Comment updated successfully',
      ),
    );
});

//For liking and unlink comment
//TODO : Working on likecontroller
const toggleLike = asycnHandler(async (request, response) => {});

export { createComment, updateComment, deleteComment, getCommentsByVideo };
