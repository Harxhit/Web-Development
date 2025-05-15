import { Router } from 'express';
import {
  createNotification,
  getUserNotification,
  markAllAsRead,
  markAsRead,
  deleteNotification,
} from '../controllers/notification.controllers.js';
import verifyJwt from '../middlewares/auth.middlewares.js';

const notificationRouter = Router();
notificationRouter.post('/', verifyJwt, createNotification);
notificationRouter.get('/', verifyJwt, getUserNotification);
notificationRouter.patch('/:notificationId', verifyJwt, markAsRead);
notificationRouter.patch('/', verifyJwt, markAllAsRead);
notificationRouter.delete('/:notificationId', verifyJwt, deleteNotification);

export default notificationRouter;
