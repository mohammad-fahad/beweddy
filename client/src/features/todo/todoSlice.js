import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = [
  {
    id: nanoid(10),
    isComplete: true,
    description: 'List No. 1; The Bride is Always Right',
  },
  {
    id: nanoid(10),
    isComplete: true,
    description: 'List No. 2; Buy A Beautiful & Expensive Wedding Dress.',
  },
  {
    id: nanoid(10),
    isComplete: false,
    description: 'Appointment with The Wedding Planner @HouseOffice At 9:30 AM',
  },
];

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      state.push(payload);
    },
    toggleTodo: (state, { payload }) => {
      const index = state.findIndex(todo => todo.id === payload.id);
      if (index !== -1) {
        state[index].isComplete = payload.isComplete;
      }
    },
    deleteTodo: (state, { payload }) => {
      const index = state.findIndex(todo => todo.id === payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo } = todosSlice.actions;
export const todosReducer = todosSlice.reducer;
