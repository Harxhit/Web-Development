import Listing from '../models/listing.models.js';
import logger from '../utils/logger.util.js';
import ApiError from '../utils/apiError.util.js';
import listingValidator from '../validation/createListing.validation.js';
import { uploadToImageKit, deleteLocalFile } from '../utils/imageKit.util.js';
import {
  userGeoLocation,
  userReverseGeoCoding,
} from '../middlewares/location.middleare.js';

const createListing = async (request, response) => {
  const uploadedImages = request.files?.images;
  if (!uploadedImages || uploadedImages.length === 0) {
    throw new ApiError(400, 'At least one image is required');
  }

  logger.info('Uploaded files', uploadedImages);

  // Upload each image to ImageKit
  const imageUrls = [];
  for (const file of uploadedImages) {
    try {
      const imageResponse = await uploadToImageKit(
        file.path,
        file.originalname,
      );
      if (imageResponse?.url) {
        imageUrls.push(imageResponse.url);
        await deleteLocalFile(file.path);
      }
    } catch (err) {
      logger.error('Image upload error', {
        message: err.message,
        stack: err.stack,
      });
    }
  }

  // Inject image URLs into request body
  request.body.images = imageUrls;

  // Validate request body
  const { error, value } = listingValidator.validate(request.body);
  if (error) {
    logger.error('Validation error', {
      message: error.message,
      stack: error.stack,
    });
    throw new ApiError(400, 'Validation Error');
  }

  const userId = request.user?._id;
  const {
    title,
    description,
    category,
    listingType,
    price,
    quantity,
    expiresAt,
  } = value;

  try {
    const coordinates = await userGeoLocation(request, response);
    const address = await userReverseGeoCoding(coordinates);

    // Create the new listing
    const newItem = await Listing.create({
      userId,
      title,
      description,
      category,
      listingType,
      price,
      images: imageUrls,
      quantity,
      expiresAt,
      location: {
        address: address.address || '',
        city: address.city || '',
        state: address.state || '',
        country: address.country || '',
      },
    });

    return response.status(201).json({
      success: true,
      data: newItem,
      message: 'New selling item created successfully',
    });
  } catch (error) {
    logger.error('Error creating listing', {
      message: error.message,
      stack: error.stack,
    });
    throw new ApiError(500, 'Failed to create listing');
  }
};

const getAllListing = async (request, response) => {};

const getListingById = async (request, response) => {};

const getListingByUser = async (request, response) => {};

const updateListing = async (request, response) => {};

const deleteListing = async (request, response) => {};

const searchListing = async (request, response) => {};

const getNearByListing = async (request, response) => {};

const approveListing = async (request, response) => {};

const rejectListing = async (request, response) => {};

const reportListing = async (request, response) => {};

export { createListing };
