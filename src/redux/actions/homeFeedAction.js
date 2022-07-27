function homeFeed() {
    console.log('homefeed success action');
    return async (dispatch, getState) => {
        let url = 'https://mandarin.api.weniv.co.kr';
        const reqPath = '/post/feed';
        const token = getState().auth.token;
        console.log(token);

        // const token2 = localStorage.getItem('persist:root');
        // console.log(token2);
        // const token3 = JSON.parse(token2);
        // const token4 = JSON.parse(token3.auth);
        // const lastToken = token4.token;
        // console.log(lastToken);

        try {
            let res = await fetch(url + reqPath, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-type': 'application/json',
                },
            });
            const resJson = await res.json();
            console.log(resJson);
            dispatch({
                type: 'HOMEFEED_SUCCESS',
                payload: {
                    item: resJson.posts.map((item) => {
                        return item;
                    }),
                },
            });
        } catch (error) {}
    };
}

export const homeFeedAction = { homeFeed };
