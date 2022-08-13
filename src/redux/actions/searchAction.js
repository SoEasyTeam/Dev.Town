import axios from 'axios';
import { API_URL } from '../../constants/defaultUrl';

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
            console.log(res.data);
            dispatch({ type: 'SEARCH_USER' });
        } catch (error) {
            console.log('error 발생!');
        }
    };
}
export const searchAction = { search };
