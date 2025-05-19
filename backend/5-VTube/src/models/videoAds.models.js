import mongoose, { Schema } from 'mongoose';

const videoadSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 100,
      trim: true,
    },
    videoFile: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    advertiser: {
      type: String,
      required: true,
    },
    targetDemographics: {
      ageGroup: {
        type: String,
      },
    },
  },
  { timestamps: true },
);

const Videoad = mongoose.model('Videoad', videoadSchema);
export default Videoad;
