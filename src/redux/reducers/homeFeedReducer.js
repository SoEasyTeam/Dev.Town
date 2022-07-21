let initialState = {
    item: '',
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
            };

        default:
            return { ...state };
    }
}

export default homeFeedReducer;
