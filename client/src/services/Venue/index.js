// import { successAlert } from '@helpers/index';
import { API_URL } from "@utils/index";
import axios from "axios";

export const getVenues = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${token}`,
    },
  };

  try {
    const { data } = await axios.get(`${API_URL}/venues`, config);
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const getVenue = async ({ queryKey }) => {
  const [_key, id] = queryKey;

  const config = {
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${token}`,
    },
  };

  if (id) {
    try {
      const { data } = await axios.get(`${API_URL}/venues/${id}`, config);
      return data;
    } catch (err) {
      console.error(err);
    }
  }
};
