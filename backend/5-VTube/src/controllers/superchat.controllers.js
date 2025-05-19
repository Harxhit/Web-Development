import mongoose from 'mongoose';
import asyncHandler from '../utils/asyncHandler.js';
import ApiError from '../utils/apiError.js';
import ApiResponse from '../utils/apiResponse.js';
import Superchat from '../models/superchat.models.js';

// Helper function to assign color based on amount
const getColorByAmount = (amount) => {
  if (amount >= 5000) return 'red';
  if (amount >= 1000) return 'orange';
  if (amount >= 500) return 'yellow';
  if (amount >= 100) return 'green';
  return 'blue';
};

const createSuperchat = asyncHandler(async (request, response) => {
  // console.log('Request body:', request.body);
  console.log('Request params:', request.params);
  // console.log('Authenticated user:', request.user);

  const { amount, message } = request.body;
  const streamId = request.params.streamId;

  if (!amount) throw new ApiError(400, 'Amount is required');
  if (!message) throw new ApiError(400, 'Message is required');

  const amountNumber = Number(amount);
  if (isNaN(amountNumber))
    throw new ApiError(400, 'Amount must be a valid number');

  if (!mongoose.Types.ObjectId.isValid(streamId)) {
    throw new ApiError(400, 'Invalid streamId');
  }
  const streamObjectId = new mongoose.Types.ObjectId(streamId);

  const color = getColorByAmount(amountNumber);

  const superChat = await Superchat.create({
    userId: request.user._id,
    streamId: streamObjectId,
    amount: amountNumber,
    message,
    color,
  });

  console.log('Superchat created:', superChat);

  response
    .status(201)
    .json(
      new ApiResponse(201, 'Superchat created successfully', { superChat }),
    );
});

export default createSuperchat;
