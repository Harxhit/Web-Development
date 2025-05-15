import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import healthCheckRoutes from './controllers/healthcheck.controllers.js';
import router from './routes/user.routes.js';
import videoRouter from './routes/video.routes.js';
import commentRouter from './routes/comment.routes.js';
import likeRouter from './routes/like.routes.js';
import notificationRouter from './routes/notification.routes.js';
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

//Notification
app.use('/api/v1/notification', notificationRouter);
export default app;
