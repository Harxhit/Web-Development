import connectToDataBase from '../src/database/index.js';
import app from '../src/app.js';
import dotenv from 'dotenv';
dotenv.config();

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
