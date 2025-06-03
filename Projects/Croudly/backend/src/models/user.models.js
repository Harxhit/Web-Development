import { Schema } from 'mongoose';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: [true, 'Username is required.'],
    },
    firstName: {
      type: String,
      trim: true,
      required: [true, 'First name is required.'],
    },
    lastName: {
      type: String,
      trim: true,
      required: [true, 'Last name is required.'],
    },
    email: {
      type: String,
      trim: true,
      required: [true, 'Email is required.'],
      unique: true,
    },
    profileImage: {
      type: String,
      default: '',
    },
    password: {
      type: String,
      required: [true, 'Password is required.'],
    },
    age: {
      type: Number,
    },
    phoneNumber: {
      type: String,
      required: [true, 'Phone number is required'],
      unique: true,
    },
    role: {
      type: String,
      enum: ['User', 'Admin'],
      default: 'User',
    },
    refreshToken: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

// Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Method to compare password
userSchema.methods.isPasswordCorrect = async function (password) {
  return bcrypt.compare(password, this.password);
};

//Generate access token
userSchema.methods.generateAccessToken = async function () {
  const token = jwt.sign(
    {
      _id: this._id,
    },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRES },
  );
  return token;
};

//Genrate refresh token
userSchema.methods.generateRefreshToken = async function () {
  const token = jwt.sign(
    {
      _id: this._id,
      username: this.username,
    },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRES },
  );
  return token;
};

const User = mongoose.model('User', userSchema);
export default User;
