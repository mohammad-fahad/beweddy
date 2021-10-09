import { successAlert } from '@helpers/index';
import { API_URL } from '@utils/index';
import axios from 'axios';

export const getPrivetRegistries = async ({ queryKey }) => {
  const [_key, id] = queryKey;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${token}`,
    },
  };

  if (id) {
    try {
      const { data } = await axios.post(
        `${API_URL}/privetRegistries/${id}`,
        config
      );
      return data;
    } catch (err) {
      console.error(err);
    }
  }
};

export const createPrivetRegistry = async ({ payload, token }) => {
  // const [_key] = queryKey;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const { data } = await axios.post(
      `${API_URL}/privetRegistries/create`,
      payload,
      config
    );
    successAlert(data.message);
  } catch (err) {
    console.error(err);
  }
};

export const updatePrivetRegistry = async ({ id, token, payload }) => {
  // const [_key] = queryKey;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const { data } = await axios.put(
      `${API_URL}/privetRegistries/${id}`,
      payload,
      config
    );
    successAlert(data.message);
  } catch (err) {
    console.error(err);
  }
};
