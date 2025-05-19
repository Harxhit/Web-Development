import { Router } from 'express';
import createSuperchat from '../controllers/superchat.controllers.js';
import verifyJwt from '../middlewares/auth.middlewares.js';

const superchatRouter = Router();

superchatRouter.route('/:streamId/create').post(verifyJwt, createSuperchat);

export default superchatRouter;
