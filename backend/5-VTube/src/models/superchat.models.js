import mongoose, { Schema } from 'mongoose';

const superchatSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    streamId: {
      type: Schema.Types.ObjectId,
      ref: 'Live',
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    message: {
      type: String,
      required: true,
      maxlength: 200,
    },
    color: {
      type: String,
      required: true,
      maxlength: 20,
    },
  },
  { timestamps: true },
);

const Superchat = mongoose.model('Superchat', superchatSchema);
export default Superchat;
