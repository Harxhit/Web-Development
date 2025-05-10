import mongoose, { Schema } from 'mongoose';

const watchHistorySchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    videoId: {
      type: Schema.Types.ObjectId,
      ref: 'Video',
      required: true,
    },
    watchDate: {
      type: Date,
      default: Date.now,
    },
    progress: {
      type: Number, // in seconds
      default: 0,
    },
  },
  { timestamps: true },
);

const WatchHistory = mongoose.model('WatchHistory', watchHistorySchema);
export default WatchHistory;
