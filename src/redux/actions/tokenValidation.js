function tokenValid() {
    return async (dispatch, getState) => {
        let url = 'https://mandarin.api.weniv.co.kr';
        const reqPath = '/user/checktoken';
        const token = getState().auth.token;
        if (token === null) {
            console.log('token이 존재하지 않습니다.');
        } else {
            try {
                let res = await fetch(url + reqPath, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });
                const resJson = await res.json();
                console.log(resJson);
                dispatch({
                    type: 'HOMEFEED_SUCCESS',
                    payload: {
                        isValid: resJson,
                    },
                });
            } catch (err) {
                console.log(err);
            }
        }
    };
}

export const tokenValidation = { tokenValid };
