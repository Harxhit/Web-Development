import { Router } from 'express';
import {
  getActiveSubscription,
  deleteSubscription,
  getAllSubscription,
  getExpiringSubscription,
  getSubscriptionByUserId,
  createSubscription,
  renewSubscription,
  cancelSubscription,
  updateSubscription,
} from '../controllers/premium.controllers.js';
import verifyJwt from '../middlewares/auth.middlewares.js';

const premiumRouter = Router();

premiumRouter.route('/create').post(verifyJwt, createSubscription);

premiumRouter
  .route('/:subscriptionId/update')
  .patch(verifyJwt, updateSubscription);
premiumRouter
  .route('/:subscriptionId/renew')
  .patch(verifyJwt, renewSubscription);
premiumRouter
  .route('/:subscriptionId/cancel')
  .patch(verifyJwt, cancelSubscription);

premiumRouter.route('/active').get(verifyJwt, getActiveSubscription);
premiumRouter.route('/all').get(verifyJwt, getAllSubscription);
premiumRouter.route('/expiring').get(verifyJwt, getExpiringSubscription);
premiumRouter.route('/:userId').get(verifyJwt, getSubscriptionByUserId);

premiumRouter
  .route('/:subscriptionId/delete')
  .delete(verifyJwt, deleteSubscription);
export default premiumRouter;
