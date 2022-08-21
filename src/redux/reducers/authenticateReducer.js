const token = sessionStorage.getItem('token');
const acountname = sessionStorage.getItem('accountname');
const id = sessionStorage.getItem('id');
const image = sessionStorage.getItem('image');
const username = sessionStorage.getItem('username');
const tokenValid = sessionStorage.getItem('tokenValid');

console.log(token);

let initialState = {
    email: '',
    id: id,
    username: username,
    accountname: acountname,
    image: image,
    token: token,
    message: '',
};

let initialState_token = {
    tokenValid: {
        isValid: tokenValid,
    },
};

function authenticateReducer(state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                id: payload.id,
                username: payload.username,
                email: payload.email,
                accountname: payload.accountname,
                image: payload.image,
                token: payload.token,
                message: payload.message,
            };
        case 'LOGIN_FAIL':
            return {
                message: payload.message,
            };
        default:
            return { ...state };
    }
}

function tokenValidReducer(state = initialState_token, action) {
    let { type, payload } = action;
    switch (type) {
        case 'TOKEN_VALID_SUCCESS':
            console.log('token success reducer');
            return {
                ...state,
                tokenValid: payload.isValid,
            };
        default:
            return { ...state };
    }
}

export { authenticateReducer, tokenValidReducer };
