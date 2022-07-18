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
    console.log(action);
    switch (type) {
        case 'LOGIN_SUCCESS':
            console.log('login success reducer');
            return {
                ...state,
                email: payload.email,
                id: payload._id,
                username: payload.username,
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
