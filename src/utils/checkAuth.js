import * as yup from 'yup';

//이메일 주소 유효성 검사
export const checkEmail =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

export const checkUserId = /^[a-zA-Z0-9._]*$/;

export const authSchema = yup
    .object({
        email: yup
            .string()
            .matches(checkEmail, '이메일 양식에 맞게 입력해주세요.')
            .required('이메일을 입력해주세요.'),
        password: yup
            .string()
            .min(6, '비밀번호 최소 6자리 이상으로 입력해주세요.')
            .required('패스워드를 입력해주세요.'),
    })
    .required();
