import { API_URL } from '@utils/index';
import axios from 'axios';
import { successAlert } from '@helpers/index';

export const contactMessage = async (data) => {
    console.log(data);

    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    // if (data) {
    //     try {
    //         const { data } = await axios.get(`${API_URL}/contact/create`, config);
    //         successAlert(data.message);
    //     } catch (err) {
    //         console.error(err);
    //     }
    // }
};
