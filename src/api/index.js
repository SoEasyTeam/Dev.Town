import axios from 'axios';

const baseURL = import.meta.env.VITE_REACT_APP_API_URL;
const token = sessionStorage.getItem('token');

export const customAxios = async (type, parameter, endpoint) => {
    const { data } = await axios({
        method: type,
        url: baseURL + endpoint,
        data: parameter,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
};
