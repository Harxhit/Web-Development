import asyncHanlder from '../utils/asyncHandler.util.js';
import {
  createExperienceRoom,
  removeModeratorFromRoom,
  removeUserFromRoom,
  muteUserInRoom,
  blockUserInRoom,
  getLiveRoomStatus,
  endLiveSessionInRoom,
  assignRoomModerator,
  startLiveSessionInRoom,
  getRoomMembers,
  generateVideoToken,
  isUserRoomAdmin,
  verifyRoomAccess,
  toogleRoomPrivacy,
  deleteExperienceRoom,
  deleteRoomMedia,
  getRoomMedia,
  uploadRoomMedia,
  deleteMessageFromRoom,
  deleteRoomMessages,
  sendMessageToRoom,
  getRoomMessages,
  joinExperienceRoom,
  leaveExperienceRoom,
  inviteUserToRoom,
  getAllExperienceRoom,
  getExperienceRoomById,
  expireOldRoom,
} from '../controllers/room.controller.js';
import { Router } from 'express';
import verifyJwt from '../middlewares/authentication.middleware.js';
import upload from '../middlewares/multer.middleware.js';

const experienceRoomRouter = Router();

//Create room
experienceRoomRouter
  .route('/create')
  .post(verifyJwt, asyncHanlder(createExperienceRoom));

//Send message to room
experienceRoomRouter
  .route('/message/:roomId')
  .post(verifyJwt, asyncHanlder(sendMessageToRoom));

//Upload media
experienceRoomRouter
  .route('/message/media/:roomId')
  .post(verifyJwt, upload.array('media'), asyncHanlder(uploadRoomMedia));

export default experienceRoomRouter;
