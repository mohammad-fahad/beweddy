import express from 'express';
import {
  createPrivetRegistry,
  deletePrivetRegistry,
  getPrivetRegistries,
  updatePrivetRegistry,
} from '../controllers/privetRegistryController.js';
import { protect } from '../middlewares/auth.js';

const router = express.Router();

router.post('/create', protect, createPrivetRegistry);
router
  .route('/:id')
  .get(getPrivetRegistries)
  .put(protect, updatePrivetRegistry)
  .delete(protect, deletePrivetRegistry);

export default router;
