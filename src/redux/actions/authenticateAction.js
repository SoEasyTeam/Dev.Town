function login(email, password) {
    return async (dispatch, getState) => {
        let url = 'https://mandarin.api.weniv.co.kr';
        const reqPath = '/user/login';
        try {
            let res = await fetch(url + reqPath, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user: {
                        email: email,
                        password: password,
                    },
                }),
            });
            const resJson = await res.json();
            if (
                resJson.message === '이메일 또는 비밀번호가 일치하지 않습니다.'
            ) {
                dispatch({
                    type: 'LOGIN_FAIL',
                    payload: {
                        message: resJson.message,
                    },
                });
            } else {
                dispatch({
                    type: 'LOGIN_SUCCESS',
                    payload: {
                        id: resJson.user._id,
                        username: resJson.user.username,
                        email: resJson.user.email,
                        accountname: resJson.user.accountname,
                        image: resJson.user.image,
                        token: resJson.user.token,
                        message: resJson.message,
                    },
                });
            }
        } catch (err) {
            console.log(err);
        }
    };
}

function tokenValid(token) {
    return async (dispatch, getState) => {
        let url = 'https://mandarin.api.weniv.co.kr';
        const reqPath = '/user/checktoken';
        try {
            let res = await fetch(url + reqPath, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
            const resJson = await res.json();
            dispatch({
                type: 'TOKEN_VALID_SUCCESS',
                payload: {
                    isValid: resJson,
                },
            });
        } catch (err) {
            console.log(err);
        }
    };
}

export const authenticateAction = { login, tokenValid };
