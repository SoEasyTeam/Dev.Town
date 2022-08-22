import axios from 'axios';
import { API_URL } from '../../constants/defaultUrl';

function post(fileList, postText) {
    const formData = new FormData();

    if (fileList.length > 0) {
        for (let index = 0; index < fileList.length; index++) {
            const file = fileList[index];
            formData.append('image', file);
            console.log(formData);
        }
    }
    console.log('포스트내용', postText);
    return async (dispatch, getState) => {
        let url = 'https://mandarin.api.weniv.co.kr';
        const reqPath = '/image/uploadfiles';
        const token = getState().auth.token;
        console.log(token);
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
            console.log(imageUrls);

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
        } catch (error) {
            console.log(error);
        }
    };
}

function getPost(id) {
    console.log(id);
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
export const postAction = { post, getPost };
