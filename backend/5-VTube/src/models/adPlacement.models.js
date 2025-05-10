import mongoose, { Schema } from 'mongoose';

const adplacementSchema = new Schema({
  adId: {
    type: Schema.Types.ObjectId,
    ref: 'Videoad',
    required: true,
  },
  videoId: {
    type: Schema.Types.ObjectId,
    ref: 'Video',
    required: true,
  },
  timing: {
    type: Number,
    required: true,
  },
});

const Adplacement = mongoose.model('Adplacement', adplacementSchema);
export default Adplacement;
