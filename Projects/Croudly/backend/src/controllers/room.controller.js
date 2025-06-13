import logger from '../utils/logger.util.js';
import ApiError from '../utils/apiError.util.js';
import ExperienceRoom from '../models/room.model.js';
import User from '../models/user.models.js';
import createExperienceRoomValidator from '../validation/createRoom.validation.js';
import Joi from 'joi';
import { v4 as uuidv4 } from 'uuid';
import { uploadToImageKit, deleteLocalFile } from '../utils/imageKit.util.js';

const createExperienceRoom = async (request, response) => {
  const { error, value } = createExperienceRoomValidator.validate(request.body);
  if (error) {
    logger.error('Validation error', {
      message: error.message,
      input: request.body,
      stack: new Error().stack,
    });
    throw new ApiError(400, 'Validation Error');
  }

  const { name } = value;
  const creatorUserId = request.user?._id;

  const creatorDetails = await User.findById(creatorUserId).select(
    '-updatedAt -isActive -createdAt -refreshToken -__v -role -password',
  );

  const newExperienceRoom = await ExperienceRoom.create({
    name,
    creator: creatorDetails,
  });

  if (!newExperienceRoom) {
    logger.error('Error creating experience room', {
      creatorUserId,
      name,
    });
    throw new ApiError(500, 'Error creating experience room');
  }

  return response.status(201).json({
    success: true,
    data: newExperienceRoom,
    message: 'Room created successfully',
  });
};

const getAllExperienceRoom = async (request, response) => {
  const { page = 1, limit = 10 } = request.query;
  const skip = (page - 1) * limit;

  const experienceRooms = await ExperienceRoom.find()
    .skip(skip)
    .limit(Number(limit))
    .populate('creator', ' -refreshToken -__v  -updatedAt');

  if (!experienceRooms || experienceRooms.length === 0) {
    logger.warn('No experience rooms found', {
      page,
      limit,
      skip,
    });
    return response.status(404).json({
      success: false,
      message: 'No experience rooms found',
    });
  }

  return response.status(200).json({
    success: true,
    data: experienceRooms,
    message: 'Experience rooms retrieved successfully',
  });
};

const getExperienceRoomById = async (request, response) => {
  const { roomId } = request.params;
  if (!roomId) {
    logger.error('Room ID is required', {
      stack: new Error().stack,
    });
    throw new ApiError(400, 'Room ID is required');
  }
  const experienceRoom = await ExperienceRoom.findById(roomId)
    .populate('creator', '-refreshToken -__v -updatedAt')
    .populate('members', '-refreshToken -__v -updatedAt');
  if (!experienceRoom) {
    logger.error('Experience room not found', {
      roomId,
      stack: new Error().stack,
    });
    throw new ApiError(404, 'Experience room not found');
  }
  return response.status(200).json({
    success: true,
    data: experienceRoom,
    message: 'Experience room retrieved successfully',
  });
};

const deleteExperienceRoom = async (request, response) => {
  const { roomId } = request.params;
  if (!roomId) {
    logger.error('Room ID is required', {
      stack: new Error().stack,
    });
    throw new ApiError(400, 'Room ID is required');
  }

  const experienceRoom = await ExperienceRoom.findByIdAndDelete(roomId);
  if (!experienceRoom) {
    logger.error('Experience room not found or already deleted', {
      roomId,
      stack: new Error().stack,
    });
    throw new ApiError(404, 'Experience room not found or already deleted');
  }

  return response.status(200).json({
    success: true,
    message: 'Experience room deleted successfully',
  });
};

