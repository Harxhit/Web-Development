import mongoose, { Schema } from 'mongoose';

const playlistvideoSchema = new Schema(
  {
    playlistId: {
      type: Schema.Types.ObjectId,
      ref: 'Playlist',
      required: true,
    },
    videoId: {
      type: Schema.Types.ObjectId,
      ref: 'Video',
      required: true,
    },
    position: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

const Playlistvideo = mongoose.model('Playlistvideo', playlistvideoSchema);
export default Playlistvideo;
