import express from 'express';
import { createGuest, getGuests } from '../controllers/guestControllers.js';
import { protect } from '../middlewares/auth.js';

const router = express.Router();

router.route('/').get(protect, getGuests);
router.route('/create').post(createGuest);

export default router;
