import mongoose, { Schema } from 'mongoose';

const notificationSchema = new Schema(
  {
    receiverId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    senderId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    notificationType: {
      type: String,
      enum: [
        'upload',
        'comment',
        'like',
        'reply',
        'subscription',
        'mention',
        'follow',
      ],
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    targetId: {
      type: Schema.Types.ObjectId,
    },
    targetModel: {
      type: String,
      enum: ['Video', 'Comment', 'User'],
    },
    isRead: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const Notification = mongoose.model('Notification', notificationSchema);
export default Notification;
