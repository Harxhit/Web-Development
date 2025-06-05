import Listing from '../models/listing.models.js';
import logger from '../utils/logger.util.js';
import ApiError from '../utils/apiError.util.js';
import listingValidator from '../validation/createListing.validation.js';
import { uploadToImageKit, deleteLocalFile } from '../utils/imageKit.util.js';
import {
  userGeoLocation,
  userReverseGeoCoding,
} from '../middlewares/location.middleare.js';
import updateListingValidator from '../validation/updateListing.validation.js';
``
const createListing = async (request, response) => {
  const uploadedImages = request.files?.images;
  if (!uploadedImages || uploadedImages.length === 0) {
    throw new ApiError(400, 'At least one image is required');
  }

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
    location: inputLocation = {},
    quantity,
    expiresAt,
  } = value;

  let finalLocation = inputLocation;

  if (
    !inputLocation ||
    !inputLocation.city ||
    !inputLocation.state ||
    !inputLocation.country ||
    !inputLocation.address
  ) {
    const coordinates = await userGeoLocation(request, response);
    finalLocation = await userReverseGeoCoding(coordinates);
  }

  try {
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
        address: finalLocation.address || '',
        city: finalLocation.city || '',
        state: finalLocation.state || '',
        country: finalLocation.country || '',
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

const updateListing = async (request, response) => {
  const { error, value } = updateListingValidator.validate(request.body);
  if (error) {
    logger.error('Validation error', {
      message: error.message,
      stack: error.stack,
    });
    throw new ApiError(400, 'Validation error');
  }

  const uploadedImages = request.files?.images;
  let imageUrls = [];

  if (uploadedImages && uploadedImages.length >= 1) {
    for (let file of uploadedImages) {
      try {
        const imageResponse = await uploadToImageKit(
          file.path,
          file.originalname,
        );
        if (imageResponse?.url) {
          imageUrls.push(imageResponse.url);
          await deleteLocalFile(file.path);
        }
      } catch (error) {
        logger.error('Failed uploading images', {
          message: error.message,
          stack: error.stack,
        });
        throw new ApiError(500, 'Failed uploading images');
      }
    }
  }

  const {
    title,
    description,
    category,
    listingType,
    price,
    location: inputLocation = {},
    quantity,
    expiresAt,
    images,
  } = value;

  const itemId = request.params.itemId;

  const updateData = {
    title,
    description,
    category,
    listingType,
    price,
    quantity,
    expiresAt,
  };

  if (Object.keys(inputLocation).length > 0) {
    const existingItem = await Listing.findById(itemId);
    if (!existingItem) {
      throw new ApiError(404, 'Listing not found');
    }
    updateData.location = {
      ...existingItem.location.toObject(),
      ...inputLocation,
    };
  }

  if (imageUrls.length > 0) {
    updateData.images = imageUrls;
  } else if (images) {
    updateData.images = images;
  }

  const updatedItem = await Listing.findByIdAndUpdate(itemId, updateData, {
    new: true,
  });

  return response.status(200).json({
    success: true,
    data: updatedItem,
    message: 'Listed item updated successfully',
  });
};

const getAllListing = async (request, response) => {
  const allListings = await Listing.find({ isDeleted: false }).select(
    ' -updatedAt -__v',
  );
  if (!allListings || allListings.length === 0) {
    logger.error('No listings found', {
      message: 'No listings found',
      stack: error.stack,
    });
  }
  return response.status(200).json({
    success: true,
    data: allListings,
    message: 'Successfully listed all items',
  });
};

const getListingById = async (request, response) => {
  const itemId = request.params.itemId;
  if (!itemId) {
    logger.error('Item ID is required', {
      message: 'Item ID is required',
      stack: error.stack,
    });
    throw new ApiError(400, 'Item ID is required');
  }
  const item = await Listing.findById(itemId).select(' -updatedAt -__v');
  if (!item) {
    logger.error('Listing not found', {
      message: 'Listing not found',
      stack: error.stack,
    });
    throw new ApiError(404, 'Listing not found');
  }
  return response.status(200).json({
    success: true,
    data: item,
    message: 'Successfully retrieved the listing',
  });
};

const getListingByUser = async (request, response) => {
  const userId = request.user?._id;

  if (!userId) {
    logger.error('Authentication error', {
      message: error.message,
      stack: error.stack,
    });
  }
  const itemByUser = await Listing.findById(userId).select(' -updatedAt -__v');
  return response.status(201).json({
    success: true,
    data: itemByUser,
    message: 'Successfully listed all items listed by user',
  });
};

const deleteListing = async (request, response) => {};

const searchListing = async (request, response) => {};

const getNearByListing = async (request, response) => {};

const approveListing = async (request, response) => {};

const rejectListing = async (request, response) => {};

const reportListing = async (request, response) => {};

export {
  createListing,
  updateListing,
  getListingByUser,
  getAllListing,
  getListingById,
};
