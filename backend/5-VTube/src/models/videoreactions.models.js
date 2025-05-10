import mongoose, { Schema } from 'mongoose';

const videoReactionsSchema = new Schema(
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
    reactionType: {
      type: String,
      enum: ['like', 'dislike'],
      required: true,
    },
  },
  { timestamps: true },
);

const VideoReaction = mongoose.model('VideoReaction', videoReactionsSchema);
export default VideoReaction;
