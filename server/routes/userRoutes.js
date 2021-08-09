import express from 'express';
import {
  activeUser,
  getUserProfile,
  login,
  register,
  requestResetPassword,
  resetPassword,
} from '../controllers/userControllers.js';
import { protect } from '../middlewares/auth.js';

const router = express.Router();

router.post('/register', register);
router.post('/active', activeUser);
router.post('/login', login);
router.post('/requestResetPassword', requestResetPassword);
router.post('/resetPassword', resetPassword);
router.route('/profile').get(protect, getUserProfile);

export default router;
