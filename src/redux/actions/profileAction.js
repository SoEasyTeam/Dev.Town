function profile(token, accountname) {
    console.log('profile success action');
    console.log(accountname);
    return async (dispatch, getState) => {
        let url = 'https://mandarin.api.weniv.co.kr';
        const reqPath = `/profile/${accountname}`;
        try {
            let res = await fetch(url + reqPath, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-type': 'application/json',
                },
            });
            const resJson = await res.json();
            console.log(resJson);
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

export const profileAction = { profile };
