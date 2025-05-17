import Subscription from '../models/subscriptions.models.js';
import ApiError from '../utils/apiError.js';
import ApiResponse from '../utils/apiResponse.js';
import asycnHandler from '../utils/asyncHandler.js';

const subscribeChannel = asycnHandler(async (request, response) => {
  const { channelId } = request.body;
  const subscriberId = request.user._id;
  if (!channelId || !subscriberId) {
    throw new ApiError(400, 'Subscriber id or channel id not found');
  }
  if (channelId.toString() === subscriberId.toString()) {
    throw new ApiError(400, 'Both fields cannot be the same');
  }
  const alreadyExist = await Subscription.findOne({ subscriberId, channelId });
  if (alreadyExist) {
    throw new ApiError(400, 'Already subscribed to this channel');
  }

  const newSubscription = await Subscription.create({
    subscriberId: subscriberId,
    channelId: channelId,
  });

  return response
    .status(201)
    .json(
      new ApiResponse(
        201,
        { subscription: newSubscription },
        'Subscribed successfully',
      ),
    );
});

const unSubscribeChannel = asycnHandler(async (request, response) => {
  const { channelId } = request.body;
  const subscriberId = request.user._id;
  if (!channelId || !subscriberId) {
    throw new ApiError(400, 'Subscriber id or channel id not found');
  }
  if (channelId.toString() === subscriberId.toString()) {
    throw new ApiError(400, 'Both fields cannot be the same');
  }
  const alreadyExist = await Subscription.findOne({
    subscriberId,
    channelId,
  });
  if (!alreadyExist) {
    throw new ApiError(400, 'Already unsubscribed from this channel');
  }
  const deletedSubscription = await Subscription.findOneAndDelete({
    subscriberId,
    channelId,
  });
  if (!deletedSubscription) {
    throw new ApiError(400, 'Failed to unsubscribe from this channel');
  }
  return response
    .status(200)
    .json(
      new ApiResponse(
        200,
        { subscription: deletedSubscription },
        'Unsubscribed successfully',
      ),
    );
});

const getSubscribeCount = asycnHandler(async (request, response) => {
  const { channelId } = request.body;
  if (!channelId) {
    throw new ApiError(400, 'Channel id not found');
  }
  const subscribeCount = await Subscription.countDocuments({ channelId });
  // 0 count is valid, don't throw error
  return response
    .status(200)
    .json(
      new ApiResponse(
        200,
        { subscribeCount },
        'Subscribe count fetched successfully',
      ),
    );
});

const getScribscriptions = asycnHandler(async (request, response) => {
  const subscriberId = request.user._id;
  if (!subscriberId) {
    throw new ApiError(400, 'Subscriber id not found');
  }
  const subscriptions = await Subscription.find({ subscriberId })
    .populate('channelId', 'fullName username')
    .sort({ subscriptionDate: -1 });

  // subscriptions can be empty array, that's okay
  return response
    .status(200)
    .json(
      new ApiResponse(
        200,
        { subscriptions },
        'Subscriptions fetched successfully',
      ),
    );
});

const isSubscribed = asycnHandler(async (request, response) => {
  const { channelId } = request.body;
  const subscriberId = request.user._id;
  if (!channelId || !subscriberId) {
    throw new ApiError(400, 'Subscriber id or channel id not found');
  }
  if (channelId.toString() === subscriberId.toString()) {
    throw new ApiError(400, 'Both fields cannot be the same');
  }
  const alreadyExist = await Subscription.findOne({
    subscriberId,
    channelId,
  });
  if (!alreadyExist) {
    return response
      .status(200)
      .json(new ApiResponse(200, { isSubscribed: false }, 'Not Subscribed'));
  }
  return response
    .status(200)
    .json(new ApiResponse(200, { isSubscribed: true }, 'Subscribed'));
});

const updateNotificaitonPrefrences = asycnHandler(async (request, response) => {
  const { channelId, notificationPreference } = request.body;
  const subscriberId = request.user._id;
  if (!channelId || !subscriberId) {
    throw new ApiError(400, 'Subscriber id or channel id not found');
  }
  if (channelId.toString() === subscriberId.toString()) {
    throw new ApiError(400, 'Both fields cannot be the same');
  }
  const alreadyExist = await Subscription.findOne({
    subscriberId,
    channelId,
  });
  if (!alreadyExist) {
    throw new ApiError(400, 'Already unsubscribed from this channel');
  }
  const updatedSubscription = await Subscription.findOneAndUpdate(
    { subscriberId, channelId },
    { notificationPreference },
    { new: true },
  );
  if (!updatedSubscription) {
    throw new ApiError(400, 'Failed to update the notification preference');
  }
  return response
    .status(200)
    .json(
      new ApiResponse(
        200,
        { subscription: updatedSubscription },
        'Notification preference updated successfully',
      ),
    );
});

const getChannelSubscriberId = asycnHandler(async (request, response) => {
  const { channelId } = request.body;
  if (!channelId) {
    throw new ApiError(400, 'Channel id not found');
  }
  const subscriberIds = await Subscription.find({ channelId }).select(
    'subscriberId',
  );
  if (!subscriberIds) {
    throw new ApiError(400, 'Failed to get the subscriber ids');
  }
  return response
    .status(200)
    .json(
      new ApiResponse(
        200,
        { subscriberIds },
        'Subscriber ids fetched successfully',
      ),
    );
});

export {
  getChannelSubscriberId,
  updateNotificaitonPrefrences,
  isSubscribed,
  getScribscriptions,
  getSubscribeCount,
  unSubscribeChannel,
  subscribeChannel,
};
