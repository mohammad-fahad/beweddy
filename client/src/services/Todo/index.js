import { successAlert } from '@helpers/index';
import { API_URL } from '@utils/index';
import axios from 'axios';

export const getTodos = async ({ queryKey }) => {
  const [_key, token] = queryKey;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  if (token) {
    try {
      const { data } = await axios.get(`${API_URL}/todos`, config);
      return data;
    } catch (err) {
      console.error(err);
    }
  }
};

export const createTodo = async ({ token, ...payload }) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  if (token) {
    try {
      const { data } = await axios.post(
        `${API_URL}/todos/create`,
        payload,
        config
      );
      successAlert(data.message);
    } catch (err) {
      console.error(err);
    }
  }
};

export const attemptUpdateTodo = async ({ token, id, ...payload }) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  if (token) {
    try {
      const { data } = await axios.put(
        `${API_URL}/todos/${id}`,
        payload,
        config
      );
      successAlert(data.message);
    } catch (err) {
      console.error(err);
    }
  }
};

export const deleteTodo = async ({ token, id }) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  if (token) {
    try {
      const { data } = await axios.delete(`${API_URL}/todos/${id}`, config);
      successAlert(data.message);
    } catch (err) {
      console.error(err);
    }
  }
};
