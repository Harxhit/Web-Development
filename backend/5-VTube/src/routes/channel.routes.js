import { Router } from 'express';
import {
  createChannel,
  getChannelByOwner,
  updateChannel,
  deleteChannel,
} from '../controllers/channel.controllers.js';

import verifyJwt from '../middlewares/auth.middlewares.js';
import upload from '../middlewares/multer.middlewares.js';

const channelRouter = Router();

channelRouter.post('/', verifyJwt, upload.single('bannerUrl'), createChannel);

channelRouter.get('/:ownerId', getChannelByOwner);

channelRouter.patch('/', upload.single('bannerUrl'), verifyJwt, updateChannel);

channelRouter.delete('/', verifyJwt, deleteChannel);

export default channelRouter;
