import asyncHandler from 'express-async-handler';
import Venue from '../models/Venue.js';

export const updateVenue = asyncHandler(async (req, res) => {
  const { id } = req.body;
  const venue = await Venue.findByIdAndUpdate({ id }, { ...req.body });
  const updated = await venue.save();

  if (updated) {
    res.status(200).json({ message: 'Updated successfully' });
  }
});

export const getVenues = asyncHandler(async (req, res) => {
  const venues = await Venue.find({}).sort({ businessName: 1 });
  res.status(200).json(venues);
});
