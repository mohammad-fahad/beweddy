import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

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
