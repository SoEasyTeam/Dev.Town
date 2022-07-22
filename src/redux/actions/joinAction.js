function join(email, password) {
    // console.log('join success action');
    return (dispatch, getState) => {
        dispatch({
            type: 'JOIN_EMAIL_PASSWORD_SUCCESS',
            payload: { email, password },
        });
    };
}

function joinfinal(email, password, username, accountname, intro) {
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
                    },
                }),
            });
            const resJson = await res.json();
            console.log(resJson);
        } catch (error) {}
        dispatch({
            type: 'JOIN_SUCCESS',
            payload: { email, password, username, accountname, intro },
        });
    };
}

export const joinAction = { join, joinfinal };
