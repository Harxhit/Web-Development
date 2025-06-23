// import { Request, Response } from 'express';
// import Listing, { ListingDocument } from '../models/listing.models';
// import logger from '../utils/logger.util';
// import ApiError from '../utils/apiError.util';
// import listingValidator from '../validation/createListing.validation';
// import { uploadToImageKit, deleteLocalFile } from '../utils/imageKit.util';
// import {
//   userGeoLocation,
//   userReverseGeoCoding,
// } from '../middlewares/location.middleare';
// import updateListingValidator from '../validation/updateListing.validation';
// import { FilterQuery } from 'mongoose';

// const createListing = async (request: Request, response: Response) => {
//   const uploadedImages = request.files?.images;
//   if (!uploadedImages || uploadedImages.length === 0) {
//     throw new ApiError(400, 'At least one image is required');
//   }

//   // Upload each image to ImageKit
//   const imageUrls = [];
//   for (const file of uploadedImages) {
//     try {
//       const imageResponse = await uploadToImageKit(
//         file.path,
//         file.originalname,
//       );
//       if (imageResponse?.url) {
//         imageUrls.push(imageResponse.url);
//         await deleteLocalFile(file.path);
//       }
//     } catch (err: unknown) {
//       if (err instanceof Error) {
//         logger.error('Image upload error', {
//           message: err.message,
//           stack: err.stack,
//         });
//       }
//     }
//   }

//   // Inject image URLs into request body
//   request.body.images = imageUrls;

//   // Validate request body
//   const { error, value } = listingValidator.validate(request.body);
//   if (error) {
//     logger.error('Validation error', {
//       message: error.message,
//       stack: error.stack,
//     });
//     throw new ApiError(400, 'Validation Error');
//   }

//   const userId = request.user?._id;
//   const {
//     title,
//     description,
//     category,
//     listingType,
//     price,
//     location: inputLocation = {},
//     quantity,
//     expiresAt,
//   } = value;

//   let finalLocation = inputLocation;

//   if (
//     !inputLocation ||
//     !inputLocation.city ||
//     !inputLocation.state ||
//     !inputLocation.country ||
//     !inputLocation.address
//   ) {
//     const coordinates = await userGeoLocation(request, response);
//     finalLocation = await userReverseGeoCoding(coordinates);
//   }

//   try {
//     // Create the new listing
//     const newItem = await Listing.create({
//       userId,
//       title,
//       description,
//       category,
//       listingType,
//       price,
//       images: imageUrls,
//       quantity,
//       expiresAt,
//       location: {
//         address: finalLocation.address || '',
//         city: finalLocation.city || '',
//         state: finalLocation.state || '',
//         country: finalLocation.country || '',
//       },
//     });

//     return response.status(201).json({
//       success: true,
//       data: newItem,
//       message: 'New selling item created successfully',
//     });
//   } catch (error: unknown) {
//     if (error instanceof Error) {
//       logger.error('Error creating listing', {
//         message: error.message,
//         stack: error.stack,
//       });
//       throw new ApiError(500, 'Failed to create listing');
//     }
//   }
// };

// const updateListing = async (request: Request, response: Response) => {
//   const { error, value } = updateListingValidator.validate(request.body);
//   if (error) {
//     logger.error('Validation error', {
//       message: error.message,
//       stack: error.stack,
//     });
//     throw new ApiError(400, 'Validation error');
//   }

//   const uploadedImages = request.files?.images;
//   let imageUrls = [];

//   if (uploadedImages && uploadedImages.length >= 1) {
//     for (let file of uploadedImages) {
//       try {
//         const imageResponse = await uploadToImageKit(
//           file.path,
//           file.originalname,
//         );
//         if (imageResponse?.url) {
//           imageUrls.push(imageResponse.url);
//           await deleteLocalFile(file.path);
//         }
//       } catch (error: unknown) {
//         if (error instanceof Error) {
//           logger.error('Failed uploading images', {
//             message: error.message,
//             stack: error.stack,
//           });
//           throw new ApiError(500, 'Failed uploading images');
//         }
//       }
//     }
//   }

//   const {
//     title,
//     description,
//     category,
//     listingType,
//     price,
//     location: inputLocation = {},
//     quantity,
//     expiresAt,
//     images,
//   } = value;

