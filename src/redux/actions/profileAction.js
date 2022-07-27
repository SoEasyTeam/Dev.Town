// dispatch로 보내준 token과 accountname을 파라미터로 불러온다. profile 함수 안에서 사용할 수 있게!!
function profile(token) {
    // console.log('profile success action');
    // 잘불러져왔는지 콘솔로 찍어봄
    // console.log(accountname);
    return async (dispatch, getState) => {
        // 명세서 확인!

        const authaccountname = getState().auth.accountname;

        let url = 'https://mandarin.api.weniv.co.kr';
        const reqPath = `/profile/${authaccountname}`;

        try {
            // 명세서 확인!
            let res = await fetch(url + reqPath, {
                method: 'GET',
                headers: {
                    // dispatch 받아온 token을 여기서 사용(명세서 확인)
                    Authorization: `Bearer ${token}`,
                    'Content-type': 'application/json',
                },
            });
            const resJson = await res.json();
            // 잘 받와 왔나 resJson을 찍어본다.
            console.log(resJson);
            // 리듀서(서랍)에게 PROFILE_SUCCESS(타입) 칸에서 payload의 옵션들을 요청한다.(아래 옵션을 읽어보기 profileReducer 리듀서로 이동)
            dispatch({
                type: 'PROFILE_SUCCESS',
                payload: {
                    // 왼쪽에 id는 우리가 임의로 지정한 값
                    // 오른쪽은 명세서에 지정된 값
                    id: resJson.profile._id,
                    username: resJson.profile.username,
                    accountname: resJson.profile.accountname,
                    intro: resJson.profile.intro,
                    image: resJson.profile.image,
                    isfollow: resJson.profile.isfollow,
                    following: resJson.profile.following,
                    follower: resJson.profile.follower,
                    followerCount: resJson.profile.followerCount,
                    followingCount: resJson.profile.followingCount,
                },
            });
            // 에러가 나면 catch의 값을 불러온다.
        } catch (error) {}
    };
}

function profileModification(name, image, accountname, intro) {
    console.log('profileModification success action');
    console.log(name);
    return async (dispatch, getState) => {
        let url = 'https://mandarin.api.weniv.co.kr';
        const reqPath = `/user`;
        const token = getState().auth.token;
        console.log(token);
        console.log(name);
        try {
            let res = await fetch(url + reqPath, {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    user: {
                        username: name,
                        accountname: accountname,
                        intro: intro,
                        image: image,
                    },
                }),
            });

            const resJson = await res.json();
            console.log(resJson);
            if (resJson.message === '이미 사용중인 계정 ID입니다.') {
                alert('이미 사용중인 계정 ID입니다.');
            }
            dispatch({
                type: 'PROFILE_SUCCESS',
                payload: {
                    id: resJson.profile._id,
                    username: resJson.profile.username,
                    accountname: resJson.profile.accountname,
                    intro: resJson.profile.intro,
                    image: resJson.profile.image,
                    isfollow: resJson.profile.isfollow,
                    following: resJson.profile.following,
                    follower: resJson.profile.follower,
                    followerCount: resJson.profile.followerCount,
                    followingCount: resJson.profile.followingCount,
                },
            });
        } catch (error) {}
    };
}

function profileModificationModal(userData) {
    console.log('productModificationModal success action');
    return async (dispatch, getState) => {
        dispatch({
            type: 'PROFILE_MODAL_SUCCESS',
            payload: {
                userData: userData,
            },
        });
    };
}

export const profileAction = {
    profile,
    profileModification,
    profileModificationModal,
};
