import ApiError from '../utils/apiError.js';
import ApiResponse from '../utils/apiResponse.js';
import asycnHandler from '../utils/asyncHandler.js';
import Notification from '../models/notification.models.js';
import User from '../models/user.models.js';

//receiverId, notificationType, targetId => send request
const createNotification = asycnHandler(async (request, response) => {
  const { receiverId, notificationType, targetId, content, targetModel } =
    request.body;
  const userId = request.user._id;
  // console.log('receiverId:', receiverId);
  // console.log('notificationType:', notificationType);
  const senderId = await User.findById(userId).select('fullName');

  if (!receiverId || !senderId || !notificationType) {
    throw new ApiError(400, 'These feild required');
  }
  if (senderId === receiverId) return;

  const notification = await Notification.create({
    receiverId: receiverId, // who gets the notification
    senderId: senderId, // who caused the notification (optional)
    notificationType: notificationType, // e.g. 'comment', 'like'
    content: content, // message string
    targetId: targetId, // e.g. related video/comment/user id (optional)
    targetModel: targetModel, // 'Video' or 'Comment' or 'User' (optional)
    isRead: false, // default false or explicit
  });

  return response
    .status(201)
    .json(
      new ApiResponse(
        201,
        { notification },
        'Notification created successfully',
      ),
    );
});

const getUserNotification = asycnHandler(async (request, response) => {
  const userId = request.user._id;
  console.log(userId);
  const getNotification = await Notification.find(
    { receiverId: userId },
    {
      __v: 0,
    },
  )
    .populate('senderId', 'fullName')
    .sort({ createdAt: -1 });
  return response
    .status(200)
    .json(
      new ApiResponse(
        200,
        { notification: getNotification },
        'Get user notification successfully',
      ),
    );
});

const markAsRead = asycnHandler(async (request, response) => {
  const notificationId = request.params.notificationId;
  const userId = request.user._id;

  const updateNotification = await Notification.findOneAndUpdate(
    { _id: notificationId, receiverId: userId },
    { isRead: true },
    { new: true },
  );

  if (!updateNotification) {
    throw new ApiError(400, 'Unable to update notification status');
  }

  return response
    .status(200)
    .json(
      new ApiResponse(
        201,
        { notification: updateNotification },
        'Notification mark as read',
      ),
    );
});

const markAllAsRead = asycnHandler(async (request, response) => {
  const userId = request.user._id;

  const updateResult = await Notification.updateMany(
    { receiverId: userId, isRead: false },
    { isRead: true },
  );

  if (updateResult.matchedCount === 0) {
    throw new ApiError(400, 'No unread notifications found to update');
  }

  return response
    .status(200)
    .json(
      new ApiResponse(
        200,
        { updatedCount: updateResult.modifiedCount },
        'All notifications marked as read',
      ),
    );
});

const deleteNotification = asycnHandler(async (request, response) => {
  const notificationId = request.params.notificationId;
  const userId = request.user._id;
  const deleteNotification = await Notification.findOneAndDelete({
    _id: notificationId,
    receiverId: userId,
  });
  if (!deleteNotification) {
    throw new ApiError(400, 'Unable to delete notification');
  }
  return response
    .status(200)
    .json(
      new ApiResponse(
        200,
        { notification: deleteNotification },
        'Notification deleted successfully',
      ),
    );
});

export {
  createNotification,
  getUserNotification,
  markAllAsRead,
  markAsRead,
  deleteNotification,
};
