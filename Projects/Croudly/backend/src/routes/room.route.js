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

const experienceRoomRouter = Router();

export default experienceRoomRouter;
