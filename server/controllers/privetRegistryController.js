import asyncHandler from 'express-async-handler';
import PrivetRegistry from '../models/PrivetRegistry.js';

// Get All Registry
export const getPrivetRegistries = asyncHandler(async (req, res) => {
  const registries = await PrivetRegistry.find({ user: req.body.id });
  res.status(200).json(registries);
});

// Create New Registry
export const createPrivetRegistry = asyncHandler(async (req, res) => {
  const registry = await PrivetRegistry.create({
    user: req.user._id,
    ...req.body,
  });

  if (registry) {
    res.status(201).json({ message: 'Registry created successfully' });
  } else {
    res.status(500);
    throw new Error('Server Error');
  }
});

// Update Registry
export const updatePrivetRegistry = asyncHandler(async (req, res) => {
  const registry = await PrivetRegistry.findByIdAndUpdate(req.params.id, {
    ...req.body,
  });

  if (registry) {
    res.status(201).json({ message: 'Registry created successfully' });
  } else {
    res.status(500);
    throw new Error('Server Error');
  }
});

// Delete Registry by ID
export const deletePrivetRegistry = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const registry = await PrivetRegistry.findByIdAndRemove(id);

  if (registry) {
    res.status(204).json({ message: 'Registry Deleted successfully' });
  } else {
    res.status(500);
    throw new Error('Server Error');
  }
});
