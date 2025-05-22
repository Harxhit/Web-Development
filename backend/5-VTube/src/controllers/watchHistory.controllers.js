import asyncHandler from '../utils/asyncHandler.js';
import ApiResponse from '../utils/apiResponse.js';
import WatchHistory from '../models/watchHistory.models.js';

const addWatchHistory = asyncHandler(async (request, response) => {
  const { videoId, progress = 0 } = request.body;
  const userId = request.user._id;
  const created = await WatchHistory.create({ userId, videoId, progress });
  return response
    .status(201)
    .json(
      new ApiResponse(201, { watchHistory: created }, 'Watch history added'),
    );
});

const getWatchHistoryByUser = asyncHandler(async (request, response) => {
  const histories = await WatchHistory.find({ userId: request.user._id })
    .populate('videoId')
    .sort({ updatedAt: -1 });
  return response
    .status(200)
    .json(
      new ApiResponse(200, { histories }, 'Watch history fetched for user'),
    );
});

const getWatchHistoryByVideo = asyncHandler(async (request, response) => {
  const histories = await WatchHistory.find({
    videoId: request.params.videoId,
  }).populate('userId');
  return response
    .status(200)
    .json(
      new ApiResponse(200, { histories }, 'Watch history fetched for video'),
    );
});

const updateWatchProgress = asyncHandler(async (request, response) => {
  const { videoId, progress } = request.body;
  const userId = request.user._id;
  const updated = await WatchHistory.findOneAndUpdate(
    { userId, videoId },
    { progress, watchDate: Date.now() },
    { new: true, upsert: true },
  );
  return response
    .status(200)
    .json(new ApiResponse(200, { updated }, 'Watch progress updated'));
});

const deleteWatchHistoryByUser = asyncHandler(async (request, response) => {
  await WatchHistory.deleteMany({ userId: request.user._id });
  return response
    .status(200)
    .json(new ApiResponse(200, null, 'Watch history deleted for user'));
});

const deleteWatchHistoryByVideo = asyncHandler(async (request, response) => {
  await WatchHistory.deleteMany({ videoId: request.params.videoId });
  return response
    .status(200)
    .json(new ApiResponse(200, null, 'Watch history deleted for video'));
});

const getRecentWatchHistory = asyncHandler(async (request, response) => {
  const limit = parseInt(request.query.limit) || 10;
  const recent = await WatchHistory.find({ userId: request.user._id })
    .populate('videoId')
    .sort({ updatedAt: -1 })
    .limit(limit);
  return response
    .status(200)
    .json(new ApiResponse(200, { recent }, 'Recent watch history fetched'));
});

const clearWatchHistory = asyncHandler(async (request, response) => {
  await WatchHistory.deleteMany({});
  return response
    .status(200)
    .json(new ApiResponse(200, null, 'All watch history cleared'));
});

const getWatchProgressForVideo = asyncHandler(async (request, response) => {
  const history = await WatchHistory.findOne({
    userId: request.user._id,
    videoId: request.params.videoId,
  });
  return response
    .status(200)
    .json(
      new ApiResponse(
        200,
        { progress: history?.progress ?? 0 },
        'Watch progress fetched',
      ),
    );
});

const hasUserWatchedVideo = asyncHandler(async (request, response) => {
  const history = await WatchHistory.findOne({
    userId: request.user._id,
    videoId: request.params.videoId,
  });
  return response
    .status(200)
    .json(new ApiResponse(200, { watched: !!history }, 'Watch status fetched'));
});

export {
  addWatchHistory,
  getWatchHistoryByUser,
  getWatchHistoryByVideo,
  updateWatchProgress,
  deleteWatchHistoryByUser,
  deleteWatchHistoryByVideo,
  getRecentWatchHistory,
  clearWatchHistory,
  getWatchProgressForVideo,
  hasUserWatchedVideo,
};
