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

let initialPostState = {
    post:''
}

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

function getPostReducer(state=initialPostState, action){
    let {type, payload}=action
    switch (type){
        case 'GET_POST':
            return {
                ...state,
                post: payload.post,
            }
        default: return {...state}
    }
}
export {postReducer,getPostReducer};
