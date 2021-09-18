import asyncHandler from 'express-async-handler';
import PrivetRegistry from '../models/PrivetRegistry.js';
import Registry from '../models/Registry.js';

// Get All Registry
export const getRegistry = asyncHandler(async (req, res) => {
  const registries = await Registry.find({});
  res.status(200).json(registries);
});

// Create New Registry
export const createRegistry = asyncHandler(async (req, res) => {
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

// Delete Registry by ID
export const deleteRegistry = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const registry = Registry.findByIdAndRemove(id);

  // if (Registry) {
  //     res.status(201).json({ message: 'Registry Deleted successfully' });
  // } else {
  //     res.status(500);
  //     throw new Error('Server Error');
  // }
});
