import express from 'express';
import { getGifts, createGift, deleteGift, updateGift } from '../controllers/giftController.js';

const router = express.Router();

router.get('/', getGifts);
router.post('/create', createGift);
router.delete('/delete/:id', deleteGift);
router.put('/update/:id', updateGift);

export default router;