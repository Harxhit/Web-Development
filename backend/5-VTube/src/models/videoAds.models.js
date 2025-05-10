import mongoose, { Schema } from 'mongoose';

const videoadSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 100,
      trim: true,
    },
    contentUrl: {
      type: String, // Assuming URL to ad content (e.g., cloud storage URL)
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
        type: String, // e.g., "18-24", "25-34", etc.
      },
    },
  },
  { timestamps: true },
);

const Videoad = mongoose.model('Videoad', videoadSchema);
export default Videoad;
