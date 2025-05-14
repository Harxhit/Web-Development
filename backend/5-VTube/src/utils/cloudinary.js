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

// console.log('Cloudinary Config:', {
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_SECRET, 
// });


// Uploading to Cloudinary
const uploadToCloudinary = async function (localFilePath) {
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
      } else {
        console.log('Local file deleted successfully:', localFilePath);
      }
    });

    return response; // Return the successful response
  } catch (error) {
    console.error('Error uploading file to Cloudinary', error);

    // Clean up local file if an error occurs
    fs.unlink(localFilePath, (unlinkErr) => {
      if (unlinkErr) {
        console.error(
          'Error deleting local file after upload error',
          unlinkErr,
        );
      }
    });

    return { error: error };
  }
};

const deleteFromCloudinary = async (publicId) => {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    console.log('Deleted from cloudinary', publicId);
  } catch (error) {
    console.log('Error deleting from cloudinary', error);
    return null;
  }
};

export { uploadToCloudinary, deleteFromCloudinary };
