import express from 'express';
import {
  uploadVideo,
  getVideoById,
  updateVideo,
  incrementVideoCount,
  searchVideos,
  deleteVideo,
  getAllVideo,
} from '../controllers/video.controllers.js';
import verifyJwt from '../middlewares/auth.middlewares.js';
import upload from '../middlewares/multer.middlewares.js';

const videoRouter = express.Router();

// Protected route for video upload, requiring JWT authentication
videoRouter.route('/upload').post(
  verifyJwt,
  upload.fields([
    {
      name: 'videoFile',
      maxCount: 1,
    },
    {
      name: 'thumbnail',
      maxCount: 1,
    },
  ]),
  uploadVideo,
);
videoRouter.route('/:id').get(verifyJwt, getVideoById); //Get video by id
videoRouter.route('/').get(verifyJwt, searchVideos); //Search videos through title or descriptions
videoRouter.route('/all').get(verifyJwt, getAllVideo); //Get all videos
videoRouter.route('/:id/update').patch(verifyJwt, updateVideo); //Update video
videoRouter.route('/:id/views').patch(verifyJwt, incrementVideoCount); //Increment view count
videoRouter.route('./:id').delete(verifyJwt, deleteVideo); //Delete a video
export default videoRouter;
