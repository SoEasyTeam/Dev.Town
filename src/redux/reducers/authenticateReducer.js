let initialState = {
    email: '',
    password: '',
    authenticate: false,
};

function authenticateReducer(state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
        case 'LOGIN_SUCCESS':
            console.log('login success reducer');
            return {
                ...state,
                email: payload.email,
                password: payload.password,
                authenticate: true,
            };
        default:
            return { ...state };
    }
}

export default authenticateReducer;
