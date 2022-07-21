let initialState = {
    "id": '',
    "content": '',
    "image": '',
    "createdAt": '',
    "updatedAt": '',
    "hearted": false,
    "heartCount": '',
    "commentCount": '',
    "author": {
        "_id": '',
        "username": '',
        "accountname": '',
        "following": [],
        "follower": [],
        "followerCount": '',
        "followingCount": ''
    }
}

function postReducer(state=initialState,action){
    let {type, payload} = action
    switch(type){
        case 'POST_SUCCESS':
            return {
                ...state,
                "id": payload.id,
                "content": payload.content,
                "image": payload.image,
                "createdAt": payload.createdAt,
                "updatedAt": payload.updatedAt,
                "hearted": payload.hearted,
                "heartCount": payload.heartCount,
                "commentCount": payload.commentCount,
                "author": {
                    "_id": payload._id,
                    "username": payload.username,
                    "accountname": payload.accountname,
                    "following": [...state.following, payload.following],
                    "follower": [...state.follower, payload.follower],
                    "followerCount": payload.followerCount,
                    "followingCount": payload.followingCount
                }
            }
            default:
                return {...state}
    }
}

export default postReducer