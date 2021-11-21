import express from 'express';
import { getVenues } from '../controllers/venueControllers.js';
import { protect } from '../middlewares/auth.js';

const router = express.Router();

router.post('/', getVenues);

export default router;
