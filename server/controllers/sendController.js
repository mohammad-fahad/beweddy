import asyncHandler from 'express-async-handler';
import { sendText } from '../utils/mailer/index.js';

// Create New Guest
export const sendEmail = asyncHandler(async (req, res) => {
  await sendText(req.body.base64);
  res.status(200).json({ message: 'Done' });
});
