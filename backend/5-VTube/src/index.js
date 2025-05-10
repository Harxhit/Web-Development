import app from './app.js';
import dotenv from 'dotenv';
import connectToDataBase from './db/index.js';

dotenv.config({
  path: './.env',
});

const port = process.env.PORT || 8001;

connectToDataBase()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running at http://127.0.0.1:${port}`);
    });
  })
  .catch((error) => {
    console.log('MongoDB connection error', error);
  });
