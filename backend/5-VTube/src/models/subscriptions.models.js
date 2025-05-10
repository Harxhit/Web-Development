import mongoose, { Schema } from 'mongoose';

const subscriptionSchema = new Schema(
  {
    subscriberId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    channelId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    subscriptionDate: {
      type: Date,
      default: Date.now,
    },
    notificationPreference: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  { timestamps: true },
);

const Subscription = mongoose.model('Subscription', subscriptionSchema);
export default Subscription;
