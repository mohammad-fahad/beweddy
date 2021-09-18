import { API_URL } from '@utils/index';
import axios from 'axios';
import { successAlert } from '@helpers/index';

export const contactMessage = async (formData) => {
    console.log(formData);
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    if (formData) {
        try {
            const { data } = await axios.post(`${API_URL}/contact/create`, formData, config);
            successAlert(data.message);
        } catch (err) {
            console.error(err);
        }
    }
};
