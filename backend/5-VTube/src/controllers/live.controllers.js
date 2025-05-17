import asyncHandler from '../utils/asyncHandler.js';
import ApiError from '../utils/apiError.js';
import ApiResponse from '../utils/apiResponse.js';
import Live from '../models/live.models.js';
import liveValidator from '../validators/live.validator.js';
import updateLiveValidator from '../validators/updateLive.validators.js';

function generateStreamKey(length = 30) {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let key = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    key += chars[randomIndex];
  }
  return key;
}

const createLive = asyncHandler(async (request, response) => {
  const { error, value } = liveValidator.validate(request.body, {
    abortEarly: false,
  });

  console.log('Validation Error:', error);
  console.log('Validation Value:', value);

  if (error) {
    const errors = error.details.map((err) => ({
      field: err.path.join('.'),
      message: err.message,
    }));
    throw new ApiError(errors, 400, 'Validation Failed');
  }
  const { title, description, startTime, chatEnabled, status } = value;
  let streamKey = generateStreamKey();
  const userId = request.user._id;

  const newLive = await Live.create({
    userId,
    title,
    description,
    streamKey,
    chatEnabled,
    status,
    startTime,
  });

  if (!newLive) {
    throw new ApiError(400, 'Cannot create live');
  }

  return response.status(201).json({
    status: 'success',
    message: 'Live created successfully',
    data: {
      live: newLive,
    },
  });
});

const deleteLive = asyncHandler(async (request, response) => {
  const liveId = request.params.liveId;

  const deletedLive = await Live.findByIdAndDelete(liveId);
  if (!deletedLive) {
    throw new ApiError(400, 'Cannot delete live');
  }
  return response.status(200).json({
    status: 'success',
    message: 'Live deleted successfully',
    data: {
      live: deletedLive,
    },
  });
});


const updateLive = asyncHandler(async (request, response) => {
  const { error, value } = updateLiveValidator.validate(request.body, {
    abortEarly: false,
  });

  if (error) {
    const errors = error.details.map((err) => ({
      field: err.path.join('.'),
      message: err.message,
    }));
    throw new ApiError(errors, 400, 'Validation Failed');
  }

  const { title, description, startTime, chatEnabled, status } = value;
  const liveId = request.params.liveId;

  const updatedLive = await Live.findByIdAndUpdate(
    liveId,
    {
      title,
      description,
      startTime,
      chatEnabled,
      status,
    },
    { new: true },
  );

  if (!updatedLive) {
    throw new ApiError(400, 'Cannot update live');
  }

  return response.status(200).json({
    status: 'success',
    message: 'Live updated successfully',
    data: {
      live: updatedLive,
    },
  });
});


const updateLiveStatus = asyncHandler(async (request, response) => {
  const { status } = request.body;
  const liveId = request.params.liveId;

  const updatedLive = await Live.findByIdAndUpdate(
    liveId,
    { status },
    { new: true },
  );
  if (!updatedLive) {
    throw new ApiError(400, 'Cannot update live status');
  }
  return response.status(200).json({
    status: 'success',
    message: 'Live status updated successfully',
    data: {
      live: updatedLive,
    },
  });
});


const incrementViwerCount = asyncHandler(async (request, response) => {
  const liveId = request.params.liveId;

  const updatedLive = await Live.findByIdAndUpdate(
    liveId,
    { $inc: { viewerCount: 1 } },
    { new: true },
  );

  if (!updatedLive) {
    throw new ApiError(400, 'Cannot increment viewer count');
  }

  return response.status(200).json({
    status: 'success',
    message: 'Viewer count incremented successfully',
    data: {
      live: updatedLive,
    },
  });
});

const endLive = asyncHandler(async (request, response) => {
  const liveId = request.params.liveId;

  const updatedLive = await Live.findByIdAndUpdate(
    liveId,
    { status: 'ended' },
    { new: true },
  );

  if (!updatedLive) {
    throw new ApiError(400, 'Cannot end live');
  }

  return response.status(200).json({
    status: 'success',
    message: 'Live ended successfully',
    data: {
      live: updatedLive,
    },
  });
});

export {
  createLive,
  endLive,
  updateLive,
  deleteLive,
  updateLiveStatus,
  incrementViwerCount,
};
