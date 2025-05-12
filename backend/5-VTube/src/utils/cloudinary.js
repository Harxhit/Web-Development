import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

// Log the configuration
// console.log('Cloudinary Configuration:', cloudinary.config());

// Uploading to Cloudinary
const uploadToCloudinary = async function (localFilePath) {
  // Log the local file path
  console.log('uploadToCloudinary called with:', localFilePath);

  if (!localFilePath) {
    const error = { error: 'Local file path is missing' };
    console.log(
      'uploadToCloudinary - No localFilePath, returning error',
      error,
    );
    return error;
  }

  try {
    // Uploading the file to Cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: 'auto',
    });

    console.log('File uploaded successfully on Cloudinary', response.url);

    // Removing the local file after uploading to Cloudinary (asynchronously)
    fs.unlink(localFilePath, (err) => {
      if (err) {
        console.error('Error deleting local file:', err);
        //  Don't throw here, log and continue.
      } else {
        console.log('Local file deleted successfully:', localFilePath);
      }
    });

    return response; // Return the successful response
  } catch (error) {
    fs.unlink(localFilePath, (unlinkErr) => {
      if (unlinkErr) {
        console.error(
          'Error deleting local file after upload error',
          unlinkErr,
        );
      }
    });
    console.error('Error uploading file to Cloudinary', error);
    return { error: error };
  }
};

export default uploadToCloudinary;
