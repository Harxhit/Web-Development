import express from 'express';
import errorHandler from './middlewares/error.middleware.js';
import userRouter from './routes/user.route.js';
const app = express();

app.use(express.json());
app.use(errorHandler);
app.use(express.urlencoded({ extended: true }));

//User route
app.use('/api/v1/users', userRouter);

export default app;
