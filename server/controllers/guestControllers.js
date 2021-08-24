import asyncHandler from 'express-async-handler';
import Guest from '../models/Guest.js';

// Get All Guests
export const getGuests = asyncHandler(async (_req, res) => {
  const guests = Guest.findOne({ user: req.user._id });

  res.status(200).json({ guests });
});

// Create New Guest
export const createGuest = asyncHandler(async (req, res) => {
  const { email, phone } = req.body;

  const guestExists = await Guest.findOne({ $or: [{ email }, { phone }] });
  if (guestExists) {
    res.status(400);
    throw new Error('Guest already exists');
  }
  const guest = await Guest.create({
    user: req.user._id,
    ...req.body,
  });

  if (guest) {
    res.status(201).json({ message: 'Guest successfully added' });
  } else {
    res.status(500);
    throw new Error('Server Error');
  }
});
