import express from 'express';
import { getContactus, createContactus, deleteContactus } from '../controllers/contactusController.js';

const router = express.Router();

router.get('/', getContactus);
router.post('/create', createContactus);
router.delete('/delete/:id', deleteContactus);

export default router;