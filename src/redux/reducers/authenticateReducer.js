let initialState = {
    email: '',
    id: '',
    username: '',
    accountname: '',
    image: '',
    token: '',
    authenticate: false,
};

function authenticateReducer(state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
        case 'LOGIN_SUCCESS':
            console.log('login success reducer');
            return {
                ...state,
                id: payload.id,
                username: payload.username,
                email: payload.email,
                accountname: payload.accountname,
                image: payload.image,
                token: payload.token,
                authenticate: true,
            };
        default:
            return { ...state };
    }
}

export default authenticateReducer;
