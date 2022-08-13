import axios from 'axios';
import { API_URL } from '../../constants/defaultUrl';

function login(email, password) {
    return async (dispatch, getState) => {
        console.log('로그인 action');
        const loginData = {
            user: {
                email: email,
                password: password,
            },
        };

        try {
            const res = await axios.post(API_URL + '/user/login', loginData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (
                res.data.message === '이메일 또는 비밀번호가 일치하지 않습니다.'
            ) {
                dispatch({
                    type: 'LOGIN_FAIL',
                    payload: {
                        message: res.data.message,
                    },
                });
            } else {
                dispatch({
                    type: 'LOGIN_SUCCESS',
                    payload: {
                        id: res.data.user._id,
                        username: res.data.user.username,
                        email: res.data.user.email,
                        accountname: res.data.user.accountname,
                        image: res.data.user.image,
                        token: res.data.user.token,
                        message: res.data.message,
                    },
                });
            }
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    };
}

function tokenValid() {
    return async (dispatch, getState) => {
        const token = getState().auth.token;
        try {
            const res = await axios.get(API_URL + '/user/checktoken', {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            dispatch({
                type: 'TOKEN_VALID_SUCCESS',
                payload: {
                    isValid: res.data,
                },
            });
        } catch (err) {
            console.log(err);
        }
    };
}

export const authenticateAction = { login, tokenValid };
