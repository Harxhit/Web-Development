import Channel from '../models/channel.models.js';
import ApiError from '../utils/apiError.js';
import ApiResponse from '../utils/apiResponse.js';
import asyncHandler from '../utils/asyncHandler.js';
import {
  uploadToCloudinary,
  deleteFromCloudinary,
} from '../utils/cloudinary.js';

// Create a new channel
const createChannel = asyncHandler(async (req, res) => {
  const { name, description, socials } = req.body;
  const owner = req.user._id;

  const existingChannel = await Channel.findOne({ owner });
  if (existingChannel) {
    throw new ApiError(400, 'You already have a channel');
  }

  let bannerUrl = '';
  if (req.file) {
    const uploadResult = await uploadToCloudinary(req.file.path);
    if (uploadResult.error) {
      throw new ApiError(500, 'Error uploading banner image');
    }
    bannerUrl = uploadResult.secure_url;
  }

  const channel = await Channel.create({
    owner,
    name,
    description,
    socials,
    bannerUrl,
  });

  res
    .status(201)
    .json(new ApiResponse(201, { channel }, 'Channel created successfully'));
});

const getChannelByOwner = asyncHandler(async (req, res) => {
  const owner = req.params.ownerId;

  const channel = await Channel.findOne({ owner });
  if (!channel) {
    throw new ApiError(404, 'Channel not found');
  }

  res
    .status(200)
    .json(new ApiResponse(200, { channel }, 'Channel fetched successfully'));
});

// Update channel info (only by owner)
const updateChannel = asyncHandler(async (req, res) => {
  const owner = req.user._id;
  const { name, description, socials } = req.body;

  let bannerUrl;

  // If a file was uploaded via multer, upload it to Cloudinary
  if (req.file) {
    const localFilePath = req.file.path; // multer stores file path here
    const uploadResult = await uploadToCloudinary(localFilePath);

    if (uploadResult.error) {
      throw new ApiError(500, 'Failed to upload banner image');
    }

    bannerUrl = uploadResult.secure_url || uploadResult.url; // Cloudinary URL
  }

  // Build update object
  const updateData = {
    name,
    description,
    socials,
  };

  if (bannerUrl) {
    updateData.bannerUrl = bannerUrl;
  }

  const channel = await Channel.findOneAndUpdate({ owner }, updateData, {
    new: true,
    runValidators: true,
  });

  if (!channel) {
    throw new ApiError(404, 'Channel not found');
  }

  res
    .status(200)
    .json(new ApiResponse(200, { channel }, 'Channel updated successfully'));
});
// Delete a channel (only by owner)
const deleteChannel = asyncHandler(async (req, res) => {
  const owner = req.user._id;

  const channel = await Channel.findOneAndDelete({ owner });
  if (!channel) {
    throw new ApiError(404, 'Channel not found');
  }

  res
    .status(200)
    .json(new ApiResponse(200, null, 'Channel deleted successfully'));
});

export { createChannel, getChannelByOwner, updateChannel, deleteChannel };
