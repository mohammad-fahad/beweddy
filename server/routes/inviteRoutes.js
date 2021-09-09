import express from 'express';
import { inviteSMS, inviteMMS } from '../controllers/inviteController.js';
import {uploader} from '../middlewares/upload.js';

const router = express.Router();

router.post('/sms', inviteSMS);
router.post('/mms', uploader, inviteMMS);

export default router;
