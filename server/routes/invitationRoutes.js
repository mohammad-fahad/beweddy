import express from 'express';
import {
  inviteEmail,
  inviteMMS,
  inviteSMS,
} from '../controllers/invitationControllers.js';

const router = express.Router();

router.route('/email').post(inviteEmail);
router.post('/sms', inviteSMS);
router.post('/mms', inviteMMS);

export default router;
