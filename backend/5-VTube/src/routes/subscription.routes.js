import { Router } from 'express';
import {
  getChannelSubscriberId,
  updateNotificaitonPrefrences,
  isSubscribed,
  getScribscriptions,
  getSubscribeCount,
  unSubscribeChannel,
  subscribeChannel,
} from '../controllers/subscription.controllers.js';
import verifyJwt from '../middlewares/auth.middlewares.js';

const subscriptionRouter = Router();

//Subscribe to a channel
subscriptionRouter.post('/subscribe', verifyJwt, subscribeChannel);

// Unsubscribe from a channel
subscriptionRouter.post('/unsubscribe', verifyJwt, unSubscribeChannel);

// Get subscribe count for a channel
subscriptionRouter.post('/count', verifyJwt, getSubscribeCount);

// Get subscriptions of logged-in user
subscriptionRouter.get('/subscriptions', verifyJwt, getScribscriptions);

// Check if logged-in user is subscribed to a channel
subscriptionRouter.post('/issubscribed', verifyJwt, isSubscribed);

// Update notification preferences for a subscription
subscriptionRouter.patch(
  '/notification',
  verifyJwt,
  updateNotificaitonPrefrences,
);

// Get subscriber IDs for a channel
subscriptionRouter.post('/subscribers', getChannelSubscriberId);

export default subscriptionRouter;
