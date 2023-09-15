import axios from 'axios';
import { API_URL } from '@constants/defaultUrl';

function login(email, password) {
    return async (dispatch) => {
        const loginData = {
            user: {
                email: email,
                password: password,
            },
        };

        try {
            const { data } = await axios.post(
                API_URL + '/user/login',
                loginData
            );

            // 상태가 422일 때 로그인 실패 처리
            if (data.status === 422) {
                dispatch({
                    type: 'LOGIN_FAIL',
                    payload: {
                        message: data.message,
                        token: '',
                    },
                });
                return;
            }

            // 로그인 성공 처리
            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: {
                    id: data.user._id,
                    username: data.user.username,
                    email: data.user.email,
                    accountname: data.user.accountname,
                    image: data.user.image,
                    token: data.user.token,
                    message: data.message,
                },
            });
        } catch (error) {
            console.log('Login Network error : ', error);
        }
    };
}

function tokenValid() {
    return async (dispatch, getState) => {
        const token = getState().auth.token;
        if (token) {
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
            } catch (err) {}
        }
    };
}

export const authenticateAction = { login, tokenValid };
