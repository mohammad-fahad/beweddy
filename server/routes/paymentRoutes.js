import express from 'express';
import {
  checkoutSession,
  mailoutPayment,
} from '../controllers/paymentControllers.js';

const router = express.Router();

router.route('/giftcard').post(checkoutSession);
router.route('/mailout').post(mailoutPayment);

export default router;
