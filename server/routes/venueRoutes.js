import express from 'express';
import { getVenues } from '../controllers/venueControllers.js';
import { protect } from '../middlewares/auth.js';

const router = express.Router();

router.get('/', getVenues);

export default router;
