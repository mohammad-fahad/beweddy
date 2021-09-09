import asyncHandler from 'express-async-handler';
import AdminRegistry from '../models/AdminRegistry.js';

// Get All AdminRegistry
export const getRegistry = asyncHandler(async (req, res) => {
    const AdminRegistries = AdminRegistry.find({});
    res.status(200).json({ AdminRegistries });
});

// Create New Registry
export const createRegistry = asyncHandler(async (req, res) => {
    const { title, description, link, image } = req.body;
    const registry = AdminRegistry.create({ title, description, link, image });

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
    const Registry = AdminRegistry.findByIdAndRemove(id);

    // if (Registry) {
    //     res.status(201).json({ message: 'Registry Deleted successfully' });
    // } else {
    //     res.status(500);
    //     throw new Error('Server Error');
    // }
});
