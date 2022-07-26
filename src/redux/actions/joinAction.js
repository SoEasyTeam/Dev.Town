function join(email, password) {
    console.log('join success action');
    return async (dispatch, getState) => {
        let url = 'https://mandarin.api.weniv.co.kr';
        const reqPath = '/user/emailvalid';
        try {
            let res = await fetch(url + reqPath, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user: {
                        email: email,
                    },
                }),
            });
            const resJson = await res.json();
            console.log(resJson);
            if (resJson.message === '이미 가입된 이메일 주소 입니다.') {
                alert('이미 가입된 이메일 주소 입니다.');
            } else {
                dispatch({
                    type: 'JOIN_EMAILVALID_SUCCESS',
                    payload: {
                        message: resJson.message,
                        email: email,
                        password: password,
                    },
                });
            }
        } catch (error) {}
    };
}

function joinfinal(email, password, username, accountname, intro, itemImage) {
    // console.log('join final success action');
    return async (dispatch, getState) => {
        let url = 'https://mandarin.api.weniv.co.kr';
        const reqPath = '/user';
        try {
            let res = await fetch(url + reqPath, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user: {
                        username: username,
                        email: email,
                        password: password,
                        accountname: accountname,
                        intro: intro,
                        image: itemImage,
                    },
                }),
            });
            const resJson = await res.json();
            console.log(resJson);
            if (resJson.message === '이미 사용중인 계정 ID입니다.') {
                alert('이미 사용중인 계정 ID입니다.');
            } else if (resJson.message === '회원가입 성공') {
                dispatch({
                    type: 'JOIN_EMAIL_PASSWORD_SUCCESS',
                    payload: {
                        email,
                        password,
                        username,
                        accountname,
                        intro,
                        image: resJson.image,
                        message: resJson.message,
                    },
                });
            }
        } catch (error) {}
    };
}

export const joinAction = { join, joinfinal };
