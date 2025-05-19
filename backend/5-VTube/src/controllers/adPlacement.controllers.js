import asyncHandler from '../utils/asyncHandler.js';
import ApiError from '../utils/apiError.js';
import ApiResponse from '../utils/apiResponse.js';
import Adplacement from '../models/adPlacement.models.js';

const createAdPlacement = asyncHandler(async (request, response) => {
  const { adId, videoId, timing } = request.body;

  if (!adId || !videoId || timing == null) {
    throw new ApiError(400, 'Please provide all required fields');
  }

  const numericTiming = parseInt(timing);
  console.log(typeof numericTiming);

  const adPlacement = await Adplacement.create({
    adId,
    videoId,
    timing: numericTiming,
  });

  return response.status(201).json({
    success: true,
    data: adPlacement,
    message: 'Ad placement created successfully',
  });
});

const deleteAdPlacement = asyncHandler(async (request, response) => {
  const { id } = request.params;

  if (!id) {
    throw new ApiError(400, 'Please provide an ID');
  }

  const adPlacement = await Adplacement.findByIdAndDelete(id);

  if (!adPlacement) {
    throw new ApiError(404, 'Ad placement not found');
  }

  return response.status(201).json(
    new ApiResponse({
      success: true,
      data: adPlacement,
      message: 'Ad placement deleted successfully',
    }),
  );
});

const updateAdPlacement = asyncHandler(async (request, response) => {
  const { id } = request.params;
  const { adId, videoId, timing } = request.body;

  if (!id) {
    throw new ApiError(400, 'Please provide an ID');
  }

  const numericTiming = parseInt(timing);
  const adPlacement = await Adplacement.findByIdAndUpdate(
    id,
    { adId, videoId, timing: numericTiming },
    { new: true, runValidators: true },
  );

  if (!adPlacement) {
    throw new ApiError(404, 'Ad placement not found');
  }

  return response.status(201).json(
    new ApiResponse({
      success: true,
      data: adPlacement,
      message: 'Ad placement updated successfully',
    }),
  );
});

export { createAdPlacement, deleteAdPlacement, updateAdPlacement };
