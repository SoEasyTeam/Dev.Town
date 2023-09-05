import axios from 'axios';
import { API_URL } from '@constants/defaultUrl';

function join(email, password, type) {
    return async (dispatch) => {
        const joinData = {
            user: {
                email: email,
            },
        };

        if (type === 'initial') {
            dispatch({ type: 'INITIAL' });
            return;
        }

        try {
            const { data } = await axios.post(
                API_URL + '/user/emailvalid',
                joinData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (data.message === '이미 가입된 이메일 주소 입니다.') {
                dispatch({
                    type: 'JOIN_EMAILVALID_FAIL',
                    payload: {
                        message: data.message,
                    },
                });
                return;
            }

            dispatch({
                type: 'JOIN_EMAILVALID_SUCCESS',
                payload: {
                    message: data.message,
                    email: email,
                    password: password,
                },
            });
        } catch (error) {
            console.log('email check error : ', error);
        }
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
            const { data } = await axios.post(
                API_URL + '/user/accountnamevalid',
                accounValidData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            dispatch({
                type: 'JOIN_ACCOUNTVALID_MESSAGE',
                payload: {
                    message: data.message,
                },
            });
        } catch (error) {
            console.log('유저 아이디 검증 에러 : ', error);
        }
    };
}

function joinfinal(email, password, username, accountname, intro, itemImage) {
    return async (dispatch) => {
        if (email === 'initial') {
            dispatch({ type: 'INITIAL' });
            return;
        }

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
            const { data } = await axios.post(
                API_URL + '/user',
                joinfinalData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (data.message === '이미 사용중인 계정 ID입니다.') {
                alert('이미 사용중인 계정 ID입니다.');
            } else if (data.message === 'request entity too large') {
                alert(
                    '사진 용량 크기 제한 100KB 이상의 이미지는 업로드 할 수 없습니다.'
                );
            } else if (data.message === '회원가입 성공') {
                dispatch({
                    type: 'JOIN_EMAIL_PASSWORD_SUCCESS',
                    payload: {
                        email,
                        password,
                        username,
                        accountname,
                        intro,
                        image: data.image,
                        message: data.message,
                    },
                });
            }
        } catch (error) {
            console.log('회원가입 프로필 설정 네트워크 에러 : error');
        }
    };
}

export const joinAction = { join, joinfinal, accountValid };
