import { Router } from 'express';
import {
  createAdPlacement,
  deleteAdPlacement,
  updateAdPlacement,
} from '../controllers/adPlacement.controllers.js';
import verifyJwt from '../middlewares/auth.middlewares.js';
import isAdmin from '../middlewares/isAdmin.middlewares.js';

const adplacementRouter = Router();

adplacementRouter.post('/', verifyJwt, isAdmin, createAdPlacement);
adplacementRouter.delete('/:id', verifyJwt, isAdmin, deleteAdPlacement);
adplacementRouter.patch('/:id', verifyJwt, isAdmin, updateAdPlacement);

export default adplacementRouter;
