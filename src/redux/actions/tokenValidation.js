import axios from 'axios';
import { API_URL } from '@constants/defaultUrl';

function tokenValid() {
    return async (dispatch, getState) => {
        const token = getState().auth.token;
        if (token === null) {
        } else {
            try {
                const res = await axios(API_URL + '/user/checktoken', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });
                dispatch({
                    type: 'HOMEFEED_SUCCESS',
                    payload: {
                        isValid: res.data,
                    },
                });
            } catch (err) {}
        }
    };
}

export const tokenValidation = { tokenValid };
