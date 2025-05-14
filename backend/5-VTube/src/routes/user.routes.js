import { Router } from 'express';
import {
  registerUser,
  logoutUser,
  loginUser,
  changePassword,
  updateUserInformation,
  currentUser,
  changeAvatar,
} from '../controllers/user.controllers.js';
import upload from '../middlewares/multer.middlewares.js';
import verifyJwt from '../middlewares/auth.middlewares.js';

const router = Router();

router.route('/register').post(
  upload.fields([
    {
      name: 'avatar',
      maxCount: 1,
    },
    {
      name: 'coverimage',
      maxCount: 1,
    },
  ]),
  registerUser,
);

//Secured routes
router.post('/login', loginUser);
router.route('/logout').post(verifyJwt, logoutUser);
router.route('/change-password').post(verifyJwt, changePassword);
router.route('/update-info').patch(verifyJwt, updateUserInformation);
router.route('/current').get(verifyJwt, currentUser);
router
  .route('/change-avatar')
  .patch(verifyJwt, upload.single('avatar'), changeAvatar);

export default router;
