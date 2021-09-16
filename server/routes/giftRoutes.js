import express from 'express';
import { getGifts, createGift } from '../controllers/giftController.js';

const router = express.Router();

router.get('/', getGifts);
router.post('/create', createGift);

export default router;
