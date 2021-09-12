import express from 'express';
import {
  createRegistry,
  getRegistry,
} from '../controllers/registryController.js';

const router = express.Router();

router.get('/', getRegistry);
router.post('/create', createRegistry);

export default router;