const inviteUserToRoom = async (request, response) => {
  const inviteValidation = Joi.object({
    token: Joi.string().uuid().required().messages({
      'string.empty': 'Token is required',
      'string.guid': 'Token must be a valid UUID',
    }),

    room: Joi.string().length(24).hex().required().messages({
      'string.length': 'Room ID must be a 24-character ObjectId',
      'string.hex': 'Room ID must be a valid ObjectId',
      'string.empty': 'Room ID is required',
    }),

    invitedBy: Joi.string().length(24).hex().required().messages({
      'string.length': 'InvitedBy must be a 24-character ObjectId',
      'string.hex': 'InvitedBy must be a valid ObjectId',
      'string.empty': 'InvitedBy is required',
    }),

    used: Joi.boolean().optional(),

    expiresAt: Joi.date().greater('now').required().messages({
      'date.base': 'ExpiresAt must be a valid date',
      'date.greater': 'ExpiresAt must be in the future',
    }),
  });

  const { error, value } = inviteValidation.validate(request.body);
  if (error) {
    logger.error('Validation error', {
      message: error.message,
      stack: new Error().stack,
    });
    throw new ApiError(404, 'Validation error');
  }
  const token = uuidv4();
  const { roomId, invitedByUserId, expiresAt } = value;

  const room = await ExperienceRoom.findById(roomId);
  if (!room) {
    logger.error('No room found');
    throw new ApiError('No room found');
    response.json({
      success: false,
      message: 'No room found',
    });
  }
  room.invites = room.invites || [];
  room.invites.push({
    token,
    invitedBy: invitedByUserId,
    used: false,
    expiresAt,
  });
  await room.save();

  const inviteLink = `https://croudly/invite/experience-room?token=${token}`;

  return response(201).json({
    success: true,
    data: inviteLink,
    message: 'Invite link created successfully',
  });
};

const joinExperienceRoom = async (request, response) => {
  const { token } = request.params;
  const userId = request.user?._id;

  try {
    const room = await ExperienceRoom.findOne({
      invites: {
        $elemMatch: {
          token,
          used: false,
          expiresAt: { $gt: Date.now() },
        },
      },
    });

    if (!room) {
      return response.status(201).json({
        success: false,
        message: 'No room found',
      });
    }
    const invite = room.invites.find((inv) => inv.token === token);

    const alreadyJoined = room.members.some((m) => m.user.toString === userId);
    if (alreadyJoined) {
      return response.json({
        success: false,
        message: 'User already room member',
      });
    }

    room.members.push({ user: userId, joinedAt: new Date.now() });

    invite.used = true;
    await room.save();

    return response.status(201).json({
      sucess: true,
      message: 'User joined room successfully',
    });
  } catch (error) {
    logger.error('Server error', {
      message: error.message,
      stack: error.stack,
    });
    throw new ApiError(500, 'Server error');
  }
};

const removeUserFromRoom = async (request, response) => {
  const { roomId } = request.params;
  const { removeUserId } = request.body;
  const currentUserId = request.user?._id;

  const room = await ExperienceRoom.findById(roomId);
  if (!room) {
    return response.status(404).json({
      success: false,
      message: 'Room not found',
    });
  }

  const isCurrentUserHost =
    room.creator.toString() === currentUserId.toString();

  const isCurrentUserCoHost = room.moderators.some(
    (coHostId) => (coHostId) => coHostId.toString === currentUserId.toString(),
  );
  const isCurrentUserModerator = room.moderators.some(
    (modId) => modId.toString() === currentUserId.toString(),
  );

  const isTargetUserModerator = room.moderators.some(
    (modId) => modId.toString() === removeUserId.toString(),
  );

  if (isTargetUserModerator) {
    if (!isCurrentUserHost && !isCurrentUserCoHost) {
      return response.status(403).json({
        success: false,
        message: 'Only the host or co-host can remove a moderator',
      });
    }
  } else {
    if (!isCurrentUserHost && !isCurrentUserModerator) {
      return response.status(403).json({
        success: false,
        message: 'Only host or moderator can remove members',
      });
    }
  }

  room.members = room.members.filter(
    (m) => m.user.toString() !== removeUserId.toString(),
  );
  room.invitedUsers = room.invitedUsers.filter(
    (id) => id.toString() !== removeUserId.toString(),
  );
  room.moderators = room.moderators.filter(
    (id) => id.toString() !== removeUserId.toString(),
  );

  await room.save();

  return response.status(200).json({
    success: true,
    message: 'User removed successfully from the room',
  });
};

