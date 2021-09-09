import express from 'express';
import {
  createTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from '../controllers/todoControllers.js';
import { protect } from '../middlewares/auth.js';

const router = express.Router();

router.route('/').get(protect, getTodos);
router.route('/create').post(protect, createTodo);
router.route('/:id').put(protect, updateTodo).delete(protect, deleteTodo);

export default router;
