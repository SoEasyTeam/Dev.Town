let initialState = {
    item: '',
};

function homeFeedReducer(state = initialState, action) {
    let { type, payload } = action;
    console.log(action);
    switch (type) {
        case 'HOMEFEED_SUCCESS':
            console.log('homefeed reducer success');
            return {
                ...state,
                item: payload.item,
                // id: payload.id,
                // content: payload.content,
                // image: payload.image,
                // createdAt: payload.createdAt,
                // updatedAt: payload.updatedAt,
                // hearted: payload.hearted,
                // heartCount: payload.heartCount,
                // commentCount: payload.commentCount,
                // author: {
                //     _id: payload._id,
                //     username: payload.username,
                //     accountname: payload.accountname,
                //     following: payload.following,
                //     follower: payload.follower,
                //     followerCount: payload.followerCount,
                //     followingCount: payload.followingCount,
                // },
            };

        default:
            return { ...state };
    }
}

export default homeFeedReducer;
