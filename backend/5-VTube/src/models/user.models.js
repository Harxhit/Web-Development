import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      trim: true,
      index: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    avatar: {
      type: String,
      required: true, 
      default: '',
    },
    coverImage: {
      type: String,
      default: '',
    },
    watchHistory: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Video',
      },
    ],
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    refreshToken: {
      type: String,
      default: null,
    },
  },
  { timestamps: true },
);

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.pre('save', async function (next) {
  if (!this.modified('password')) return next();
  this.password = bcrypt.hash(this.password);
  next();
});

userSchema.methods.RefreshToken = function () {
  return jwt.sign(
    {
      _id: this.id,
    },
    process.env.SECRET_TEXT_REFRESHTOKEN,
    { expiresIn: process.env.REFRESHTOKEN_EXPIRE },
  );
};

userSchema.methods.AccessToken = function () {
  return jwt.sign(
    {
      _id: this.id,
      email: this.email,
      username: this.username,
    },
    process.env.SECRET_TEXT_ACCESSTOKEN,
    { expiresIn: process.env.ACCESSTOKEN_EXPIRE },
  );
};

const User = mongoose.model('User', userSchema);
export default User;
