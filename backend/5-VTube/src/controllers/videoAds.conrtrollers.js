import fs from 'fs/promises';
import asyncHandler from '../utils/asyncHandler.js';
import ApiError from '../utils/apiError.js';
import ApiResponse from '../utils/apiResponse.js';
import Videoad from '../models/videoAds.models.js';
import { uploadToCloudinary } from '../utils/cloudinary.js';
import User from '../models/user.models.js';
import VideoadValidator from '../validators/videoAd.validator.js';

const createAdd = asyncHandler(async (request, response) => {
  console.log('Request body:', request.body);
  console.log('Request file:', request.file);

  if (request.body.duration) {
    request.body.duration = parseFloat(request.body.duration);
  }

  if (typeof request.body.targetDemographics === 'string') {
    request.body.targetDemographics = {
      ageGroup: request.body.targetDemographics,
    };
  }

  // 1. Validate text fields from request body (not video file)
  const { error, value } = VideoadValidator.validate(request.body, {
    abortEarly: false,
  });
  if (error) {
    const errors = error.details.map((err) => ({
      field: err.path.join('.'),
      message: err.message,
    }));
    throw new ApiError(errors, 400, 'Validation Failed');
  }

  // 2. Find the admin user
  const admin = await User.findById(request.user?._id);
  if (!admin) {
    throw new ApiError(401, 'Unauthorized: Admin not found');
  }

  // 3. Check if video file exists
  if (!request.file) {
    throw new ApiError(400, 'Video file is required');
  }

  // 4. Upload video file to Cloudinary
  const videoLocalPath = request.file.path;
  const videoUploadResponse = await uploadToCloudinary(videoLocalPath);

  if (!videoUploadResponse?.url) {
    throw new ApiError(500, 'Failed to upload video to Cloudinary');
  }

  // 5. Delete local file after upload
  try {
    await fs.unlink(videoLocalPath);
  } catch (err) {
    console.warn(`Failed to delete local file: ${videoLocalPath}`, err);
  }

  // 6. Create new Videoad document with validated fields + uploaded video URL
  const createdVideoAd = await Videoad.create({
    title: value.title,
    duration: value.duration,
    advertiser: value.advertiser,
    targetDemographics: {
      ageGroup: value.targetDemographics.ageGroup,
    },
    videoFile: videoUploadResponse.url,
  });

  // 7. Return success response
  return response
    .status(201)
    .json(
      new ApiResponse(
        201,
        { videoAd: createdVideoAd },
        'Video ad created successfully',
      ),
    );
});

const updateAdd = asyncHandler(async (request, response) => {
  console.log('Request body:', request.body);
  console.log('Request file:', request.file);

  if (request.body.duration) {
    request.body.duration = parseFloat(request.body.duration);
  }

  if (typeof request.body.targetDemographics === 'string') {
    request.body.targetDemographics = {
      ageGroup: request.body.targetDemographics,
    };
  }

  const { error, value } = VideoadValidator.validate(request.body, {
    abortEarly: false,
  });
  if (error) {
    const errors = error.details.map((err) => ({
      field: err.path.join('.'),
      message: err.message,
    }));
    throw new ApiError(errors, 400, 'Validation Failed');
  }

  const admin = await User.findById(request.user?._id);
  if (!admin) {
    throw new ApiError(401, 'Unauthorized: Admin not found');
  }

  const videoadId = request.params.videoadId;

  const updatedVideoAd = await Videoad.findByIdAndUpdate(videoadId, {
    title: value.title,
    duration: value.duration,
    advertiser: value.advertiser,
    targetDemographics: {
      ageGroup: value.targetDemographics.ageGroup,
    },
  });

  return response
    .status(201)
    .json(
      new ApiResponse(
        201,
        { videoAd: updatedVideoAd },
        'Video ad updated successfully',
      ),
    );
});

const deleteAdd = asyncHandler(async (request, response) => {
  const videoadId = request.params.videoadId;

  const deleteVideo = await Videoad.findByIdAndUpdate(videoadId, {
    isDeleted: true,
  });

  if (!deleteVideo) {
    throw new ApiError(404, 'Video ad not found');
  }

  return response
    .status(201)
    .json(
      new ApiResponse(
        201,
        { videoAd: deleteVideo },
        'Video ad deleted successfully',
      ),
    );
});

const allVideoAd = asyncHandler(async (request, response) => {
  try {
    const page = parseInt(request.query.page) || 1;
    const limit = parseInt(request.query.limit) || 10;
    const skip = (page - 1) * limit;

    const videoAds = await Videoad.find()
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    const totalVideoAds = await Videoad.countDocuments();

    return response.status(200).json({
      statusCode: 200,
      success: true,
      message: 'All video ads',
      data: {
        videoAds,
        totalVideoAds,
      },
    });
  } catch (error) {
    return response.status(500).json({
      statusCode: 500,
      success: false,
      message: 'Error fetching video ads',
      error: error.message,
    });
  }
});

const getVideoAdById = asyncHandler(async (request, response) => {
  const videoadId = request.params.videoadId;

  const videoAd = await Videoad.findById(videoadId);

  if (!videoAd) {
    throw new ApiError(404, 'Video ad not found');
  }

  return response
    .status(200)
    .json(new ApiResponse(200, { videoAd }, 'Video ad retrieved successfully'));
});

export { createAdd, updateAdd, deleteAdd, allVideoAd, getVideoAdById };
