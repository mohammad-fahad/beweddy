import express from 'express';
import { stripeWebhook } from '../controllers/stripeControllers.js';

const router = express.Router();

router.post('/', stripeWebhook);

export default router;
