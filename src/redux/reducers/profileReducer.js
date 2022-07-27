// 초기값
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

// state는 초기값을 넣어줌
function profileReducer(state = initialState, action) {
    console.log('profilereducer 성공');
    // return문 속에 payload 중첩을 줄이기 위해서 아래문장 안쓰면 action.payload.username 이런식으로 써야함
    let { type, payload } = action;
    // actiond에서 보내준 PROFILE_SUCCESS를 찾아 store에 값을 변경 시킴
    // store에서 변경된 값이 useSelector로 UI로 나가는 것!
    switch (type) {
        case 'PROFILE_SUCCESS':
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
        case 'PROFILE_MODAL_SUCCESS':
            return {
                userData: payload.userData,
            };
        default:
            return { ...state };
    }
}

export default profileReducer;
