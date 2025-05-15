import mongoose, { Schema } from 'mongoose';

const videoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    duration: {
      type: Number,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    videoFile: {
      type: String, //A cloudnary url or something like that
      required: true,
      index: true,
    },
    thumbnail: {
      type: String, //A cloudnary url or something like that
      required: true,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

const Video = mongoose.model('Video', videoSchema);
export default Video;
