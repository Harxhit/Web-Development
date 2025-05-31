import ImageKit from 'imagekit';
import dotenv from 'dotenv';
import fs from 'fs';
import logger from './logger.util.js';

dotenv.config();

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

// console.log(imagekit);

// Upload to ImageKit from local file
const uploadToImageKit = async (localFilePath, originalName) => {
  try {
    const fileBuffer = fs.readFileSync(localFilePath);

    const result = await imagekit.upload({
      file: fileBuffer,
      fileName: originalName,
      useUniqueFileName: true,
    });

    logger.info(`Uploaded to ImageKit: ${result.url}`);
    return result;
  } catch (err) {
    logger.error(`ImageKit Upload Error: ${err.message}`);
    throw err;
  }
};

// Delete local file after upload
const deleteLocalFile = (filePath) => {
  fs.unlink(filePath, (err) => {
    if (err) {
      logger.error(`Failed to delete local file ${filePath}: ${err.message}`);
    } else {
      logger.info(`Deleted local file: ${filePath}`);
    }
  });
};

export { uploadToImageKit, deleteLocalFile };
