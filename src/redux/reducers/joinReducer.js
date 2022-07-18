let initialState = {
    email: '',
    password: '',
    username: '',
    accountname: '',
    intro: '',
};

function joinReducer(state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
        case 'JOIN_EMAIL_PASSWORD_SUCCESS':
            console.log('join email pw success reducer');
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

export default joinReducer;
