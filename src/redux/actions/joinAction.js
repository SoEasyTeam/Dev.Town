import axios from 'axios';
import { API_URL } from '../../constants/defaultUrl';

function join(email, password) {
    return async (dispatch, getState) => {
        const joinData = {
            user: {
                email: email,
            },
        };
        try {
            const res = await axios.post(
                API_URL + '/user/emailvalid',
                joinData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (res.data.message === '사용 가능한 이메일 입니다.') {
                dispatch({
                    type: 'JOIN_EMAILVALID_SUCCESS',
                    payload: {
                        message: res.data.message,
                        email: email,
                        password: password,
                    },
                });
            } else {
                dispatch({
                    type: 'JOIN_EMAILVALID_FAIL',
                    payload: {
                        message: res.data.message,
                    },
                });
            }
        } catch (error) {}
    };
}

function accountValid(accountname) {
    return async (dispatch, getState) => {
        const accounValidData = {
            user: {
                accountname: accountname,
            },
        };

        try {
            const res = await axios.post(
                API_URL + '/user/accountnamevalid',
                accounValidData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (res.data.message === '사용 가능한 계정ID 입니다.') {
                dispatch({
                    type: 'JOIN_ACCOUNTVALID_SUCCESS',
                    payload: {
                        message: res.data.message,
                    },
                });
            } else if (res.data.message === '이미 가입된 계정ID 입니다.') {
                dispatch({
                    type: 'JOIN_ACCOUNTVALID_FAIL',
                    payload: {
                        message: res.data.message,
                    },
                });
            }
        } catch (error) {}
    };
}

function joinfinal(email, password, username, accountname, intro, itemImage) {
    return async (dispatch, getState) => {
        const joinfinalData = {
            user: {
                username: username,
                email: email,
                password: password,
                accountname: accountname,
                intro: intro,
                image: itemImage,
            },
        };

        try {
            const res = await axios.post(API_URL + '/user', joinfinalData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (res.data.message === '이미 사용중인 계정 ID입니다.') {
                alert('이미 사용중인 계정 ID입니다.');
            } else if (res.data.message === 'request entity too large') {
                alert(
                    '사진 용량 크기 제한 100KB 이상의 이미지는 업로드 할 수 없습니다.'
                );
            } else if (res.data.message === '회원가입 성공') {
                dispatch({
                    type: 'JOIN_EMAIL_PASSWORD_SUCCESS',
                    payload: {
                        email,
                        password,
                        username,
                        accountname,
                        intro,
                        image: res.data.image,
                        message: res.data.message,
                    },
                });
            }
        } catch (error) {}
    };
}

export const joinAction = { join, joinfinal, accountValid };
