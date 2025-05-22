import mongoose, { Schema } from 'mongoose';

const premiumSubscriptionSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    startDate: {
      type: Date,
      default: Date.now,
    },
    endDate: {
      type: Date,
      required: true,
    },
    paymentMethod: {
      type: String,
      enum: ['credit card ', 'upi', 'debit card', 'net banking', 'redeem code'],
      required: true,
    },
    autoRenew: {
      type: Boolean,
      default: false,
    },
    planType: {
      type: String,
      enum: ['individual', 'family', 'student'],
      required: true,
    },
    isCancelled: {
      type: Boolean,
      default: false,
    },
    cancelledAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true },
);

const PremiumSubscription = mongoose.model(
  'PremiumSubscription',
  premiumSubscriptionSchema,
);
export default PremiumSubscription;
