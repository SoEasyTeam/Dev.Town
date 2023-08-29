import axios from 'axios';
import { API_URL } from '../../constants/defaultUrl';

function post(fileList, postText) {
    const formData = new FormData();

    if (fileList.length > 0) {
        for (let index = 0; index < fileList.length; index++) {
            const file = fileList[index];
            formData.append('image', file);
        }
    }
    return async (dispatch, getState) => {
        let url = API_URL;
        const reqPath = '/image/uploadfiles';
        const token = getState().auth.token;
        try {
            let imageUrls = '';
            if (fileList.length > 0) {
                const res = await axios.post(
                    API_URL + '/image/uploadfiles',
                    formData
                );

                imageUrls = res.data
                    .map((fileData) => url + '/' + fileData.filename)
                    .join(',');
            }

            const postResData = {
                post: {
                    content: postText,
                    image: imageUrls,
                },
            };

            const postRes = await axios.post(API_URL + '/post', postResData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-type': 'application/json',
                },
            });

            dispatch({
                type: 'POST_SUCCESS',
                payload: {
                    post: postRes.data.post.post,
                },
            });
        } catch (error) {}
    };
}

function getPost(id) {
    return async (dispatch, getState) => {
        const token = getState().auth.token;
        try {
            const getPostRes = await axios(API_URL + `/post/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-type': 'application/json',
                },
            });

            dispatch({
                type: 'GET_POST',
                payload: {
                    post: getPostRes.data.post,
                },
            });
        } catch {
            alert('존재하지 않는 게시물입니다.');
        }
    };
}
function getMyPost(account) {
    return async (dispatch, getState) => {
        const token = getState().auth.token;
        try {
            const getMyPostRes = await axios(
                API_URL + `/post/${account}/userpost`,
                {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-type': 'application/json',
                    },
                }
            );
            dispatch({
                type: 'GET_MY_POST',
                payload: {
                    post: getMyPostRes.data.post,
                },
            });
        } catch {
            if (!account) {
                alert('해당 계정이 존재하지 않습니다.');
            }
        }
    };
}
function deletePost(id) {
    return async (dispatch, getState) => {
        const token = getState().auth.token;
        try {
            const deletePostRes = await axios(API_URL + `/post/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-type': 'application/json',
                },
            });
            dispatch({
                type: 'DELETE_POST',
                payload: {
                    post: deletePostRes.data.post,
                },
            });
        } catch {
            alert('존재하지 않는 게시물입니다.');
        }
    };
}
export const postAction = { post, getPost, getMyPost, deletePost };
