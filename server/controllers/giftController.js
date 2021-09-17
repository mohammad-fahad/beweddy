import asyncHandler from 'express-async-handler';
import Gift from '../models/Gift.js';

// Get All Gifts
export const getGifts = asyncHandler(async (_req, res) => {
  const gifts = await Gift.find({});

  res.status(200).json(gifts);
});

// Create New Gift
export const createGift = asyncHandler(async (req, res) => {
  const { title, description, link, image } = req.body;
  const gift = await Gift.create({ title, description, link, image });

  if (gift) {
    res.status(201).json({ message: 'Gift created successfully' });
  } else {
    res.status(500);
    throw new Error('Server Error');
  }
});

// Delete Gift by ID
export const deleteGift = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const gift = await Gift.findByIdAndRemove(id);
  if (gift) {
    res.status(201).json({ message: 'Gift Deleted successfully' });
  } else {
    res.status(500);
    throw new Error('Server Error');
  }
});

export const updateGift = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updatedGift = req.body;
  const updatedGiftResponse = await Gift.findByIdAndUpdate(
    id,
    { ...updatedGift, id },
    { new: true }
  );
  if (updatedGiftResponse) {
    res.status(201).json({ message: 'Gift Updated Successfully' });
  }
});

export const getGiftCardById = asyncHandler(async (req, res) => {
  const giftCard = await Gift.findById(req.params.id);
  if (!giftCard) {
    res.status(404);
    throw new Error('Gift card is not found');
  }
  res.json(giftCard);
});