//   const itemId = request.params.itemId;

//   const updateData: Partial<ListingDocument> = {
//     title,
//     description,
//     category,
//     listingType,
//     price,
//     quantity,
//     expiresAt,
//   };

//   if (Object.keys(inputLocation).length > 0) {
//     const existingItem = await Listing.findById(itemId);
//     if (!existingItem) {
//       throw new ApiError(404, 'Listing not found');
//     }
//     updateData.location = {
//       ...existingItem.location,
//       ...inputLocation,
//     };
//   }

//   if (imageUrls.length > 0) {
//     updateData.images = imageUrls;
//   } else if (images) {
//     updateData.images = images;
//   }

//   const updatedItem = await Listing.findByIdAndUpdate(itemId, updateData, {
//     new: true,
//   });

//   return response.status(200).json({
//     success: true,
//     data: updatedItem,
//     message: 'Listed item updated successfully',
//   });
// };

// const getAllListing = async (request: Request, response: Response) => {
//   const allListings = await Listing.find({ isDeleted: false }).select(
//     ' -updatedAt -__v',
//   );
//   if (!allListings || allListings.length === 0) {
//     logger.error('No listings found', {
//       message: 'No listings found',
//     });
//   }
//   return response.status(200).json({
//     success: true,
//     data: allListings,
//     message: 'Successfully listed all items',
//   });
// };

// const getListingById = async (request: Request, response: Response) => {
//   const itemId = request.params.itemId;
//   if (!itemId) {
//     logger.error('Item ID is required', {
//       message: 'Item ID is required',
//     });
//     throw new ApiError(400, 'Item ID is required');
//   }
//   const item = await Listing.findById(itemId).select(' -updatedAt -__v');
//   if (!item) {
//     logger.error('Listing not found', {
//       message: 'Listing not found',
//     });
//     throw new ApiError(404, 'Listing not found');
//   }
//   return response.status(200).json({
//     success: true,
//     data: item,
//     message: 'Successfully retrieved the listing',
//   });
// };

// const getListingByUser = async (request: Request, response: Response) => {
//   const userId = request.user?._id;

//   if (!userId) {
//     logger.error('Authentication error');
//   }
//   const itemByUser = await Listing.findById(userId).select(' -updatedAt -__v');
//   return response.status(201).json({
//     success: true,
//     data: itemByUser,
//     message: 'Successfully listed all items listed by user',
//   });
// };

// const deleteListing = async (request: Request, response: Response) => {
//   const listingId = request.params.itemId;

//   if (!listingId) {
//     logger.error('Not able to listed item');
//     throw new ApiError(404, 'Not able to find listed item');
//   }
//   const deleted = await Listing.findByIdAndUpdate(listingId, {
//     $set: {
//       isDeleted: true,
//     },
//   });

//   return response.json({
//     success: true,
//     message: 'Item deleted successfully',
//   });
// };

// const searchListing = async (request: Request, response: Response) => {
//   try {
//     const { query } = request;
//     const searchCriteria: FilterQuery<ListingDocument> = {};
//     let orConditions: FilterQuery<ListingDocument>[] = [];
//     const q = query.q;

//     if (q) {
//       const regex = { $regex: q, $options: 'i' };

//       orConditions = [
//         { title: regex },
//         { description: regex },
//         { category: regex },
//         { listingType: regex },
//         { 'location.address': regex },
//         { 'location.city': regex },
//         { 'location.state': regex },
//         { 'location.country': regex },
//       ];

//       const qNumber = Number(q);
//       if (!isNaN(qNumber)) {
//         orConditions.push({ price: qNumber });
//         orConditions.push({ quantity: qNumber });
//       }

//       searchCriteria.$or = orConditions;
//     } else {
//       if (query.title) {
//         searchCriteria.title = { $regex: query.title, $options: 'i' };
//       }
//       if (query.city) {
//         searchCriteria['location.city'] = { $regex: query.city, $options: 'i' };
//       }
//       if (query.country) {
//         searchCriteria['location.country'] = {
//           $regex: query.country,
//           $options: 'i',
//         };
//       }
//       if (query.state) {
//         searchCriteria['location.state'] = {
//           $regex: query.state,
//           $options: 'i',
//         };
//       }
//       if (query.listingType) {
//         searchCriteria.listingType = {
//           $regex: query.listingType,
//           $options: 'i',
//         };
//       }
//       if (query.category) {
//         searchCriteria.category = { $regex: query.category, $options: 'i' };
//       }
//     }

