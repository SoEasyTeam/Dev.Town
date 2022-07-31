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
                let fileRes = await fetch(url + reqPath, {
                    method: 'POST',
                    body: formData,
                });
                const fileJson = await fileRes.json();
                console.log('파일제이슨', fileJson);
                imageUrls = fileJson
                    .map((fileData) => url + '/' + fileData.filename)
                    .join(',');
            }
            console.log(imageUrls);
            const postReq = '/post';

            let postRes = await fetch(url + postReq, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    post: {
                        content: postText,
                        image: imageUrls,
                    },
                }),
            });
            const postJson = await postRes.json();
            console.log('테스트', postJson);
            dispatch({
                type: 'POST_SUCCESS',
                payload: {
                    post: postJson.post.post,
                },
            });
        } catch (error) {
            console.log(error);
        }
    };
}

function getPost(id) {
    // console.log('디스패치 되는중!!');
    console.log(id);
    return async (dispatch, getState) => {
        let url = 'https://mandarin.api.weniv.co.kr';
        const reqPath = `/post/${id}`;
        const token = getState().auth.token;
        // console.log(token);
        try {
            let postRes = await fetch(url + reqPath, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-type': 'application/json',
                },
            });
            const postJson = await postRes.json();
            console.log(postJson, '포스트 성공?!~');
            dispatch({
                type: 'GET_POST',
                payload: {
                    post: postJson.post,
                },
            });
        } catch {
            alert('존재하지 않는 게시물입니다.');
        }
    };
}
export const postAction = { post, getPost };
