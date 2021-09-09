import asyncHandler from 'express-async-handler';
import { sendEmailInvites } from '../utils/mailer/index.js';

// Create New Guest
export const sendEmail = asyncHandler(async (req, res) => {
  const { emails, coupleName, image, message } = req.body;
  await sendEmailInvites(emails, coupleName, image, message);
  res.status(200).json({ message: 'Done' });
});
