import express from 'express';
import {
  inviteMMS,
  inviteSMS,
  sendEmail,
} from '../controllers/invitationControllers.js';

const router = express.Router();

router.route('/email').post(sendEmail);
router.post('/sms', inviteSMS);
router.post('/mms', inviteMMS);

export default router;
