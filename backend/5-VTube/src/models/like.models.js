import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const likeSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    targetId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    targetType: {
      type: String,
      enum: ['video', 'comment'],
      required: true,
    },
  },
  { timestamps: true },
);

likeSchema.index({ userId: 1, targetId: 1, targetType: 1 }, { unique: true });

const Like = mongoose.model('Like', likeSchema);
export default Like;
