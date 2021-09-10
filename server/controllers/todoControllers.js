import asyncHandler from 'express-async-handler';
import Todo from '../models/Todo.js';

// Get All Todos
export const getTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find({ user: req.user._id });
  console.log(todos);
  res.status(200).json(todos);
});

// Create New Todo
export const createTodo = asyncHandler(async (req, res) => {
  const { description, isComplete } = req.body;
  const todo = await Todo.create({
    user: req.user._id,
    description,
    isComplete,
  });

  if (todo) {
    res.status(201).json({ message: 'Todo created successfully' });
  } else {
    res.status(500);
    throw new Error('Server Error');
  }
});

// Update Todo by ID

export const updateTodo = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findById(id);

  if (todo) {
    todo.isComplete = req.body.isComplete;
    todo.description = req.body.description || todo.description;
    const updatedTodo = await todo.save();

    if (updatedTodo) {
      res.status(200).json({ message: 'Todo updated successfully' });
    }
  } else {
    res.status(500);
    throw new Error('Todo not found');
  }
});

//! Delete Todo by ID
export const deleteTodo = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findByIdAndRemove(id);

  if (todo) {
    res.status(201).json({ message: 'Todo deleted successfully' });
  } else {
    res.status(500);
    throw new Error('Server Error');
  }
});
