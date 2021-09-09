import { API_URL } from '@utils/index';
import axios from 'axios';

export const getCouple = async ({ queryKey }) => {
  const [_key, username] = queryKey;

  const config = {
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${token}`,
    },
  };

  if (username) {
    try {
      const { data } = await axios.get(`${API_URL}/users/${username}`, config);
      return data;
    } catch (err) {
      console.error(err);
    }
  }
};
