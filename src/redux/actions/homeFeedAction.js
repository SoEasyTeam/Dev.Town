import axios from 'axios';
import { API_URL } from '../../constants/defaultUrl';

function homeFeed() {
    return async (dispatch, getState) => {
        const token = sessionStorage.getItem('token');
        console.log(token);
        if (token !== 'undefined') {
            try {
                const res = await axios.get(API_URL + '/post/feed', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-type': 'application/json',
                    },
                });

                dispatch({
                    type: 'HOMEFEED_SUCCESS',
                    payload: {
                        item: res.data.posts.map((item) => {
                            return item;
                        }),
                    },
                });
            } catch (error) {}
        }
    };
}

export const homeFeedAction = { homeFeed };
