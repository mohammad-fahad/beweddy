import express from 'express';
import { getVenue, getVenues } from '../controllers/venueControllers.js';
import { protect } from '../middlewares/auth.js';

const router = express.Router();

router.get('/', getVenues);
router.get('/:id', getVenue);

export default router;
