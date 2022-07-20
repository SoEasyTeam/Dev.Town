function homeFeed(token) {
    console.log('homefeed success action');
    return async (dispatch, getState) => {
        let url = 'https://mandarin.api.weniv.co.kr';
        const reqPath = '/post/feed';
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
