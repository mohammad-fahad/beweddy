import asyncHandler from 'express-async-handler';
import Contactus from '../models/contactus.js';

// Get All Contactus
export const getContactus = asyncHandler(async (_req, res) => {
    const Contact = await Contactus.find({});
    res.status(200).json(Contact);
});

// Create New Contactus
export const createContactus = asyncHandler(async (req, res) => {
    const { name, message, email, number } = req.body;
    const Contact = await Contactus.create({ name, message, email, number });

    if (Contact) {
        res.status(201).json({ message: 'Message sent successfully' });
    } else {
        res.status(500);
        throw new Error('Server Error');
    }
});

// Delete Contactus by ID
export const deleteContactus = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const Contactus = await Contactus.findByIdAndRemove(id);
    if (Contactus) {
        res.status(201).json({ message: 'Message Deleted successfully' });
    } else {
        res.status(500);
        throw new Error('Server Error');
    }
});

