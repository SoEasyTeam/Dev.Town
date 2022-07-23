let initialState = {
    email: '',
    password: '',
    username: '',
    accountname: '',
    intro: '',
};

let joinValid_initialState = {
    message: '',
};

function joinReducer(state = joinValid_initialState, action) {
    let { type, payload } = action;
    switch (type) {
        case 'JOIN_EMAILVALID_SUCCESS':
            return {
                ...state,
                message: payload.message,
            };
        default:
            return { ...state };
    }
}

function joinFinalReducer(state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
        case 'JOIN_EMAIL_PASSWORD_SUCCESS':
            return {
                ...state,
                email: payload.email,
                password: payload.password,
                username: payload.username,
                accountname: payload.accountname,
                intro: payload.intro,
            };
        default:
            return { ...state };
    }
}

export { joinReducer, joinFinalReducer };