//     searchCriteria.isDeleted = false;

//     const listings = await Listing.find(searchCriteria).select(
//       '-updatedAt -__v',
//     );

//     if (!listings || listings.length === 0) {
//       return response.status(404).json({
//         success: false,
//         message: 'No listings found for the given criteria',
//       });
//     }

//     return response.status(200).json({
//       success: true,
//       data: listings,
//       message: 'Successfully found relevant listings for you',
//     });
//   } catch (error: unknown) {
//     if (error instanceof Error) {
//       logger.error('Error searching listings', {
//         message: error.message,
//         stack: error.stack,
//       });
//     }

//     return response.status(500).json({
//       success: false,
//       message: 'Server error while searching listings',
//     });
//   }
// };

// const getNearByListing = async (request: Request, response: Response) => {
//   const { location: inputLocation = {} } = request.body;
//   let finalLocation = inputLocation;

//   if (!inputLocation || Object.keys(inputLocation).length === 0) {
//     try {
//       const coordinates = await userGeoLocation(request, response);
//       finalLocation = await userReverseGeoCoding(coordinates);
//     } catch (error) {
//       logger.error('Error fetching user location');
//       throw new ApiError(404, 'Error fetching user location');
//     }
//   }

//   const query: FilterQuery<ListingDocument> = {};
//   if (finalLocation.city) {
//     query['location.city'] = {
//       $regex: `^${finalLocation.city}$`,
//       $options: 'i',
//     };
//   } else if (finalLocation.country) {
//     query['location.country'] = {
//       $regex: `^${finalLocation.country}$`,
//       $options: 'i',
//     };
//   } else if (finalLocation.state) {
//     query['location.state'] = {
//       $regex: `^${finalLocation.state}$`,
//       $options: 'i',
//     };
//   }

//   if (Object.keys(query).length === 0) {
//     logger.error('Error finding listing: no usable location provided');
//     throw new ApiError(400, 'No valid location data provided for search');
//   }

//   try {
//     const searchResult = await Listing.find(query).select('-__v -updatedAt');
//     return response.status(200).json({
//       success: true,
//       data: searchResult,
//       message: 'Relevant searches for you',
//     });
//   } catch (error: unknown) {
//     if (error instanceof Error) {
//       logger.error('Error querying listings', {
//         message: error.message,
//         stack: new Error().stack,
//       });
//       throw new ApiError(500, 'Error querying listings');
//     }
//   }
// };

// const approveListing = async (request: Request, response: Response) => {
//   const listingId = request.params.itemId;

//   const check = await Listing.findById(listingId);
//   if (!check) {
//     return response.json({
//       message: 'Sorry listing not found',
//     });
//   }
//   if (check!.isApproved === true) {
//     return response.status(201).json({
//       success: false,
//       message: 'Listing is already approved',
//     });
//   }
//   const approveListing = await Listing.findByIdAndUpdate(
//     listingId,
//     {
//       $set: {
//         isApproved: true,
//       },
//     },
//     { new: true },
//   );

//   if (!approveListing) {
//     logger.error('Listing not found');
//   }

//   return response.status(201).json({
//     success: true,
//     data: approveListing,
//     message: 'Listing approved by admin',
//   });
// };

// const rejectListing = async (request: Request, response: Response) => {
//   const listingId = request.params.itemId;

//   const listing = await Listing.findById(listingId);

//   if (!listing) {
//     return response.status(404).json({
//       success: false,
//       message: 'Listing not found',
//     });
//   }

//   if (listing.isApproved === true) {
//     return response.status(400).json({
//       success: false,
//       message: 'Listing is already approved and cannot be rejected',
//     });
//   }

//   listing.isDeleted = true;
//   await listing.save();

//   return response.status(200).json({
//     success: true,
//     data: listing,
//     message: 'Listing has been rejected',
//   });
// };

// export {
//   createListing,
//   updateListing,
//   getListingByUser,
//   getAllListing,
//   getListingById,
//   deleteListing,
//   searchListing,
//   getNearByListing,
//   approveListing,
//   rejectListing,
// };
