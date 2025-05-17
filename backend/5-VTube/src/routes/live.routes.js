import { Router } from 'express';
import {
  createLive,
  endLive,
  updateLive,
  deleteLive,
  updateLiveStatus,
  incrementViwerCount,
} from '../controllers/live.controllers.js';
import verifyJwt from '../middlewares/auth.middlewares.js';

const liveRouter = Router();

liveRouter.route('/create').post(verifyJwt, createLive);

liveRouter.route('/delete').delete(verifyJwt, createLive);

liveRouter.route('/:liveId/viewer').patch(verifyJwt, incrementViwerCount);
liveRouter.route('/:liveId/end').patch(verifyJwt, endLive);
liveRouter.route('/:liveId/update').patch(verifyJwt, updateLive);
liveRouter.route('/:liveId').patch(verifyJwt, updateLiveStatus);

liveRouter.route('/:liveId/delete').delete(verifyJwt, deleteLive);

export default liveRouter;
