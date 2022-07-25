let initialState = {
    email: '',
    password: '',
    username: '',
    accountname: '',
    intro: '',
    message: '',
    image: '',
};

let joinValid_initialState = {
    message: '',
    email: '',
    password: '',
};

function joinReducer(state = joinValid_initialState, action) {
    let { type, payload } = action;
    switch (type) {
        case 'JOIN_EMAILVALID_SUCCESS':
            return {
                ...state,
                message: payload.message,
                email: payload.email,
                password: payload.password,
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
                message: payload.message,
                image: payload.image,
            };
        // case 'JOIN_FAIL':
        //     return {
        //         ...state,
        //         message: payload.message,
        //     };
        default:
            return { ...state };
    }
}

export { joinReducer, joinFinalReducer };
