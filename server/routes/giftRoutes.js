import express from 'express';
import { getGifts, createGift } from '../controllers/giftController.js';

const router = express.Router();

router.post('/create', createGift);
router.get('/', getGifts);

export default router;
