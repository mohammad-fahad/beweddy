import express from 'express';
import { checkoutSession } from '../controllers/paymentControllers.js';

const router = express.Router();

router.route('/').post(checkoutSession);

export default router;
