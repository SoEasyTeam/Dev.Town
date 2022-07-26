let initialState = {
    // "id": '',
    // "content": '',
    // "image": '',
    // "createdAt": '',
    // "updatedAt": '',
    // "hearted": false,
    // "heartCount": '',
    // "commentCount": '',
    // "author": {
    //     "_id": '',
    //     "username": '',
    //     "accountname": '',
    //     "following": [],
    //     "follower": [],
    //     "followerCount": '',
    //     "followingCount": ''
    // }
    post: '',
};

function postReducer(state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
        case 'POST_SUCCESS':
            return {
                ...state,
                post: payload.post,
            };
        default:
            return { ...state };
    }
}

export default postReducer;
