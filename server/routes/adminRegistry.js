import express from 'express';
import { createRegistry } from '../controllers/adminRegistry.js';

const router = express.Router();

router.post('/create', createRegistry);

export default router;