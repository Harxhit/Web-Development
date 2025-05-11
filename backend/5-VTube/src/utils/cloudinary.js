import { v2 as cloudinary } from 'cloudinary';
import fs from 'node:fs';

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

//Uploading to Cloudinary
const uploadToCloudinary = async function (localFilePath) {
  try {
    if (!localFilePath) return null;

    // Uploading the file to Cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: 'auto', // It automatically detects the file type
    });

    console.log('File uploaded successfully on Cloudinary', response.url); // Corrected the typo

    // Removing the local file after uploading to Cloudinary
    fs.unlinkSync(localFilePath);

    // Returning the Cloudinary response
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    console.error('Error uploading file to Cloudinary', error);
    return null;
  }
};

export default uploadToCloudinary;
