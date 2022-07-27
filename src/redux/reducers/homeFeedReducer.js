let initialState = {
    item: '',
    token: '',
};

function homeFeedReducer(state = initialState, action) {
    let { type, payload } = action;
    // console.log(action);
    switch (type) {
        case 'HOMEFEED_SUCCESS':
            // console.log('homefeed reducer success');
            return {
                ...state,
                item: payload.item,
                lastToken: payload.token,
            };

        default:
            return { ...state };
    }
}

export default homeFeedReducer;
