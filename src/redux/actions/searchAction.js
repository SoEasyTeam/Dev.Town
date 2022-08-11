function search(keyword, token) {
    return async (dispatch, getState) => {
        let url = 'https://mandarin.api.weniv.co.kr';
        const reqPath = `/user/searchuser/?keyword=${keyword}`;

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
            dispatch({ type: 'SEARCH_USER' });
        } catch (error) {
            console.log('error 발생!');
        }
    };
}
export const searchAction = { search };
