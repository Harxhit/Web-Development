import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import healthCheckRoutes from './controllers/healthcheck.controllers.js';
import router from './routes/user.routes.js';
import videoRouter from './routes/video.routes.js';
import commentRouter from './routes/comment.routes.js';
import likeRouter from './routes/like.routes.js';
import notificationRouter from './routes/notification.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';
import channelRouter from './routes/channel.routes.js';
import playlistRouter from './routes/playlist.routes.js';
import liveRouter from './routes/live.routes.js';
import superchatRouter from './routes/superchat.routes.js';
import videoadRouter from './routes/videAds.routes.js';
import adplacementRouter from './routes/addPlacement.routes.js';
import premiumRouter from './routes/premium.routes.js';
import watchHistoryRouter from './routes/watchHistory.routes.js';

const app = express();
app.use(express.urlencoded({ extended: true }));
// Middleware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  }),
);
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(express.static('public'));
app.use(cookieParser());

//Health check routes
app.use('/api/v1/healthcheck', healthCheckRoutes);

//User routes
app.use('/api/v1/user', router);

//Video routes
app.use('/api/v1/video', videoRouter);

//Comment routes
app.use('/api/v1', commentRouter);

//Like routes
app.use('/api/v1/likes', likeRouter);

//Notification routes
app.use('/api/v1/notification', notificationRouter);

//Subscription routes
app.use('/api/v1/subscription', subscriptionRouter);

//Channel routes
app.use('/api/v1/channel', channelRouter);

//PlayList routes
app.use('/api/v1/playlist', playlistRouter);

//Live route
app.use('/api/v1/live', liveRouter);

//Superchat route
app.use('/api/v1/superchat', superchatRouter);

//Video ad router
app.use('/api/v1/video/ad', videoadRouter);

//Ad placement router
app.use('/api/v1/video/adplacement', adplacementRouter);

//Vtube premimum
app.use('/api/v1/user/premimum', premiumRouter);

//Watch history
app.use('/api/v1/user/history', watchHistoryRouter);

export default app;
