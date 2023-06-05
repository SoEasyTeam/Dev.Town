let initialState = {
    item: '',
};

function homeFeedReducer(state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
        case 'HOMEFEED_SUCCESS':
            return {
                ...state,
                item: payload.item,
            };

        default:
            return { ...state };
    }
}

export default homeFeedReducer;
