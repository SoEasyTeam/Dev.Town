let initialState = {
    id: '',
    username: '',
    accountname: '',
    intro: '',
    image: '',
    isfollow: '',
    following: '',
    follower: '',
    followerCount: '',
    followingCount: '',
};

function profileReducer(state = initialState, action) {
    let { type, payload } = action;
    console.log(action);
    switch (type) {
        case 'PROFILE_SUCCESS':
            console.log('profile success reducer');
            return {
                ...state,
                id: payload._id,
                username: payload.username,
                accountname: payload.accountname,
                intro: payload.intro,
                image: payload.image,
                isfollow: payload.isfollow,
                following: payload.following,
                follower: payload.follower,
                followerCount: payload.followerCount,
                followingCount: payload.followingCount,
            };
        default:
            return { ...state };
    }
}

export default profileReducer;
