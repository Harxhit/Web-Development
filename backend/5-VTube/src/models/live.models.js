import mongoose, { Schema } from 'mongoose';

const liveSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: true,
      maxlength: 100,
    },
    description: {
      type: String,
      required: true,
    },
    startTime: {
      type: Date,
      required: true,
    },
    endTime: {
      type: Date,
      default: null,
    },
    viewerCount: {
      type: Number,
      required: true,
      default: 0,
    },
    chatEnabled: {
      type: Boolean,
      required: true,
    },
    streamKey: {
      type: String,
      required: true,
      maxlength: 255,
    },
    status: {
      type: String,
      enum: ['scheduled', 'live', 'ended'],
      required: true,
    },
  },
  { timestamps: true },
);

const Live = mongoose.model('LiveStream', liveSchema);
export default Live;
