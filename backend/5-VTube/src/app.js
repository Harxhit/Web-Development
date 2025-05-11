import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import healthCheckRoutes from './controllers/healthcheck.controllers.js';
import registerUser from './controllers/user.controllers.js';
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  }),
);

//Routes
app.use('/api/v1/healthcheck', healthCheckRoutes);
app.use('/api/v1/user', registerUser);

//Common Middlewares
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(express.static('public'));
app.use(cookieParser());
export default app;
