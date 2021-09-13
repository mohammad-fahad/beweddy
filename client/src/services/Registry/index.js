import { successAlert } from '@helpers/index';
import { API_URL } from '@utils/index';
import axios from 'axios';

export const getRegistries = async () => {
  // const [_key] = queryKey;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${token}`,
    },
  };

  try {
    const { data } = await axios.get(`${API_URL}/registries`, config);
    return data;
  } catch (err) {
    console.error(err);
  }
};
