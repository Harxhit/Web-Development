import mongoose, { Schema } from 'mongoose';

const channelMembershipSchema = new Schema(
  {
    channelId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    membershipLevel: {
      type: String,
      enum: ['basic', 'premium'],
      required: true,
    },
    joinDate: {
      type: Date,
      default: Date.now,
    },
    perks: {
      type: [String], 
      default: [],
    },
  },
  { timestamps: true },
);

const ChannelMembership = mongoose.model(
  'ChannelMembership',
  channelMembershipSchema,
);
export default ChannelMembership;
