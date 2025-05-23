import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables first!
dotenv.config();

const connectToDataBase = async () => {
  try {
    const connectionString = process.env.MONGO_DB_URL;

    const connection = await mongoose.connect(connectionString, {
      dbName: process.env.DATABASE_NAME,
    });

    console.log(`\nMongoDB connected! DB Host: ${connection.connection.host}`);
  } catch (error) {
    console.error('MongoDB connection error', error);
    process.exit(1);
  }
};

export default connectToDataBase;
