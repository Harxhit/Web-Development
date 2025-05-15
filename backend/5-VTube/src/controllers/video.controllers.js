import asyncHandler from '../utils/asyncHandler.js';
import ApiError from '../utils/apiError.js';
import ApiResponse from '../utils/apiResponse.js';
import User from '../models/user.models.js';
import { validateVideoPost } from '../validators/video.validator.js';
import { uploadToCloudinary } from '../utils/cloudinary.js';
import Video from '../models/video.models.js';
import fs from 'fs/promises';
import updateVideoValidator from '../validators/updateVideo.validators.js';

const uploadVideo = asyncHandler(async (request, response) => {
  console.log('Request body:', request.body);
  console.log('Request files:', request.files);

  // 1. Find the user
  const user = await User.findById(request.user?._id);
  if (!user) {
    throw new ApiError(401, 'Unauthorized: User not found');
  }

  // 2. Validate the request data (including the file)
  const { error, value } = validateVideoPost(request);
  if (error) {
    throw new ApiError(400, 'Validation failed', error);
  }

  // 3. Upload the video to Cloudinary
  if (
    !request.files ||
    !request.files.videoFile ||
    !request.files.videoFile[0]
  ) {
    throw new ApiError(400, 'Video file is required');
  }

  const videoLocalPath = request.files.videoFile[0].path;
  const videoUploadResponse = await uploadToCloudinary(videoLocalPath);

  if (!videoUploadResponse?.url) {
    throw new ApiError(500, 'Failed to upload video to Cloudinary');
  }

  // Delete local video file after successful upload
  try {
    await fs.unlink(videoLocalPath);
    // console.log(`Deleted local file: ${videoLocalPath}`);
  } catch (err) {
    console.warn(`Failed to delete local file: ${videoLocalPath}`, err);
  }

  // 4. Create a new video document
  const createdVideo = await Video.create({
    videoFile: videoUploadResponse.url,
    title: value.title,
    description: value.description,
    owner: user._id,
    duration: videoUploadResponse.duration,
    views: 0,
    thumbnail: videoUploadResponse.thumbnail?.url || 'default_thumbnail_url',
    isPublished: true,
  });

  // 5. Respond with success
  return response
    .status(201)
    .json(
      new ApiResponse(
        201,
        { video: createdVideo },
        'Video uploaded successfully',
      ),
    );
});

const getVideoById = asyncHandler(async (request, reponse) => {
  const user = await User.findById(request.user._id);
  if (!user) {
    throw new ApiError(400, 'Could not find user');
  }
  // console.log('Request body', request.body);

  const video = await Video.findById(request.params.id);
  console.log('Video', video);
  if (!video) {
    throw new ApiError(400, 'Video not found');
  }
  const videoDescription = {
    title: video.title,
    description: video.description,
    createdAt: video.createdAt,
    thumbnail: video.thumbnail,
    videoFile: video.videoFile,
    viwes: video.views,
    duration: video.duration,
    owner: video.owner,
  };
  return reponse
    .status(200)
    .json(
      new ApiResponse(200, { videoDescription }, 'Video fetched successfully'),
    );
});

const updateVideo = asyncHandler(async (request, response) => {
  // 1. Validate request body
  const { error, value } = updateVideoValidator.validate(request.body, {
    abortEarly: false,
  });

  if (error) {
    const errors = error.details.map((err) => ({
      field: err.path.join('.'),
      message: err.message,
    }));
    throw new ApiError(400, errors, 'Not correct data provided');
  }

  const { title, description } = request.body;
  console.log('Body', request.body);
  const user = await User.findById(request.user._id);
  const videoId = request.params.id;

  // 2. Find video by ID
  const video = await Video.findById(videoId);
  if (!video) {
    throw new ApiError(404, 'Video not found');
  }

  // 3. Check if the current user is the owner of the video
  if (video.owner.toString() !== user._id.toString()) {
    throw new ApiError(403, 'You are not authorized to update this video');
  }

  // 4. Update the video
  const updatedVideo = await Video.findByIdAndUpdate(
    videoId,
    {
      $set: {
        title: title,
        description: description,
      },
    },
    { new: true },
  );

  // 5. Return updated video
  return response
    .status(200)
    .json(
      new ApiResponse(
        200,
        { video: updatedVideo },
        'Video updated successfully',
      ),
    );
});

const deleteVideo = asyncHandler(async (request, response) => {
  const videoId = request.params.id;

  const video = await Video.findById(videoId);
  if (!video) {
    throw new ApiError(404, 'No video found');
  }

  await Video.findByIdAndDelete(videoId);

  return response
    .status(200)
    .json(new ApiResponse(200, null, 'Video deleted successfully'));
});

const incrementVideoCount = asyncHandler(async (request, response) => {
  const videoId = request.params.id;
  console.log('Video ID:', videoId);

  const video = await Video.findByIdAndUpdate(
    videoId,
    {
      $inc: { views: 1 },
    },
    { new: true },
  );

  if (!video) {
    return response.status(404).json({ message: 'Video not found' });
  }

  return response
    .status(200)
    .json(
      new ApiResponse(200, { video }, 'Successfully incremented video views'),
    );
});

const searchVideos = asyncHandler(async (request, response) => {
  const searchTerm = request.query.search || '';

  const searchRegex = new RegExp(searchTerm, 'i');

  // Find videos matching title, description, or tags containing search term
  const videos = await Video.find({
    $or: [
      { title: { $regex: searchRegex } },
      { description: { $regex: searchRegex } },
      { tags: { $regex: searchRegex } },
    ],
  });

  return response
    .status(200)
    .json(new ApiResponse(200, { videos }, 'Videos matching search query'));
});

const getAllVideo = asyncHandler(async (request, response) => {
  const videos = await Video.find().sort({ createdAt: -1 }); 

  return response
    .status(200)
    .json(new ApiResponse(200, { videos }, 'All videos fetched successfully'));
});

export {
  uploadVideo,
  getAllVideo,
  getVideoById,
  searchVideos,
  incrementVideoCount,
  deleteVideo,
  updateVideo,
};
