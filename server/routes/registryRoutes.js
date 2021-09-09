import express from 'express';
import { createRegistry, getRegistry } from '../controllers/registryController.js';

const router = express.Router();

router.post('/create', createRegistry);
router.get('/', getRegistry);

export default router;