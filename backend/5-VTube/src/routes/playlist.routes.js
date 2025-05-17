import { Router } from 'express';
import {
  createPlaylist,
  getPlaylistById,
  getPlaylistByOwner,
  updatePlaylist,
  removeVideoFromPlayList,
  addVideoInPlaylist,
  getAllPlaylist,
  deletePlaylist,
  setPlaylistPrivacy,
} from '../controllers/playlist.controllers.js';
import verifyJwt from '../middlewares/auth.middlewares.js';

const playlistRouter = Router();

playlistRouter.route('/all').get(getAllPlaylist);
playlistRouter.route('/owner').get(verifyJwt, getPlaylistByOwner);
playlistRouter.route('/:playListId').get(getPlaylistById);

playlistRouter.route('/update').patch(verifyJwt, updatePlaylist);
playlistRouter.route('/privacy').patch(verifyJwt, setPlaylistPrivacy);

playlistRouter.route('/remove').post(verifyJwt, removeVideoFromPlayList);
playlistRouter.route('/create').post(verifyJwt, createPlaylist);
playlistRouter.route('/:playlistId/add').post(verifyJwt, addVideoInPlaylist);

playlistRouter.route('/delete').delete(deletePlaylist);

export default playlistRouter;
