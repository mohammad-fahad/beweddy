import express from 'express';
import {
  activeUser,
  getCouple,
  getUserProfile,
  googleSignIn,
  googleSignUp,
  login,
  register,
  requestResetPassword,
  resetPassword,
  updateUserProfile,
} from '../controllers/userControllers.js';
import { updateVenue } from '../controllers/venueControllers.js';
import { protect } from '../middlewares/auth.js';

const router = express.Router();

router.post('/register', register);
router.post('/active', activeUser);
router.post('/login', login);
router.post('/googleSignUp', googleSignUp);
router.post('/googleSignIn', googleSignIn);
router.post('/request-reset-password', requestResetPassword);
router.post('/reset-password', resetPassword);
router.route('/profile').get(protect, getUserProfile);
router.route('/:username').get(getCouple);
router.route('/updateUserProfile').put(protect, updateUserProfile);
router.route('/updateVenue').put(protect, updateVenue);

export default router;
