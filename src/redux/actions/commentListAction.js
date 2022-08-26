import axios from 'axios';
import { API_URL } from '../../constants/defaultUrl';

function commentList(id) {
    return async (dispatch, getState) => {
        const token = getState().auth.token;
        try {
            const res = await axios.get(API_URL + `/post/${id}/comments`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-type': 'application/json',
                },
            });

            dispatch({
                type: 'GET_COMMENTLIST',
                payload: {
                    comments: res.data.comments,
                },
            });
        } catch (error) {}
    };
}

function writeComment(postId, token, comment) {
    return async (dispatch) => {
        const commentData = {
            comment: {
                content: comment,
            },
        };
        try {
            const res = await axios.post(
                API_URL + `/post/${postId}/comments`,
                commentData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-type': 'application/json',
                    },
                }
            );
            dispatch({
                type: 'WRITE_COMMENT',
                payload: {
                    comment: res.data.comment,
                },
            });
        } catch {}
    };
}
export const commentListAction = { commentList, writeComment };
