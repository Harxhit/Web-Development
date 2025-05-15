import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import healthCheckRoutes from './controllers/healthcheck.controllers.js';
import router from './routes/user.routes.js';
import videoRouter from './routes/video.routes.js';
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

// Routes
app.use('/api/v1/healthcheck', healthCheckRoutes);
app.use('/api/v1/user', router);

//Video routes
app.use('/api/v1/video', videoRouter);

export default app;
