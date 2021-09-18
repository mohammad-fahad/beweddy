import express from 'express';
import {
  createRegistry,
  getRegistry,
} from '../controllers/privetRegistryController.js';
import { protect } from '../middlewares/auth.js';

const router = express.Router();

router.get('/', getRegistry);
router.post('/create', protect, createRegistry);

export default router;
