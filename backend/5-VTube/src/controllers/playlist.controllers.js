import asyncHandler from '../utils/asyncHandler.js';
import ApiError from '../utils/apiError.js';
import ApiResponse from '../utils/apiResponse.js';
import Playlist from '../models/playlist.models.js';

const createPlaylist = asyncHandler(async (request, response) => {
  const { title, description, isPublic } = request.body;

  if (!title) {
    throw new ApiError(400, 'Title required');
  }
  if (!description) {
    throw new ApiError(400, 'Desciption required');
  }
  const playlist = await Playlist.create({
    userId: request.user._id,
    title,
    description,
    isPublic,
  });
  if (!playlist) {
    throw new ApiError(400, 'Playlist not created');
  }
  response.status(201).json({
    status: 'success',
    message: 'Playlist created successfully',
    data: {
      playlist,
    },
  });
});

const getPlaylistById = asyncHandler(async (request, response) => {
  const playlistId = request.params.playListId;

  const getPlaylistById =
    await Playlist.findById(playlistId).populate('videos');
  if (!getPlaylistById) {
    throw new ApiError(400, 'Playlist not found');
  }
  return response
    .status(201)
    .json(
      new ApiResponse(
        201,
        { playlist: getPlaylistById },
        'Playlist fetched succesfully',
      ),
    );
});

const getPlaylistByOwner = asyncHandler(async (request, response) => {
  const userId = request.user._id;

  const playlist = await Playlist.findOne({ userId }).populate('videos');
  if (!playlist) {
    throw new ApiError(404, 'Playlist not found');
  }

  return response.status(200).json({
    status: 'success',
    data: {
      playlist,
    },
  });
});

const updatePlaylist = asyncHandler(async (request, response) => {
  const { title, description, isPublic, playListId } = request.body;

  if (!title) {
    throw new ApiError(400, 'Title not found');
  }
  if (!description) {
    throw new ApiError(400, 'Description not found');
  }

  const updatedPlaylist = await Playlist.findByIdAndUpdate(playListId, {
    title,
    description,
    isPublic,
  });
  if (!updatedPlaylist) {
    throw new ApiError(400, 'Playlist not updated');
  }
  return response.status(201).json({
    status: 'success',
    message: 'Playlist updated successfully',
    data: {
      playlist: updatedPlaylist,
    },
  });
});

const removeVideoFromPlayList = asyncHandler(async (request, response) => {
  const { playlistId, videoId } = request.body;

  const removeVideo = Playlist.findByIdAndUpdate(
    playlistId,
    {
      $pull: {
        videos: videoId,
      },
    },
    { new: true },
  );
  if (!removeVideo) {
    throw new ApiError(404, 'Not able to remove video from playlist');
  }
  return response.status(201).json({
    status: 'success',
    message: 'Video removed successfully',
    data: {
      playlist: removeVideo,
    },
  });
});

const addVideoInPlaylist = asyncHandler(async (req, res) => {
  const playlistId = req.params.playlistId;
  const { videoId } = req.body;

  if (!videoId) {
    throw new ApiError(400, 'Video ID is required');
  }

  const playlist = await Playlist.findByIdAndUpdate(
    playlistId,
    { $push: { videos: videoId } },
    { new: true },
  );

  if (!playlist) {
    throw new ApiError(404, 'Playlist not found');
  }

  res.status(200).json({
    status: 'success',
    message: 'Video added to playlist successfully',
    data: { playlist },
  });
});

const getAllPlaylist = asyncHandler(async (request, response) => {
  const allPlaylists = await Playlist.find({}).populate('videos');

  // Mongoose returns [] if no documents are found — not null
  if (!allPlaylists || allPlaylists.length === 0) {
    throw new ApiError(404, 'No playlists found');
  }

  return response.status(200).json({
    status: 'success',
    message: 'All playlists fetched successfully',
    data: {
      playlists: allPlaylists,
    },
  });
});

const deletePlaylist = asyncHandler(async (request, response) => {
  const { playlistId } = request.body;

  const deletePlaylist = await Playlist.findByIdAndDelete(playlistId);
  if (!deletePlaylist) {
    throw new ApiError(404, 'Playlist not found');
  }
  return response.status(201).json({
    status: 'success',
    message: 'Playlist deleted successfully',
    data: {
      playlist: deletePlaylist,
    },
  });
});

const setPlaylistPrivacy = asyncHandler(async (request, response) => {
  const { playlistId, isPublic } = request.body;

  const setPrivacy = await Playlist.findByIdAndUpdate(
    playlistId,
    {
      isPublic,
    },
    { new: true },
  );
  if (!setPrivacy) {
    throw new ApiError(404, 'Playlist not found');
  }
  return response.status(201).json({
    status: 'success',
    message: 'Playlist privacy updated successfully',
    data: {
      playlist: setPrivacy,
    },
  });
});

export {
  createPlaylist,
  getPlaylistById,
  getPlaylistByOwner,
  updatePlaylist,
  removeVideoFromPlayList,
  addVideoInPlaylist,
  getAllPlaylist,
  deletePlaylist,
  setPlaylistPrivacy,
};