const leaveExperienceRoom = async (request, response) => {
  const { roomId } = request.params;
  const userId = request.user?._id;

  const room = await ExperienceRoom.findById(roomId);

  const user = room.members.find(
    (member) => member.user.toString() === userId.toString,
  );

  if (!user) {
    return response.json({
      success: false,
      message: 'User is not in room',
    });
  }

  room.members = room.members.filter(
    (member) => member.user.toString() !== userId.toString(),
  );

  await room.save();

  return response.json({
    success: true,
    message: 'User leaved remove successfully',
  });
};

const sendMessageToRoom = async (request, response) => {
  const senderId = request.user?._id;
  const { roomId } = request.params;
  const { text } = request.body;

  const room = await ExperienceRoom.findById(roomId);

  if (!room) {
    return response.status(201).json({
      success: false,
      message: 'Room does not exist',
    });
  }

  const isMember = room.members.find(
    (member) => member.user.toString() === senderId.toString(),
  );

  const isUserBlocked = room.blockedUsers.includes(senderId.toString());

  if (!isMember) {
    return response.status(201).json({
      success: false,
      message: 'User is not member of this room',
    });
  }
  if (isUserBlocked) {
    return response.status(201).json({
      success: false,
      message: 'User is blocked cannot send message',
    });
  }
  const message = room.messages.push({
    sender: senderId,
    text,
    sentAt: new Date(),
  });

  await room.save();

  return response.status(201).json({
    success: true,
    data: message,
    message: 'Message sent successfully',
  });
};

//Voice recording
const uploadRoomMedia = async (request, response) => {
  const mediaValidation = Joi.object({
    type: Joi.string()
      .valid('image', 'video', 'voice', 'link')
      .required()
      .messages({
        'any.only': 'Type must be one of: image, video, voice, or link',
        'string.empty': 'Type is required',
      }),
    text: Joi.string().optional(),
  });

  const { error, value } = mediaValidation.validate(request.body);
  if (error) {
    logger.error('Validation error', {
      message: error.message,
      stack: error.stack,
    });
    throw new ApiError(400, error.message);
  }

  const { roomId } = request.params;
  const userId = request.user?._id;
  const { type, text = '' } = value;

  const room = await ExperienceRoom.findById(roomId);
  if (!room) {
    throw new ApiError(404, 'Room not found');
  }

  const mediaUrls = [];

  if (request.files && request.files.length > 0) {
    for (const file of request.files) {
      try {
        const uploaded = await uploadToImageKit(file, file.originalname);
        if (uploaded?.url) {
          mediaUrls.push({
            type,
            url: uploaded.url,
          });
        }
        deleteLocalFile(file);
      } catch (err) {
        logger.error('Upload error', { message: err.message });
      }
    }
  }

  if (mediaUrls.length === 0 && !text.trim()) {
    return response.status(400).json({
      success: false,
      message: 'Either text or media is required',
    });
  }

  room.messages.push({
    sender: userId,
    text,
    media: mediaUrls.length === 1 ? mediaUrls[0] : mediaUrls,
    sentAt: new Date(),
  });

  await room.save();

  return response.status(201).json({
    success: true,
    message: 'Media uploaded and message sent',
  });
};

const expireOldRoom = async (request, response) => {};

const getRoomMembers = async (request, response) => {};

const getRoomMessages = async (request, response) => {};

const deleteRoomMessages = async (request, response) => {};

const deleteMessageFromRoom = async (request, response) => {};

const getRoomMedia = async (request, response) => {};

const deleteRoomMedia = async (request, response) => {};

const toogleRoomPrivacy = async (request, response) => {};

const verifyRoomAccess = async (request, response) => {};

const isUserRoomAdmin = async (request, response) => {};

const generateVideoToken = async (request, response) => {};

const startLiveSessionInRoom = async (request, response) => {};

const endLiveSessionInRoom = async (request, response) => {};

const getLiveRoomStatus = async (request, response) => {};

const blockUserInRoom = async (request, response) => {};

const muteUserInRoom = async (request, response) => {};

const assignRoomModerator = async (request, response) => {};

const removeModeratorFromRoom = async (request, response) => {};

export {
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
};
