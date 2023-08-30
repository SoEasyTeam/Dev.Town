import axios from 'axios';
import { API_URL } from '@constants/defaultUrl';

function search(keyword, token) {
    return async (dispatch, getState) => {
        try {
            const res = await axios.get(
                API_URL + `/user/searchuser/?keyword=${keyword}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-type': 'application/json',
                    },
                }
            );
            dispatch({ type: 'SEARCH_USER' });
        } catch (error) {}
    };
}
export const searchAction = { search };
