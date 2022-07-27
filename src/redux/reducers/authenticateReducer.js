const token = localStorage.getItem('token');
const acountname = localStorage.getItem('accountname');

let initialState = {
    email: '',
    id: '',
    username: '',
    accountname: acountname,
    image: '',
    token: token,
    authenticate: false,
    message: '',
};

function authenticateReducer(state = initialState, action) {
    let { type, payload } = action;
    console.log(action);
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
        default:
            return { ...state };
    }
}

export default authenticateReducer;
