import asyncHandler from '../utils/asyncHandler.util.js';
import verifyJwt from '../middlewares/authentication.middleware.js';
import { createListing } from '../controllers/listing.controller.js';
import upload from '../middlewares/multer.middleware.js';
import { Router } from 'express';

const listingRouter = Router();

listingRouter
  .route('/create-listing')
  .post(verifyJwt, upload.single('images'), asyncHandler(createListing));

export default listingRouter;
