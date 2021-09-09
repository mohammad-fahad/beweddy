import { API_URL } from '@utils/index';
import axios from 'axios';

export const getGuests = async ({ queryKey }) => {
  const [_key, token] = queryKey;

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  if (token) {
    try {
      const { data } = await axios.get(`${API_URL}/guests`, config);
      return data;
    } catch (err) {
      console.error(err);
    }
  }
};
