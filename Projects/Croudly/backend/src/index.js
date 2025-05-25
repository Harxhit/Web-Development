import connectToDataBase from '../src/database/index.js';
import app from '../src/app.js';
import dotenv from 'dotenv';
import logger from './utils/logger.util.js';
dotenv.config();

const port = process.env.PORT || 8001;

connectToDataBase()
  .then(() => {
    app.listen(port, () => {
      logger.info(`Server is running at http://127.0.0.1:${port}`);
    });
  })
  .catch((error) => {
    logger.info('MongoDB connection error', error);
  });
