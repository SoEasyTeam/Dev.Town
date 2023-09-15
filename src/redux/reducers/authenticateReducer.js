let storageToken = sessionStorage.getItem('token');
let storageAccountName = sessionStorage.getItem('accountname');

let initialState = {
    // email: '',
    // id: '',
    // username: '',
    accountname: storageAccountName || '',
    // image: '',
    token: storageToken || '',
    // message: '',
};

let initialState_token = {
    tokenValid: {
        isValid: '',
    },
};

function authenticateReducer(state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
        case 'LOGIN_SUCCESS':
            for (const key in initialState) {
                sessionStorage.setItem(`${key}`, payload[key]);
            }
            return {
                ...state,
                // id: payload.id,
                // username: payload.username,
                // email: payload.email,
                accountname: payload.accountname,
                // image: payload.image,
                token: payload.token,
                // message: payload.message,
            };
        case 'LOGIN_FAIL':
            return {
                message: payload.message,
                token: '',
            };
        default:
            return { ...state };
    }
}

function tokenValidReducer(state = initialState_token, action) {
    let { type, payload } = action;
    switch (type) {
        case 'TOKEN_VALID_SUCCESS':
            return {
                ...state,
                tokenValid: payload.isValid,
            };
        default:
            return { ...state };
    }
}

export { authenticateReducer, tokenValidReducer };
