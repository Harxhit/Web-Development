import asyncHandler from '../utils/asyncHandler.util.js';
import verifyJwt from '../middlewares/authentication.middleware.js';
import {
  createListing,
  updateListing,
} from '../controllers/listing.controller.js';
import upload from '../middlewares/multer.middleware.js';
import { Router } from 'express';

const listingRouter = Router();

listingRouter
  .route('/create-listing')
  .post(
    verifyJwt,
    upload.fields([{ name: 'images', maxCount: 10 }]),
    asyncHandler(createListing),
  );

listingRouter
  .route('/update/:itemId')
  .patch(
    verifyJwt,
    upload.fields([{ name: 'images', maxCount: 10 }]),
    asyncHandler(updateListing),
  );

export default listingRouter;
