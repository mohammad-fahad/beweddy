import { successAlert } from '@helpers/index';
import { API_URL } from '@utils/index';
import axios from 'axios';

export const getGifts = async () => {
  // const [_key] = queryKey;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${token}`,
    },
  };

  try {
    const { data } = await axios.get(`${API_URL}/gifts`, config);
    return data;
  } catch (err) {
    console.error(err);
  }
};
