import mongoose, { Schema } from 'mongoose';

const tweetSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
      trim: true,
      maxlength: 400,
    },
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
  },
  { timestamps: true },
);

const Tweet = mongoose.model('Tweet', tweetSchema);
export default Tweet;
