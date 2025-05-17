import mongoose, { Schema } from 'mongoose';

const playlistSchema = new Schema(
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
      trim: true,
    },
    description: {
      type: String,
      maxlength: 200,
      trim: true,
    },
    isPublic: {
      type: Boolean,
      default: true,
    },
    videos: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Video',
      },
    ],
    videoCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

const Playlist = mongoose.model('Playlist', playlistSchema);
export default Playlist;
