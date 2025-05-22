import asyncHandler from '../utils/asyncHandler.js';
import ApiError from '../utils/apiError.js';
import ApiResponse from '../utils/apiResponse.js';
import User from '../models/user.models.js';
import PremiumSubscription from '../models/premium.models.js';

const createSubscription = asyncHandler(async (request, response) => {
  const userId = request.user._id;
  const user = await User.findById(userId);
  const { planType, paymentMethod, autoRenew, endDate } = request.body;

  if (!user) {
    throw new ApiError(404, 'User not found');
  }
  if (!planType) {
    throw new ApiError(404, 'Plan type not found');
  }
  if (!paymentMethod) {
    throw new ApiError(404, 'Payment method not found');
  }
  if (!endDate) {
    throw new ApiError(404, 'End date not found');
  }

  const premiumSubscription = await PremiumSubscription.create({
    userId,
    username: user.username,
    planType,
    endDate,
    paymentMethod,
    autoRenew,
  });

  return response.status(201).json(
    new ApiResponse({
      success: true,
      data: premiumSubscription,
      message: 'Premium subscription created successfully',
    }),
  );
});

const updateSubscription = asyncHandler(async (request, response) => {
  const userId = request.user._id;
  const subscriptionId = request.params.subscriptionId;
  const user = await User.findById(userId);
  const { planType, autoRenew, endDate } = request.body;

  if (!user) {
    throw new ApiError(404, 'User not found');
  }
  if (!planType) {
    throw new ApiError(404, 'Plan type not found');
  }
  if (!endDate) {
    throw new ApiError(404, 'End date not found');
  }

  const updatePremiumSubscription = await PremiumSubscription.findByIdAndUpdate(
    subscriptionId,
    {
      userId,
      username: user.username,
      planType,
      endDate,
      autoRenew,
    },
  );

  return response.status(201).json(
    new ApiResponse({
      success: true,
      data: updatePremiumSubscription,
      message: 'Premium subscription updated successfully',
    }),
  );
});

const getActiveSubscription = asyncHandler(async (request, response) => {
  const now = new Date();

  const getActiveSubscription = await PremiumSubscription.findOne({
    userId: request.user._id,
    endDate: { $gte: now },
    isCancelled: false,
  });
  if (!getActiveSubscription) {
    throw new ApiError(404, 'No active subscription found');
  }
  return response.status(200).json(
    new ApiResponse({
      success: true,
      data: getActiveSubscription,
      message: 'Active subscription fetched successfully',
    }),
  );
});

const getSubscriptionByUserId = asyncHandler(async (request, response) => {
  const userId = request.params.userId;
  const premiumSubscription = await PremiumSubscription.find({
    userId,
  });
  if (!premiumSubscription) {
    throw new ApiError(404, 'Premium subscription not found');
  }

  return response.status(200).json(
    new ApiResponse({
      success: true,
      data: premiumSubscription,
      message: 'Premium subscription fetched successfully',
    }),
  );
});

const cancelSubscription = asyncHandler(async (request, response) => {
  const subscriptionId = request.params.subscriptionId;

  if (!subscriptionId) {
    throw new ApiError(404, 'Subscription Id not found');
  }

  const cancelledSubscription = await PremiumSubscription.findByIdAndUpdate(
    subscriptionId,
    {
      isCancelled: true,
      cancelledAt: Date.now(),
    },
    { new: true },
  );

  if (!cancelledSubscription) {
    throw new ApiError(404, 'Subscription not found');
  }

  return response.status(200).json(
    new ApiResponse({
      success: true,
      data: cancelledSubscription,
      message: 'Subscription cancelled successfully',
    }),
  );
});

const deleteSubscription = asyncHandler(async (request, response) => {
  const subscriptionId = request.params.subscriptionId;

  if (!subscriptionId) {
    throw new ApiError(404, 'Subscription Id not found');
  }

  const deleteSubscription =
    await PremiumSubscription.findByIdAndDelete(subscriptionId);

  return response.status(201).json(
    new ApiResponse({
      success: true,
      data: deleteSubscription,
      message: 'Subscription deleted successfully',
    }),
  );
});

const renewSubscription = asyncHandler(async (request, response) => {
  const subscriptionId = request.params.subscriptionId;
  const { endDate } = request.body;

  if (!subscriptionId) {
    throw new ApiError(404, 'Subscription Id not found');
  }
  if (!endDate) {
    throw new ApiError(404, 'End date not found');
  }

  const renewSubscription = await PremiumSubscription.findByIdAndUpdate(
    subscriptionId,
    {
      endDate,
    },
    { new: true },
  );

  return response.status(201).json(
    new ApiResponse({
      success: true,
      data: renewSubscription,
      message: 'Subscription renewed successfully',
    }),
  );
});

const getExpiringSubscription = asyncHandler(async (request, response) => {
  const { withinDays } = request.body;

  const daysLeft = parseInt(withinDays);
  if (!daysLeft || typeof daysLeft !== 'number') {
    throw new ApiError(400, 'Days left must be a valid number');
  }

  const now = new Date();
  const futureDate = new Date();
  futureDate.setDate(now.getDate() + daysLeft);

  const expiringSubscriptions = await PremiumSubscription.find({
    endDate: { $gte: now, $lte: futureDate },
    isCancelled: false,
  });

  return response.status(200).json(
    new ApiResponse({
      success: true,
      data: expiringSubscriptions,
      message: `Subscriptions expiring within ${daysLeft} day(s) fetched successfully.`,
    }),
  );
});

const getAllSubscription = asyncHandler(async (request, response) => {
  const premiumSubscription =
    await PremiumSubscription.find().populate('userId');
  if (!premiumSubscription) {
    throw new ApiError(404, 'Premium subscription not found');
  }
  return response.status(200).json(
    new ApiResponse({
      success: true,
      data: premiumSubscription,
      message: 'Premium subscription fetched successfully',
    }),
  );
});

export {
  getActiveSubscription,
  deleteSubscription,
  getAllSubscription,
  getExpiringSubscription,
  getSubscriptionByUserId,
  createSubscription,
  renewSubscription,
  cancelSubscription,
  updateSubscription,
};
