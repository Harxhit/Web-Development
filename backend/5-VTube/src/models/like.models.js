import mongoose, { Schema } from 'mongoose';

const likeSchema = new Schema({
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
});

const Like = mongoose.model('Like', likeSchema);
export default Like;
