import asyncHandler from 'express-async-handler';
import Registry from '../models/Registry.js';

// Get All Registry
export const getRegistry = asyncHandler(async (req, res) => {
  const registries = await Registry.find({});
  res.status(200).json(registries);
});

// Create New Registry
export const createRegistry = asyncHandler(async (req, res) => {
  const { title, description, link, image } = req.body;
  const registry = await Registry.create({ title, description, link, image });

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
  const registry = await Registry.findByIdAndRemove(id);
  if (registry) {
    res.status(201).json({ message: 'Registry Deleted successfully' });
  } else {
    res.status(500);
    throw new Error('Server Error');
  }
});


export const updateRegistry = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updatedRegistry = req.body;
  const updatedRegistryResponse = await Registry.findByIdAndUpdate(id, { ...updatedRegistry, id }, { new: true });
  if (updatedRegistryResponse) {
    res.status(201).json({ message: "Registry Updated Successfully" });
  } else {
    res.status(500);
    throw new Error('Server Error');
  }
})
