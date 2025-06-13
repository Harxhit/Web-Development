import express from 'express';
import errorHandler from './middlewares/error.middleware.js';
import userRouter from './routes/user.route.js';
import listingRouter from './routes/listing.routes.js';
import experienceRoomRouter from './routes/room.route.js';
import cookie from 'cookie-parser';
const app = express();

app.use(express.json());
app.use(errorHandler);
app.use(express.urlencoded({ extended: true }));
app.use(cookie());

//User route
app.use('/api/v1/users', userRouter);

//Listing route
app.use('/api/v1/users/listing', listingRouter);

//Room route
app.use('/api/v1/users/room', experienceRoomRouter);
export default app;
