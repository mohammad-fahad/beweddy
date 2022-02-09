import { errorAlert, handleErrorMessage, successAlert } from "@helpers/index";
import { API_URL } from "@utils/index";
import axios from "axios";

export const attemptPRRequest = async (email) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const { data } = await axios.post(
      `${API_URL}/users/request-reset-password`,
      email,
      config
    );
    successAlert(data.message);
  } catch (err) {
    console.error(err);
  }
};

export const attemptResetPassword = async (payload) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const { data } = await axios.post(
      `${API_URL}/users/reset-password`,
      payload,
      config
    );
    successAlert(data.message);
  } catch (err) {
    errorAlert(handleErrorMessage(err));
  }
};
