import express from 'express';
import {
  addWatchHistory,
  getWatchHistoryByUser,
  getWatchHistoryByVideo,
  updateWatchProgress,
  deleteWatchHistoryByUser,
  deleteWatchHistoryByVideo,
  getRecentWatchHistory,
  clearWatchHistory,
  getWatchProgressForVideo,
  hasUserWatchedVideo,
} from '../controllers/watchHistory.controllers.js';

import verifyJwt from '../middlewares/auth.middlewares.js';

const watchHistoryRouter = express.Router();

watchHistoryRouter.route('/').post(verifyJwt, addWatchHistory);

watchHistoryRouter.route('/user').get(verifyJwt, getWatchHistoryByUser);

watchHistoryRouter
  .route('/video/:videoId')
  .get(verifyJwt, getWatchHistoryByVideo);

watchHistoryRouter.route('/progress').patch(verifyJwt, updateWatchProgress);

watchHistoryRouter.route('/user').delete(verifyJwt, deleteWatchHistoryByUser);

watchHistoryRouter
  .route('/video/:videoId')
  .delete(verifyJwt, deleteWatchHistoryByVideo);

watchHistoryRouter.route('/user/recent').get(verifyJwt, getRecentWatchHistory);

watchHistoryRouter.route('/clear').delete(verifyJwt, clearWatchHistory);

watchHistoryRouter
  .route('/progress/:videoId')
  .get(verifyJwt, getWatchProgressForVideo);

watchHistoryRouter
  .route('/watched/:videoId')
  .get(verifyJwt, hasUserWatchedVideo);

export default watchHistoryRouter;
