// tangoRoutes.js
import express from 'express';
import { getGifts, redeemGiftCard } from '../controllers/tangoControllers.js';

const router = express.Router();
router.route('/').post(getGifts);
router.route('/redeem').post(redeemGiftCard);

export default router;
