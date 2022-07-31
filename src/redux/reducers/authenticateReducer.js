const token = sessionStorage.getItem('token');
const acountname = sessionStorage.getItem('accountname');
const id = sessionStorage.getItem('id');

let initialState = {
    email: '',
    id: id,
    username: '',
    accountname: acountname,
    image: '',
    token: token,
    authenticate: false,
    message: '',
};

let initialState_token = {
    tokenValid: false,
};

function authenticateReducer(state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
        case 'LOGIN_SUCCESS':
            // console.log('login success reducer');
            return {
                ...state,
                id: payload.id,
                username: payload.username,
                email: payload.email,
                accountname: payload.accountname,
                image: payload.image,
                token: payload.token,
                authenticate: true,
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
